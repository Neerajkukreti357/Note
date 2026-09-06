import { launchImageLibrary } from 'react-native-image-picker';
import RNFS from 'react-native-fs';
import { decode } from 'base64-arraybuffer';
import { supabase } from '@/config/supabase';

const uploadImageAndSave = async (db: any) => {
  // 1. Pick image
  const result = await launchImageLibrary({
    mediaType: 'photo',
    quality: 0.8,
    selectionLimit: 1,
  });

  // User cancelled picker
  if (result.didCancel) {
    return;
  }

  // Picker error
  if (result.errorCode) {
    throw new Error(result.errorMessage || 'Image picker error');
  }

  const asset = result.assets?.[0];

  if (!asset?.uri) {
    throw new Error('No image selected');
  }

  // 2. Get file extension
  const fileExtension =
    asset.fileName?.split('.').pop()?.toLowerCase() || 'jpg';

  // 3. Create unique Supabase path
  const filePath = `images/image-${Date.now()}.${fileExtension}`;

  // 4. Read local image as base64
  const base64 = await RNFS.readFile(asset.uri, 'base64');

  // 5. Convert base64 → ArrayBuffer
  const fileData = decode(base64);

  // 6. Upload to Supabase Storage
  const { data: uploadData, error: uploadError } = await supabase.storage
    .from('media')
    .upload(filePath, fileData, {
      contentType: asset.type || 'image/jpeg',
      upsert: false,
    });

  if (uploadError) {
    throw uploadError;
  }

  console.log('Uploaded:', uploadData);

  // 7. Get public URL
  const { data: publicUrlData } = supabase.storage
    .from('media')
    .getPublicUrl(filePath);

  const imageUrl = publicUrlData.publicUrl;

  // 8. Save URL to SQLite
  await db.runAsync(
    `INSERT INTO media
      (type, url, created_at)
     VALUES (?, ?, datetime('now'))`,
    ['image', imageUrl],
  );

  return imageUrl;
};

export default uploadImageAndSave;
