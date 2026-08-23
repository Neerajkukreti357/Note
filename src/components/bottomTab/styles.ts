import { AppColors } from '@/theme';
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
    backgroundColor: AppColors.secondary,
    borderRadius: 38,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 8,
    borderColor: AppColors.icon,
    borderWidth: 2,
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
    backgroundColor: AppColors.tagWork,
  },
});

export default styles;
