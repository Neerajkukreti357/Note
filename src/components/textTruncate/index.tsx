import React from 'react';
import { Text, TextProps } from 'react-native';

interface TextTruncateProps extends TextProps {
  children: string;
  numberOfLines?: number;
}

const TextTruncate = ({
  children,
  numberOfLines = 2,
  style,
  ...props
}: TextTruncateProps) => {
  return (
    <Text
      {...props}
      numberOfLines={numberOfLines}
      ellipsizeMode="tail"
      style={style}
    >
      {children}
    </Text>
  );
};

export default TextTruncate;
