import { type ViewProps, type StyleProp, type ViewStyle } from 'react-native';

export type CardProps = ViewProps & {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
};

export type CardSectionProps = ViewProps & {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
};
