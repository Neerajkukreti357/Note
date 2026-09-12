import { DarkColors } from '@/theme';
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
    background-color: ${DarkColors.lightPrimary};
    color: ${DarkColors.heading};
    margin: 0;
    padding: 0;
  }

  p {
    color: ${DarkColors.monthTextColor};
    font-size: 18px;
    margin: 0 0 12px 0;
  }

  h1 {
    color: ${DarkColors.heading};
    font-size: 32px;
    font-weight: 700;
  }

  h2 {
    color: ${DarkColors.heading};
    font-size: 26px;
    font-weight: 700;
  }

  ul,
  ol {
    color: ${DarkColors.monthTextColor};
    font-size: 18px;
    line-height: 28px;
  }
`;

const TextEditor = ({
  value,
  onChange,
  loadingSubmission,
  editorContainerStyle,
}: EditorFieldProps) => {
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
          <ActivityIndicator size="large" color={DarkColors.monthTextColor} />
        </View>
      )}
      {
        <View style={[styles.editorContainer, editorContainerStyle]}>
          <RichText
            editor={editor}
            onLoad={() => setLoading(false)}
            style={[
              styles.editor,
              !loading ? styles.editorVisible : styles.editorHidden,
            ]}
            aria-disabled={loadingSubmission}
          />
        </View>
      }
    </>
  );
};

export default TextEditor;
