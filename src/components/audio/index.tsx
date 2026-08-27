import React, { useRef, useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import {
  PlayerState,
  type IWaveformRef,
  Waveform,
} from '@simform_solutions/react-native-audio-waveform';
import { Play, Pause } from 'lucide-react-native';

import { AppColors } from '@/theme';
import styles from './style';

type AudioPlayerProps = {
  audioPath: string;
};

const AudioPlayer = ({ audioPath }: AudioPlayerProps) => {
  const waveformRef = useRef<IWaveformRef>(null);

  const [playerState, setPlayerState] = useState<PlayerState>(
    PlayerState.stopped,
  );

  const [currentProgress, setCurrentProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  const isPlaying = playerState === PlayerState.playing;

  const handlePlayPause = async () => {
    if (!waveformRef.current) {
      return;
    }

    if (playerState === PlayerState.playing) {
      await waveformRef.current.pausePlayer();
      return;
    }

    if (playerState === PlayerState.paused) {
      await waveformRef.current.resumePlayer();
      return;
    }

    await waveformRef.current.startPlayer();
  };

  const formatTime = (milliseconds: number) => {
    const totalSeconds = Math.floor(milliseconds / 1000);

    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <View style={styles.container}>
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
        <Waveform
          ref={waveformRef}
          mode="static"
          path={audioPath}
          candleWidth={4}
          candleSpace={3}
          candleHeightScale={4}
          waveColor={AppColors.icon}
          scrubColor={AppColors.highlightColor}
          containerStyle={styles.waveform}
          onPlayerStateChange={state => {
            setPlayerState(state);
          }}
          onCurrentProgressChange={(current, total) => {
            setCurrentProgress(current);
            setDuration(total);
          }}
          onError={error => {
            console.log('Audio error:', error);
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
