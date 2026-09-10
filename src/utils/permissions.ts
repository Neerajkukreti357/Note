import { check, request, PERMISSIONS, RESULTS } from 'react-native-permissions';

import { Alert, Linking, Platform } from 'react-native';

const openAppSettings = () => {
  if (Platform.OS === 'ios') {
    Linking.openURL('app-settings:');
  } else {
    Linking.openSettings(); // Android
  }
};

export const requestMicrophonePermission = async (
  isFirstTime: boolean = false,
): Promise<boolean> => {
  const permission =
    Platform.OS === 'ios'
      ? PERMISSIONS.IOS.MICROPHONE
      : PERMISSIONS.ANDROID.RECORD_AUDIO;

  try {
    let status = await check(permission);

    if (status === RESULTS.GRANTED) {
      return true;
    }

    if (status === RESULTS.BLOCKED && !isFirstTime) {
      Alert.alert(
        'Microphone Permission Required',
        'Microphone access is disabled. Please enable it in Settings to record audio.',
        [
          { text: 'Cancel', style: 'cancel' },
          { text: 'Open Settings', onPress: () => openAppSettings() },
        ],
      );

      return false;
    }

    if (status === RESULTS.DENIED && !isFirstTime) {
      Alert.alert(
        'Microphone Permission Required',
        'Microphone access is disabled. Please enable it in Settings to record audio.',
        [
          { text: 'Cancel', style: 'cancel' },
          { text: 'Open Settings', onPress: () => openAppSettings() },
        ],
      );
      return false;
    }

    status = await request(permission);

    return status === RESULTS.GRANTED;
  } catch (error) {
    console.error('Microphone permission error:', error);

    return false;
  }
};
