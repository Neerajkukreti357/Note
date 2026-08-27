import { DrawerContentComponentProps } from '@react-navigation/drawer';
import { Pressable, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './style';
import {
  ChevronRight,
  FilePlus2,
  Info,
  Palette,
  Trash2,
  X,
} from 'lucide-react-native';
import { BottomButton, DrawerButton } from './type';
import { AppColors } from '@/theme';
import { useState } from 'react';
import { badgeColors } from '@/theme/colors';
import { AnimatedToggle } from '../formComponents';

const CustomDrawerView = (props: DrawerContentComponentProps) => {
  const buttons: DrawerButton[] = [
    {
      labels: 'Add Notes',
      description: 'Create a new note',
      icon: FilePlus2,
      onPress: () => {},
    },
    {
      labels: 'Theme',
      description: 'Change appearance',
      icon: Palette,
      onPress: () => {},
    },
    {
      labels: 'Trash',
      description: 'Deleted notes',
      icon: Trash2,
      onPress: () => {},
    },
    {
      labels: 'About',
      description: 'Version 1.0.0 (Build 2.0.0)',
      icon: Info,
      onPress: () => {},
    },
  ];

  const [enabled, setEnabled] = useState(false);

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
                        ? AppColors.themeChanger
                        : AppColors.heading
                    }
                  />
                </View>
                <View>
                  <Text style={styles.label}>{item?.labels}</Text>
                  <Text style={styles.description}>{item?.description}</Text>
                </View>
              </View>
              {item?.labels === 'Theme' ? (
                <AnimatedToggle value={enabled} onValueChange={setEnabled} />
              ) : (
                <ChevronRight size={19} color={AppColors.icon} />
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
                <Icon size={19} color={badgeColors.high?.text} />
              </View>
              <Text
                style={[
                  styles.bottomLabel,
                  {
                    color: badgeColors.high.text,
                  },
                ]}
              >
                {item?.labels}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </SafeAreaView>
  );
};

export default CustomDrawerView;
