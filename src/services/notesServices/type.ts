export type Priority = 'high' | 'medium' | 'low';
// ... your existing create functions stay as-is ...

export interface UpdateNoteFields {
  title?: string;
  description?: string;
  checklist?: string;
  noteType?: number;
  priority?: Priority;
  audio_path?: string;
  imageList?: string;
  is_completed?: number;
  is_deleted?: number;
}
