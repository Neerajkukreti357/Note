import React, { useMemo } from 'react';
import { useWindowDimensions, View } from 'react-native';
import RenderHTML from 'react-native-render-html';
import { MixedStyleDeclaration } from 'react-native-render-html';
import { fontSize } from '@/theme';
import { HTMLTextTruncateProps } from './type';
import { useTheme } from '@/context/ThemeContext';
import createStyles from './style';

const HTMLText = ({ html, baseStyle }: HTMLTextTruncateProps) => {
  const { width } = useWindowDimensions();
  const contentWidth = width;
  const { colors } = useTheme();
  const styles = createStyles(colors);

  const TAGS_STYLES: MixedStyleDeclaration &
    Record<string, MixedStyleDeclaration> = useMemo(
    () => ({
      p: {
        color: colors.icon,
        fontSize: fontSize.description,
        marginTop: 0,
        marginBottom: 8,
      },
      strong: { color: colors.icon, fontWeight: '700' },
      em: { color: colors.icon, fontStyle: 'italic' },
      ul: { color: colors.icon },
      li: { color: colors.icon, fontSize: fontSize.description },
    }),
    [colors],
  );

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

export default HTMLText;
