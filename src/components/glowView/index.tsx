import React from 'react';
import Svg, { Defs, RadialGradient, Stop, Circle } from 'react-native-svg';
import { View } from 'react-native';
import styles from './style';
import { AppColors } from '@/theme';

const GlowView = ({
  size = 60,
  color = AppColors.tagWork,
  glowSize = 18, // how far the glow extends beyond the base size
}: {
  size?: number;
  color?: string;
  glowSize?: number;
}) => {
  const totalSize = size + glowSize * 2;
  const center = totalSize / 2;

  return (
    <View
      pointerEvents="none"
      style={{
        ...styles.glowBox,
        width: totalSize,
        height: totalSize,
      }}
    >
      <Svg width={totalSize} height={totalSize}>
        <Defs>
          <RadialGradient id="glow" cx="50%" cy="50%" r="50%">
            <Stop offset="0%" stopColor={color} stopOpacity="0.55" />
            <Stop offset="40%" stopColor={color} stopOpacity="0.35" />
            <Stop offset="70%" stopColor={color} stopOpacity="0.12" />
            <Stop offset="100%" stopColor={color} stopOpacity="0" />
          </RadialGradient>
        </Defs>
        <Circle cx={center} cy={center} r={totalSize / 2} fill="url(#glow)" />
      </Svg>
    </View>
  );
};

export default GlowView;
