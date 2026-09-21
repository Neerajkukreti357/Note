import dayjs from 'dayjs';

export const formatTime = (totalSeconds: number) => {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  return `${minutes.toString().padStart(2, '0')}:${seconds
    .toString()
    .padStart(2, '0')}`;
};

export const formatNoteDate = (timestamp: string | number): string => {
  const ms = typeof timestamp === 'string' ? parseFloat(timestamp) : timestamp;
  return dayjs(ms).format('MMM D, YYYY h:mm A').toLowerCase();
};
