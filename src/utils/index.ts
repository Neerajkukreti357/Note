import RNFS from 'react-native-fs';
import { launchImageLibrary, type Asset } from 'react-native-image-picker';

export const getCurrentRouteName = (state: any): string => {
  const route = state.routes[state.index];

  if (route.state) {
    return getCurrentRouteName(route.state);
  }

  return route.name;
};

export const isEditorEmpty = (html?: string) => {
  if (!html) return true;
  const stripped = html.replace(/<[^>]*>/g, '').trim();
  return stripped.length === 0;
};

export const savePersistentAudio = async (cacheUri: string) => {
  const fileName = cacheUri.split('/').pop();
  const destDir = `${RNFS.DocumentDirectoryPath}/media/audio`;
  const destPath = `${destDir}/${fileName}`;

  await RNFS.mkdir(destDir);
  await RNFS.moveFile(cacheUri.replace('file://', ''), destPath);

  return `file://${destPath}`;
};

export const pickImage = async (): Promise<Asset[] | null> => {
  const result = await launchImageLibrary({
    mediaType: 'photo',
    selectionLimit: 0, // 0 = allow multiple selection, 1 = single
    quality: 1, // grab full quality here — you compress yourself right after
  });

  if (result.didCancel || result.errorCode) {
    if (result.errorCode) {
      console.log('Image picker error:', result.errorMessage);
    }
    return null;
  }

  return result.assets ?? null;
};
