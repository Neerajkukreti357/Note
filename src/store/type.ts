import { Priority } from '@/services/notesServices/type';

export interface Note {
  id: number;
  title: string;
  description: string;
  noteType: number;
  priority: Priority;
  is_completed: number;
  is_partial_completed: number;
  is_deleted: number;
  created_at: number;
  updated_at: number;
  checklist: string;
}

export interface NotesState {
  notes: Note[];
  loading: boolean;
  error: string | null;
  hasFetched: boolean;
  fetchNotes: (force?: boolean) => Promise<void>;
}
