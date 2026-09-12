import { MixedStyleDeclaration } from 'react-native-render-html';

export interface HTMLTextTruncateProps {
  html: string;
  numberOfLines?: number;
  lineHeight?: number;
  onReadMore?: () => void;
  baseStyle?: MixedStyleDeclaration;
}
