import { check, request, PERMISSIONS, RESULTS } from 'react-native-permissions';

import { Alert, Linking, PermissionsAndroid, Platform } from 'react-native';

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

export const requestGalleryPermission = async (
  isFirstTime: boolean = false,
): Promise<boolean> => {
  if (Platform.OS === 'android') {
    const permission =
      Platform.Version >= 33
        ? PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES
        : PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE;

    const currentStatus = await PermissionsAndroid.check(permission);

    if (currentStatus) {
      return true;
    }

    const result = await PermissionsAndroid.request(permission);

    if (result === PermissionsAndroid.RESULTS.GRANTED) {
      return true;
    }

    if (result === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN && !isFirstTime) {
      openAppSettings();
    }

    return false;
  }

  // iOS
  const permission = PERMISSIONS.IOS.PHOTO_LIBRARY;

  const status = await check(permission);

  // Already allowed
  if (status === RESULTS.GRANTED || status === RESULTS.LIMITED) {
    return true;
  }

  // Permanently denied / restricted
  if (
    status === RESULTS.BLOCKED ||
    (status === RESULTS.UNAVAILABLE && !isFirstTime)
  ) {
    openAppSettings();
    return false;
  }

  // First time / can ask again
  const result = await request(permission);

  if (result === RESULTS.GRANTED || result === RESULTS.LIMITED) {
    return true;
  }

  // User denied
  if (result === RESULTS.BLOCKED && !isFirstTime) {
    openAppSettings();
  }

  return false;
};

export const requestCameraPermission = async (): Promise<boolean> => {
  const permission =
    Platform.OS === 'ios' ? PERMISSIONS.IOS.CAMERA : PERMISSIONS.ANDROID.CAMERA;

  const status = await check(permission);

  // Already allowed
  if (status === RESULTS.GRANTED) {
    return true;
  }

  // Permission can be requested
  if (status === RESULTS.DENIED) {
    const result = await request(permission);

    return result === RESULTS.GRANTED;
  }

  // Blocked / restricted
  if (
    status === RESULTS.BLOCKED ||
    status === RESULTS.UNAVAILABLE ||
    status === RESULTS.LIMITED
  ) {
    return false;
  }

  return false;
};
