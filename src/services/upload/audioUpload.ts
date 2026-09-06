import { supabase } from '@/config/supabase';
import { decode } from 'base64-arraybuffer';
import RNFS from 'react-native-fs';

const uploadAudio = async (localPath: string, db: any) => {
  // Read audio file
  const base64 = await RNFS.readFile(localPath, 'base64');

  // Convert base64 → ArrayBuffer
  const fileData = decode(base64);

  // Unique Supabase path
  const filePath = `audio/audio-${Date.now()}.m4a`;

  // Upload
  const { error } = await supabase.storage
    .from('media')
    .upload(filePath, fileData, {
      contentType: 'audio/mp4',
      upsert: false,
    });

  if (error) {
    throw error;
  }

  // Public URL
  const { data } = supabase.storage.from('media').getPublicUrl(filePath);

  const audioUrl = data.publicUrl;

  // Save URL in SQLite
  await db.runAsync(
    `INSERT INTO media
      (type, url, created_at)
     VALUES (?, ?, datetime('now'))`,
    ['audio', audioUrl],
  );

  return audioUrl;
};

export default uploadAudio;
