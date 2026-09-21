export const SimpleNoteInitialsValues = {
  title: '',
  description: '',
  type: 1,
  priority: 'high' as const,
};

export const CheckNoteInitialsValues = {
  title: '',
  checkList: '',
  priority: 'high' as const,
  type: 2,
};

export const MediaNoteInitialsValues = {
  title: '',
  checkList: '',
  description: '',
  priority: 'high' as const,
  media: [],
  audioPath: '',
  imageList: [],
  type: 3,
};
