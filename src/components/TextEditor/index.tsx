import { AppColors } from '@/theme';
import {
  CoreBridge,
  RichText,
  TenTapStartKit,
  useEditorBridge,
  useEditorContent,
} from '@10play/tentap-editor';
import { ActivityIndicator, View } from 'react-native';
import styles from './style';
import ToolBar from './toolBar';
import { useEffect, useState } from 'react';
import { EditorFieldProps } from './type';

const editorCSS = `
  * {
    box-sizing: border-box;
  }

  body {
    background-color: ${AppColors.lightPrimary};
    color: ${AppColors.heading};
    margin: 0;
    padding: 0;
  }

  p {
    color: ${AppColors.monthTextColor};
    font-size: 18px;
    margin: 0 0 12px 0;
  }

  h1 {
    color: ${AppColors.heading};
    font-size: 32px;
    font-weight: 700;
  }

  h2 {
    color: ${AppColors.heading};
    font-size: 26px;
    font-weight: 700;
  }

  ul,
  ol {
    color: ${AppColors.monthTextColor};
    font-size: 18px;
    line-height: 28px;
  }
`;

const TextEditor = ({ value, onChange }: EditorFieldProps) => {
  const [loading, setLoading] = useState(true);
  const editor = useEditorBridge({
    autofocus: false,
    avoidIosKeyboard: true,
    bridgeExtensions: [...TenTapStartKit, CoreBridge.configureCSS(editorCSS)],
    initialContent: value ?? '',
  });
  const content = useEditorContent(editor, { type: 'html' });

  // push editor content up into react-hook-form whenever it changes
  useEffect(() => {
    if (content !== undefined && content !== value) {
      onChange(content);
    }
  }, [content, onChange, value]);

  return (
    <>
      <ToolBar editor={editor} />

      {loading && (
        <View style={styles.editorLoader}>
          <ActivityIndicator size="large" color={AppColors.monthTextColor} />
        </View>
      )}
      {
        <View style={styles.editorContainer}>
          <RichText
            editor={editor}
            onLoad={() => setLoading(false)}
            style={!loading ? styles.editorVisible : styles.editorHidden}
          />
        </View>
      }
    </>
  );
};

export default TextEditor;
