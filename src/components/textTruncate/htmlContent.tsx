import React from 'react';
import { useWindowDimensions, View } from 'react-native';
import RenderHTML from 'react-native-render-html';
import { MixedStyleDeclaration } from 'react-native-render-html';
import { DarkColors, fontSize } from '@/theme';
import { HTMLTextTruncateProps } from './type';
import { useTheme } from '@/context/ThemeContext';
import createStyles from './style';

const TAGS_STYLES: MixedStyleDeclaration &
  Record<string, MixedStyleDeclaration> = {
  p: {
    color: DarkColors.icon,
    fontSize: fontSize.description,
    marginTop: 0,
    marginBottom: 8,
  },
  strong: { color: DarkColors.icon, fontWeight: '700' },
  em: { color: DarkColors.icon, fontStyle: 'italic' },
};

const HTMLTextTruncate = ({ html, baseStyle }: HTMLTextTruncateProps) => {
  const { width } = useWindowDimensions();
  const contentWidth = width;
  const { colors } = useTheme();
  const styles = createStyles(colors);
  return (
    <View style={styles.wrapper}>
      <RenderHTML
        contentWidth={contentWidth}
        source={{ html }}
        baseStyle={baseStyle}
        tagsStyles={TAGS_STYLES}
      />
    </View>
  );
};

export default HTMLTextTruncate;
