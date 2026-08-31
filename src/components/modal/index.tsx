import React from 'react';
import { View, Text } from 'react-native';
import { Modal, ScaleAnimation, ModalContent } from 'react-native-modals';
import { styles } from './style';
import { AppColors } from '@/theme';

interface CustomModalProps {
  visible: boolean;
  onClose: () => void;
  title?: string;
  children?: React.ReactNode;
}

const CustomModal = ({
  visible,
  onClose,
  title,
  children,
}: CustomModalProps) => {
  return (
    <Modal
      visible={visible}
      onTouchOutside={onClose}
      onHardwareBackPress={() => {
        onClose();
        return true;
      }}
      modalAnimation={new ScaleAnimation()}
      modalStyle={styles.modal}
      overlayOpacity={0.6}
      overlayBackgroundColor={AppColors.primary}
    >
      <ModalContent style={styles.modalContent}>
        {title ? (
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>{title}</Text>
          </View>
        ) : null}

        <View style={styles.modalBody}>{children}</View>
      </ModalContent>
    </Modal>
  );
};

export default CustomModal;
