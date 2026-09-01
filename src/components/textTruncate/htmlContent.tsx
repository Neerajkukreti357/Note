import React, { useState } from 'react';
import {
  LayoutChangeEvent,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import RenderHTML from 'react-native-render-html';
import styles from './style';
import { MixedStyleDeclaration } from 'react-native-render-html';
import { AppColors, fontSize } from '@/theme';

interface HTMLTextTruncateProps {
  html: string;
  numberOfLines?: number;
  lineHeight?: number;
  onReadMore?: () => void;
  baseStyle?: MixedStyleDeclaration;
}

const HTMLTextTruncate = ({
  html,
  numberOfLines = 3,
  lineHeight = 29,
  onReadMore,
  baseStyle,
}: HTMLTextTruncateProps) => {
  const { width } = useWindowDimensions();

  const [contentHeight, setContentHeight] = useState(0);
  const [containerWidth, setContainerWidth] = useState(width);

  const maxHeight = numberOfLines * lineHeight;

  const handleLayout = (event: LayoutChangeEvent) => {
    const { width: measuredWidth } = event.nativeEvent.layout;

    if (measuredWidth !== containerWidth) {
      setContainerWidth(measuredWidth);
    }
  };

  const isOverflowing = contentHeight > maxHeight;

  return (
    <View style={styles.wrapper} onLayout={handleLayout}>
      <View
        style={{
          maxHeight: isOverflowing ? maxHeight : undefined,
          overflow: 'hidden',
        }}
      >
        <View
          onLayout={event => {
            setContentHeight(event.nativeEvent.layout.height);
          }}
        >
          <RenderHTML
            contentWidth={containerWidth}
            source={{ html }}
            baseStyle={baseStyle}
            tagsStyles={{
              p: {
                color: AppColors.icon,
                fontSize: fontSize.description,
                marginTop: 0,
                marginBottom: 8,
              },

              strong: {
                color: AppColors.icon,
                fontWeight: '700',
              },

              em: {
                color: AppColors.icon,
                fontStyle: 'italic',
              },
            }}
          />
        </View>
      </View>

      {isOverflowing && (
        <Text
          style={[
            styles.readMoreText,
            {
              color: AppColors.icon,
              fontSize: fontSize.description,
            },
          ]}
          onPress={onReadMore}
        >
          ... Read more
        </Text>
      )}
    </View>
  );
};

export default HTMLTextTruncate;
