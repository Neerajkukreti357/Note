import { LucideIcon } from 'lucide-react-native';
import { StyleProp, ViewStyle } from 'react-native';

export type NoDataFoundProps = {
  title: string;
  description: string;
  Icon: LucideIcon;
  containerStyle?: StyleProp<ViewStyle>;
};
