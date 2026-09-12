import { DarkColors } from '@/theme';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 16,
    right: 16,
    bottom: 20,
  },

  tabBar: {
    height: 68,
    backgroundColor: DarkColors.secondary,
    borderRadius: 38,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 8,
    borderColor: DarkColors.lightBorder,
    borderWidth: 1,
  },

  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  iconContainer: {
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },

  activeIconContainer: {
    borderRadius: 24,
    backgroundColor: DarkColors.tagWork,
  },
});

export default styles;
