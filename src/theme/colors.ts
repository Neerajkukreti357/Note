export const DarkColors = {
  lightPrimary: '#1A2237',
  primary: '#0E1525',
  activeTab: '#0E1525',
  secondary: '#1C2538',
  heading: '#C3C0FF',
  text: '#C5C5D8',
  highlightColor: '#554ED5',
  tagBackground: '#30384C',
  tagWork: '#76D4F2',
  tagPriority: '#C5C4D7',
  icon: '#D9E2FB',
  lightBorder: '#C3C5D861',
  selectedMonthColor: '#818CF8',
  monthTextColor: '#FFFFFF',
  btnTextcolor: '#FFFFFF',
  settingButtonBackgroundColor: '#1A2436',
  drawerBackgroundColor: '#0E1729',
  iconBg: '#2C344A',
  themeChanger: '#4BD6F5',
  tertiary: '#141D31',
};

export const LightColors = {
  lightPrimary: '#F8FAFF',
  primary: '#FFFFFF',
  activeTab: '#d4d8df',
  secondary: '#F1F4FA',
  heading: '#252B4A',
  text: '#5B6278',
  highlightColor: '#554ED5',
  tagBackground: '#EEF0F7',
  tagWork: '#1599C4',
  tagPriority: '#636579',
  icon: '#3F4760',
  lightBorder: '#3f4041ab',
  selectedMonthColor: '#554ED5',
  monthTextColor: '#252B4A',
  btnTextcolor: '#FFFFFF',
  settingButtonBackgroundColor: '#F1F3F8',
  drawerBackgroundColor: '#F8FAFF',
  iconBg: '#E9EAFB',
  themeChanger: '#089FC1',
  tertiary: '#141D31',
};

// These don't depend on the theme
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

export type ThemeMode = 'dark' | 'light';

export type ThemeColors = {
  [K in keyof typeof DarkColors]: string;
};

export default DarkColors;
