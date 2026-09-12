import RNFS from 'react-native-fs';
import { type Asset } from 'react-native-image-picker';
import ImageResizer from '@bam.tech/react-native-image-resizer';

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

export const saveImagePermanently = async (
  image: Asset,
): Promise<Asset | null> => {
  try {
    if (!image.uri) {
      return null;
    }

    const fileName = `image_${Date.now()}.jpg`;

    const destinationPath = `${RNFS.DocumentDirectoryPath}/${fileName}`;

    const sourcePath = image.uri.replace('file://', '');

    await RNFS.copyFile(sourcePath, destinationPath);

    return {
      ...image,
      uri: `file://${destinationPath}`,
      fileName,
    };
  } catch (error) {
    console.error('Error saving image:', error);
    return null;
  }
};

export const resizeImage = async (image: Asset) => {
  if (!image.uri) return null;

  try {
    const result = await ImageResizer.createResizedImage(
      image.uri,
      1200, // max width
      1200, // max height
      'JPEG',
      80, // quality
      0, // rotation
    );

    return {
      ...image,
      uri: result.uri,
      width: result.width,
      height: result.height,
      fileSize: result.size,
      fileName: result.name,
      type: 'image/jpeg',
    };
  } catch (error) {
    console.error('Image resize error:', error);
    return null;
  }
};
