export type Priority = 'high' | 'medium' | 'low';
// ... your existing create functions stay as-is ...

export interface UpdateNoteFields {
  title?: string;
  description?: string;
  checklist?: string | null;
  noteType?: number;
  priority?: Priority;
  audio_path?: string;
  imageList?: string;
  is_completed?: number;
  is_deleted?: number;
  is_draft?: number;
}
