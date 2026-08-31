// store/useNotesStore.ts
import { getAllNotes } from '@/services/notesServices/createNotesServices';
import { create } from 'zustand';
import { NotesState } from './type';

export const useNotesStore = create<NotesState>((set, get) => ({
  notes: [],
  loading: false,
  error: null,
  hasFetched: false,

  fetchNotes: async (force = false) => {
    // skip refetching if we already have data, unless force = true
    if (get().hasFetched && !force) return;

    set({ loading: true, error: null });
    try {
      const data = await getAllNotes();
      set({ notes: data, loading: false, hasFetched: true });
    } catch (err) {
      set({ error: (err as Error).message, loading: false });
    }
  },
}));
