import { DrawerContentComponentProps } from '@react-navigation/drawer';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  ChevronRight,
  FilePenLine,
  FilePlus2,
  Info,
  Palette,
  Trash2,
  X,
} from 'lucide-react-native';
import { BottomButton, DrawerButton } from './type';
import { AnimatedToggle } from '../formComponents';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '@/context/ThemeContext';
import createStyles from './style';

const CustomDrawerView = (props: DrawerContentComponentProps) => {
  const { toggleTheme, theme, colors } = useTheme();
  const styles = createStyles(colors);
  const navigation = useNavigation();
  const buttons: DrawerButton[] = [
    {
      labels: 'Add Notes',
      description: 'Create a new note',
      icon: FilePlus2,
      onPress: () => {
        navigation.navigate('AddNote' as never);
      },
    },
    {
      labels: 'Theme',
      description: 'Change appearance',
      icon: Palette,
      onPress: () => {
        toggleTheme();
      },
    },
    {
      labels: 'Trash',
      description: 'Deleted notes',
      icon: Trash2,
      onPress: () => {
        navigation.navigate('TrashScreen' as never);
      },
    },
    {
      labels: 'Draft',
      description: 'Unsaved Task',
      icon: FilePenLine,
      onPress: () => {
        navigation.navigate('DraftScreen' as never);
      },
    },
    {
      labels: 'About',
      description: 'Version 1.0.0 (Build 2.0.0)',
      icon: Info,
      onPress: () => {},
    },
  ];

  const bottomButtons: BottomButton[] = [
    {
      labels: 'Close Settings',
      icon: X,
      onPress: () => {
        props.navigation.closeDrawer();
      },
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Settings</Text>
      <Text style={styles.subHeading}>Manage your account and preferences</Text>

      <ScrollView style={{ flex: 1 }} showsHorizontalScrollIndicator={false}>
        <View style={styles.drawerButtonContainer}>
          {buttons?.map((item: DrawerButton, index: number) => {
            const Icon = item?.icon;
            return (
              <Pressable
                key={index}
                style={styles.buttonContainer}
                onPress={item?.onPress}
              >
                <View style={styles.innerContainer}>
                  <View style={styles.iconContainer}>
                    <Icon
                      size={19}
                      color={
                        item?.labels === 'Theme'
                          ? colors.themeChanger
                          : colors.heading
                      }
                    />
                  </View>
                  <View>
                    <Text style={styles.label}>{item?.labels}</Text>
                    <Text style={styles.description}>{item?.description}</Text>
                  </View>
                </View>
                {item?.labels === 'Theme' ? (
                  <AnimatedToggle
                    value={theme === 'dark'}
                    onValueChange={item?.onPress}
                  />
                ) : (
                  <ChevronRight size={19} color={colors.icon} />
                )}
              </Pressable>
            );
          })}
        </View>

        <View style={[styles.drawerButtonContainer, { marginTop: 'auto' }]}>
          {bottomButtons?.map((item: BottomButton, index: number) => {
            const Icon = item?.icon;
            return (
              <Pressable
                key={index}
                style={styles.bottomButtonContainer}
                onPress={item?.onPress}
              >
                <View style={styles.iconContainer}>
                  <Icon size={19} color={colors.closeButtonColor} />
                </View>
                <Text
                  style={[
                    styles.bottomLabel,
                    {
                      color: colors.closeButtonColor,
                    },
                  ]}
                >
                  {item?.labels}
                </Text>
              </Pressable>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CustomDrawerView;
