import {
  SimpleNoteFormData,
  CheckNoteFormData,
  MediaNoteFormData,
} from '@/screens/AddNotesScreen/shema';
import { Note } from '@/store/type';
import { Asset } from 'react-native-image-picker';

/**
 * Maps a Note (fetched from API/store) into the correct
 * react-hook-form default values, based on which tab/type it belongs to.
 */
export const mapNoteToFormValues = (
  item: Note,
  active: number,
): SimpleNoteFormData | CheckNoteFormData | MediaNoteFormData => {
  switch (active) {
    case 0: // Simple note
      return {
        title: item.title ?? '',
        description: item.description ?? '',
        type: item.noteType,
        priority: item.priority,
      } as SimpleNoteFormData;

    case 1: // Checklist note
      return {
        title: item.title ?? '',
        type: item.noteType,
        priority: item.priority,
        checkList: item.checklist ?? '[]',
      } as CheckNoteFormData;

    default: {
      let parsedImageList: Asset[] = [];
      try {
        parsedImageList = item.imageList ? JSON.parse(item.imageList) : [];
      } catch {
        parsedImageList = [];
      }

      const media: MediaNoteFormData['media'] = item.audio_path
        ? ['1']
        : parsedImageList.length > 0
        ? ['2']
        : [];

      return {
        title: item.title ?? '',
        description: item.description ?? '',
        type: item.noteType,
        priority: item.priority,
        media,
        audioPath: item.audio_path ?? '',
        imageList: parsedImageList,
      };
    }
  }
};
