import { check, request, PERMISSIONS, RESULTS } from 'react-native-permissions';

import { Platform } from 'react-native';

export const requestMicrophonePermission = async (): Promise<boolean> => {
  const permission =
    Platform.OS === 'ios'
      ? PERMISSIONS.IOS.MICROPHONE
      : PERMISSIONS.ANDROID.RECORD_AUDIO;

  try {
    let status = await check(permission);

    if (status === RESULTS.GRANTED) {
      return true;
    }

    if (status === RESULTS.BLOCKED) {
      console.log(
        'Microphone permission is blocked. Please enable it from Settings.',
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
