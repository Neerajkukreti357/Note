import { Note } from '@/store/type';

export interface ImageItem {
  uri: string;
  fileName: string;
  type: string;
  fileSize: number;
  width: number;
  height: number;
}

export interface NoteCardPorps {
  item: Note;
  isSheetOpen: boolean;
  toggleSheet: (item: Note) => void;
  selectedNote: Note | null;
  setIsSheetOpen: React.Dispatch<React.SetStateAction<boolean>>;
  refetch: () => void;
  isPermanantTab?: boolean;
  isDraft?: boolean;
}
