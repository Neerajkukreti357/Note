const AppColors = {
  primary: '#0E1525',
  secondary: '#1C2538',
  heading: '#C3C0FF',
  text: '#C5C5D8',
  highlightColor: '#554ed5',
  tagBackground: '#30384C',
  tagWork: '#76D4F2',
  tagPriority: '#C5C4D7',
  icon: '#D9E2FB',
  lightBorder: '#c3c5d861',
  selectedMonthColor: '#818CF8',
  monthTextColor: '#FFFFFF',
};

export const badgeColors = {
  high: {
    background: '#3A2D3A',
    text: '#F0B8C8',
  },

  medium: {
    background: '#3A352A',
    text: '#E6C98A',
  },

  low: {
    background: '#263546',
    text: '#8DD7EA',
  },

  complete: {
    background: '#283A36',
    text: '#8FD3B8',
  },

  pending: {
    background: '#302C46',
    text: '#C4B5FD',
  },

  'partial complete': {
    background: '#263A40',
    text: '#7DD3D8',
  },
} as const;

export default AppColors;
