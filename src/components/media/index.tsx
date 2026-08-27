import { ImagePlus, Mic, Pause } from 'lucide-react-native';
import { Pressable, Text, View } from 'react-native';
import styles from './styles';
import { useState } from 'react';

const Media = () => {
  const [recording, setRecording] = useState(false);
  const [seconds, setSeconds] = useState(0);
  function toggleRecording() {
    setRecording(value => !value);
    setSeconds(value => (recording ? value : value + 1));
  }
  return (
    <View style={styles.mainContainer}>
      <View style={styles.mediaCard}>
        <Text style={styles.panelHeading}>Images</Text>
        <Pressable style={styles.upload}>
          <View style={styles.uploadIcon}>
            <ImagePlus color="#76D4F2" size={19} />
          </View>
          <Text style={styles.uploadText}>
            Drop an image or <Text style={styles.browse}>browse</Text>
          </Text>
          <Text style={styles.uploadHint}>PNG, JPG up to 10MB</Text>
        </Pressable>
        <View style={styles.thumbs}>
          <View style={styles.thumb}>
            <ImagePlus color="#768096" size={17} />
          </View>
          <View style={styles.thumb}>
            <ImagePlus color="#768096" size={17} />
          </View>
          <View style={styles.thumb}>
            <ImagePlus color="#768096" size={17} />
          </View>
        </View>
      </View>
      <View style={styles.mediaCard}>
        <Text style={styles.panelHeading}>Voice note</Text>
        <View style={styles.voice}>
          <View style={styles.wave}>
            {Array.from({ length: 17 }, (_, index) => (
              <View
                key={index}
                style={[styles.waveBar, { height: 9 + ((index * 11) % 23) }]}
              />
            ))}
          </View>
          <Text style={styles.timer}>
            00:{seconds.toString().padStart(2, '0')}
          </Text>
          <Pressable
            style={[styles.mic, recording && styles.recording]}
            onPress={toggleRecording}
          >
            {recording ? (
              <Pause color="#FFFFFF" size={21} fill="#FFFFFF" />
            ) : (
              <Mic color="#FFFFFF" size={21} />
            )}
          </Pressable>
          <Text style={styles.voiceHint}>
            {recording ? 'Recording...' : 'Tap to record'}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Media;
