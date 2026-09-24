// components/CustomToast.tsx
import { View, Text, StyleSheet } from 'react-native';
import { BaseToastProps } from 'react-native-toast-message';
import { useTheme } from '@/context/ThemeContext';

const CustomToast = ({ text1, text2 }: BaseToastProps) => {
  const { colors, theme } = useTheme(); // assuming your theme context exposes `mode`

  const backgroundColor = theme === 'dark' ? colors.secondary : colors.primary;
  const textColor = theme === 'dark' ? '#FFFFFF' : colors.heading;
  const subTextColor = theme === 'dark' ? colors.text : colors.text;

  return (
    <View style={[styles.container, { backgroundColor }]}>
      {text1 && (
        <Text style={[styles.title, { color: textColor }]}>{text1}</Text>
      )}
      {text2 && (
        <Text style={[styles.message, { color: subTextColor }]}>{text2}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '90%',
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 16,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
  },
  title: {
    fontSize: 15,
    fontWeight: '600',
  },
  message: {
    fontSize: 13,
    marginTop: 2,
  },
});

export default CustomToast;
