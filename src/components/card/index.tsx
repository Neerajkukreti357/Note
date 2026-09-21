import React from 'react';
import { View } from 'react-native';
import { CardProps, CardSectionProps } from './type';
import { useTheme } from '@/context/ThemeContext';
import createStyles from './style';

const Card = ({ children, style, ...props }: CardProps) => {
  const { colors } = useTheme();
  const styles = createStyles(colors);
  return (
    <View {...props} style={[styles.card, style]}>
      {children}
    </View>
  );
};

const Header = ({ children, style, ...props }: CardSectionProps) => {
  const { colors } = useTheme();
  const styles = createStyles(colors);
  return (
    <View {...props} style={[styles.header, style]}>
      {children}
    </View>
  );
};

const Body = ({ children, style, ...props }: CardSectionProps) => {
  const { colors } = useTheme();
  const styles = createStyles(colors);
  return (
    <View {...props} style={[styles.body, style]}>
      {children}
    </View>
  );
};

const Footer = ({ children, style, ...props }: CardSectionProps) => {
  const { colors } = useTheme();
  const styles = createStyles(colors);
  return (
    <View {...props} style={[styles.footer, style]}>
      {children}
    </View>
  );
};

Card.Header = Header;
Card.Body = Body;
Card.Footer = Footer;

export default Card;
