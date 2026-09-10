import React, { useRef, useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import {
  AudioWaveformView,
  type AudioWaveformViewRef,
} from 'react-native-waveform-player';
import { Play, Pause, Trash2 } from 'lucide-react-native';
import { AppColors } from '@/theme';
import styles from './style';

type AudioPlayerProps = {
  audioPath: string;
  isDeleted?: boolean;
  onDelete?: () => void;
};

const AudioPlayer = ({
  audioPath,
  isDeleted = false,
  onDelete,
}: AudioPlayerProps) => {
  const waveformRef = useRef<AudioWaveformViewRef>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentProgress, setCurrentProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  const handlePlayPause = () => {
    if (!waveformRef.current) {
      return;
    }

    waveformRef.current.toggle();
  };

  const formatTime = (milliseconds: number) => {
    const totalSeconds = Math.floor(milliseconds / 1000);

    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <View style={styles.container}>
      {isDeleted && (
        <Pressable onPress={onDelete} style={styles.binContainer}>
          <Trash2 color={'red'} size={18} />
        </Pressable>
      )}
      {/* Play / Pause Button */}
      <Pressable onPress={handlePlayPause} style={styles.playButton}>
        {isPlaying ? (
          <Pause size={27} color={AppColors.heading} fill={AppColors.heading} />
        ) : (
          <Play size={27} color={AppColors.heading} fill={AppColors.heading} />
        )}
      </Pressable>

      {/* Waveform + Time */}
      <View style={styles.waveformSection}>
        <AudioWaveformView
          ref={waveformRef}
          source={{ uri: audioPath }}
          style={styles.waveform}
          showPlayButton={false}
          showTime={false}
          showSpeedControl={false}
          showBackground={false}
          barWidth={4}
          barGap={3}
          playedBarColor={AppColors.highlightColor}
          unplayedBarColor={AppColors.icon}
          onPlayerStateChange={e => {
            setIsPlaying(e.isPlaying);
          }}
          onTimeUpdate={e => {
            setCurrentProgress(e.currentTimeMs);
            setDuration(e.durationMs);
          }}
          onLoad={e => {
            setDuration(e.durationMs);
          }}
          onLoadError={error => {
            console.log('Audio load error:', error);
          }}
        />

        <View style={styles.timeContainer}>
          <Text style={styles.timeText}>{formatTime(currentProgress)}</Text>

          <Text style={styles.timeText}>{formatTime(duration)}</Text>
        </View>
      </View>
    </View>
  );
};

export default AudioPlayer;
