// hooks/useNotes.ts
import { useNotesStore } from '@/store';
import { useEffect } from 'react';

export const useNotes = () => {
  const notes = useNotesStore(state => state.notes);
  const loading = useNotesStore(state => state.loading);
  const error = useNotesStore(state => state.error);
  const fetchNotes = useNotesStore(state => state.fetchNotes);

  useEffect(() => {
    fetchNotes(); // will skip if already cached
  }, [fetchNotes]);

  const refetch = () => fetchNotes(true); // force refresh, e.g. after add/edit/delete

  return { notes, loading, error, refetch };
};
