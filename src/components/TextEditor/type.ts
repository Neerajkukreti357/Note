import { StyleProp, ViewStyle } from 'react-native';

export interface EditorFieldProps {
  value?: string;
  onChange: (html: string) => void;
  loadingSubmission: boolean;
  editorContainerStyle?: StyleProp<ViewStyle>;
}
