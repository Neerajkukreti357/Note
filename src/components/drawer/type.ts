import { LucideIcon } from 'lucide-react-native';

export type DrawerButton = {
  labels: string;
  description: string;
  icon: LucideIcon;
  onPress: () => void;
};

export type BottomButton = {
  labels: string;
  icon: LucideIcon;
  onPress: () => void;
};
