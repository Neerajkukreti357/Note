import React from 'react';
import { View } from 'react-native';
import styles from './style';
import { CardProps, CardSectionProps } from './type';

const Card = ({ children, style, ...props }: CardProps) => {
  return (
    <View {...props} style={[styles.card, style]}>
      {children}
    </View>
  );
};

const Header = ({ children, style, ...props }: CardSectionProps) => {
  return (
    <View {...props} style={[styles.header, style]}>
      {children}
    </View>
  );
};

const Body = ({ children, style, ...props }: CardSectionProps) => {
  return (
    <View {...props} style={[styles.body, style]}>
      {children}
    </View>
  );
};

const Footer = ({ children, style, ...props }: CardSectionProps) => {
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
