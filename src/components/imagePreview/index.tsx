import React from 'react';
import { Image, Pressable, ScrollView, Text, View } from 'react-native';
import { ImagePlus, X } from 'lucide-react-native';
import type { Asset } from 'react-native-image-picker';
import styles from './style';

type ImagePreviewListProps = {
  images: Asset[];
  onRemove?: (index: number) => void;
};

const ImagePreviewList = ({ images, onRemove }: ImagePreviewListProps) => {
  const hasImages = images.length > 0;

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
        <ScrollView
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

          {images?.length > 0 && (
            <Pressable style={styles.addImageBox}>
              <ImagePlus size={24} color="#76D4F2" />

              <Text style={styles.addImageText}>Add More Images</Text>
            </Pressable>
          )}
        </ScrollView>
      )}
    </View>
  );
};

export default ImagePreviewList;
