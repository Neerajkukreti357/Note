import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import { ImagePlus, X } from 'lucide-react-native';
import type { Asset } from 'react-native-image-picker';
import { BottomSheetScrollView } from '@gorhom/bottom-sheet';
import { useTheme } from '@/context/ThemeContext';
import createStyles from './style';

type ImagePreviewListProps = {
  images: Asset[];
  onRemove?: (index: number) => void;
};

const ImagePreviewList = ({ images, onRemove }: ImagePreviewListProps) => {
  const hasImages = images.length > 0;
  const { colors } = useTheme();
  const styles = createStyles(colors);

  return (
    <View style={styles.container}>
      {!hasImages ? (
        <View style={styles.emptyContainer}>
          <View style={styles.emptyIcon}>
            <ImagePlus size={28} color="#76D4F2" />
          </View>
          <Text style={styles.emptyTitle}>No images selected</Text>
          <Text style={styles.emptyText}>
            Images you select will appear here
          </Text>
        </View>
      ) : (
        <BottomSheetScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.imageList}
        >
          {images.map((image, index) => (
            <View key={`${image.uri}-${index}`} style={styles.imageWrapper}>
              <Image
                source={{ uri: image.uri }}
                style={styles.image}
                resizeMode="cover"
              />
              {onRemove && (
                <Pressable
                  style={styles.removeButton}
                  onPress={() => onRemove(index)}
                >
                  <X size={14} color="#FFFFFF" />
                </Pressable>
              )}
            </View>
          ))}
        </BottomSheetScrollView>
      )}
    </View>
  );
};

export default ImagePreviewList;
