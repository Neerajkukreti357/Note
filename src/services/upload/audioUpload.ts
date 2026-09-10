import RNFS from 'react-native-fs';
import { decode } from 'base64-arraybuffer';
import { supabase } from '@/config/supabase';

const uploadAudio = async (localPath: string) => {
  const base64 = await RNFS.readFile(localPath, 'base64');

  const fileData = decode(base64);

  const filePath = `audio/audio-${Date.now()}.m4a`;

  const { error } = await supabase.storage
    .from('media')
    .upload(filePath, fileData, {
      contentType: 'audio/mp4',
      upsert: false,
    });

  if (error) {
    throw error;
  }

  const { data } = supabase.storage.from('media').getPublicUrl(filePath);

  return data.publicUrl;
};

export default uploadAudio;
