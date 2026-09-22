import { Camera, ImagePlus, Images, Mic, Pause } from 'lucide-react-native';
import {
  Pressable,
  Text,
  TextInput,
  useWindowDimensions,
  View,
} from 'react-native';
import { useCallback, useEffect, useRef, useState } from 'react';
import { MediaNoteFormData } from '@/screens/AddNotesScreen/shema';
import { Controller, useFormContext } from 'react-hook-form';
import { CustomDropdown } from '../formComponents';
import { DropdownOptions } from '../general/constants';
import TextEditor from '../TextEditor';
import commonStyle from '@/theme/commonStyles';
import { responsive } from '@/theme/responsive';
import MultipleCheckbox from '../formComponents/checkbox';
import { formatTime } from '@/utils/date';
import {
  WaveformRecorderView,
  type WaveformRecorderViewRef,
} from 'react-native-waveform-recorder';
import AudioPlayer from '../audio';
import {
  requestCameraPermission,
  requestGalleryPermission,
  requestMicrophonePermission,
} from '@/utils/permissions';
import {
  resizeImage,
  saveImagePermanently,
  savePersistentAudio,
} from '@/utils';
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import ImagePreviewList from '../imagePreview';
import {
  Asset,
  launchCamera,
  launchImageLibrary,
} from 'react-native-image-picker';
import { useTheme } from '@/context/ThemeContext';
import createStyles from './styles';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { spacing } from '@/theme';

const Media = ({ loading }: { loading: boolean }) => {
  const { colors } = useTheme();
  const styles = createStyles(colors);
  const bottomSheetRef = useRef<BottomSheet>(null);
  const [recording, setRecording] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const recorderRef = useRef<WaveformRecorderViewRef>(null);
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [images, setImages] = useState<Asset[]>([]);
  const { height } = useWindowDimensions();

  const renderBackdrop = useCallback(
    (props: BottomSheetBackdropProps) => (
      <BottomSheetBackdrop
        {...props}
        appearsOnIndex={0}
        disappearsOnIndex={-1}
        pressBehavior="close" // tapping the backdrop closes the sheet
        opacity={0.5}
      />
    ),
    [],
  );

  const {
    control,
    formState: { errors },
    watch,
    setValue,
  } = useFormContext<MediaNoteFormData>();

  const onDelete = () => {
    setValue('audioPath', '', { shouldValidate: true });
  };

  const toggleRecording = () => {
    if (!recorderRef.current) return;

    if (!recording) {
      recorderRef.current.start();
    } else {
      recorderRef.current.stop();
    }
  };

  const toggleSheet = () => {
    if (isSheetOpen) {
      bottomSheetRef.current?.close();
    } else {
      bottomSheetRef.current?.snapToIndex(0);
    }
  };

  const handleSheetChanges = (index: number) => {
    setIsSheetOpen(index !== -1);
  };

  const onComplete = async ({ uri }: { uri: string }) => {
    try {
      const persistentPath = await savePersistentAudio(uri);
      setValue('audioPath', persistentPath, { shouldValidate: true });
    } catch (error) {
      console.error('Failed to save audio persistently:', error);
    } finally {
      setRecording(false);
      setSeconds(0);
    }
  };

  const onStateChange = ({ state }: { state: string }) => {
    setRecording(state === 'recording');
  };

  const onError = (error: any) => {
    console.error('Recording error:', error);
    setRecording(false);
    setSeconds(0);
  };

  const onPermissionDenied = () => {
    requestMicrophonePermission();
    setRecording(false);
    setSeconds(0);
  };

  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | undefined;

    if (recording) {
      interval = setInterval(() => {
        setSeconds(prev => prev + 1);
      }, 1000);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [recording]);

  const openCamera = async () => {
    const hasPermission = await requestCameraPermission();

    if (!hasPermission) {
      return;
    }

    const result = await launchCamera({
      mediaType: 'photo',
      cameraType: 'back',
      quality: 0.8,
    });

    if (result.didCancel) {
      return;
    }

    if (result.errorCode) {
      console.log('Camera error:', result.errorMessage);
      return;
    }

    const image = result.assets?.[0];

    if (!image) {
      return;
    }

    // 1. Resize / compress
    const resizedImage = await resizeImage(image);

    if (!resizedImage) {
      return;
    }

    // 2. Save permanently
    const savedImage = await saveImagePermanently(resizedImage);

    if (!savedImage) {
      return;
    }

    // 3. Update image list
    const updatedImages = [...images, savedImage];

    setImages(updatedImages);

    setValue('imageList', updatedImages, {
      shouldValidate: true,
      shouldDirty: true,
    });
  };

  const openGallery = async () => {
    const hasPermission = await requestGalleryPermission();

    if (!hasPermission) {
      return;
    }

    const result = await launchImageLibrary({
      mediaType: 'photo',
      selectionLimit: 0,
      quality: 0.8,
    });

    if (result.didCancel) {
      return;
    }

    if (result.errorCode) {
      console.log('Gallery error:', result.errorMessage);
      return;
    }

    const selectedImages = result.assets ?? [];

    if (selectedImages.length === 0) {
      return;
    }

    // 1. Resize / compress all images
    const resizedImages = await Promise.all(
      selectedImages.map(image => resizeImage(image)),
    );

    const validImages = resizedImages.filter((image: any) => image !== null);

    if (validImages.length === 0) {
      return;
    }

    // 2. Save all images permanently
    const savedImages = await Promise.all(
      validImages.map((image: any) => saveImagePermanently(image)),
    );

    const validSavedImages = savedImages.filter(
      (image): image is Asset => image !== null,
    );

    if (validSavedImages.length === 0) {
      return;
    }

    // 3. Update image list
    const updatedImages = [...images, ...validSavedImages];

    setImages(updatedImages);

    setValue('imageList', updatedImages, {
      shouldValidate: true,
      shouldDirty: true,
    });
  };

  const selected = watch('media');
  const audioPathWatcher = watch('audioPath');

  return (
    <>
      <KeyboardAwareScrollView
        style={{ height: height * 0.5, marginTop: spacing.sm }}
        showsVerticalScrollIndicator={false}
        enableOnAndroid
        extraScrollHeight={height * 0.15}
        enableAutomaticScroll
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.mediaCard}>
          <Controller
            control={control}
            name="priority"
            render={({ field: { onChange, value } }) => (
              <CustomDropdown
                placeholder="Select priority"
                value={value}
                onChange={onChange}
                data={DropdownOptions}
                disable={loading}
              />
            )}
          />
          {errors.priority && (
            <Text style={commonStyle.errorTextColor}>
              {errors.priority.message}
            </Text>
          )}

          <Controller
            control={control}
            name="title"
            render={({ field: { onChange, value } }) => (
              <TextInput
                placeholder="Title"
                style={[styles.title, [{ marginBottom: -8 }]]}
                placeholderTextColor={colors.monthTextColor}
                value={value}
                onChangeText={onChange}
                aria-disabled={loading}
              />
            )}
          />
          {errors.title && (
            <Text style={[commonStyle.errorTextColor, { marginTop: 8 }]}>
              {errors.title.message}
            </Text>
          )}

          <Controller
            control={control}
            name="description"
            render={({ field: { onChange, value } }) => (
              <TextEditor
                value={value}
                onChange={onChange}
                loadingSubmission={loading}
                editorContainerStyle={{ height: responsive.height(200) }}
              />
            )}
          />
          {errors.description && (
            <Text style={commonStyle.errorTextColor}>
              {errors.description.message}
            </Text>
          )}
        </View>

        <View style={styles.mediaCard}>
          <Controller
            control={control}
            name="media"
            render={({ field: { onChange, value } }) => {
              const selectedValues = value || [];

              const handleMediaChange = (val: string[]) => {
                if (val.length > 0) {
                  // Only allow one option
                  onChange([val[val.length - 1]]);
                } else {
                  onChange([]);
                }
              };

              return (
                <MultipleCheckbox
                  options={[
                    { label: 'Audio', value: '1' },
                    { label: 'Images', value: '2' },
                  ]}
                  selectedValues={selectedValues}
                  onChange={handleMediaChange}
                />
              );
            }}
          />

          {errors.media && (
            <Text style={[commonStyle.errorTextColor, { marginTop: 10 }]}>
              {errors.media.message}
            </Text>
          )}
        </View>
        {selected?.[0] === '1' ? (
          <View style={styles.mediaCard}>
            <Text style={styles.panelHeading}>Voice note</Text>
            <View style={styles.voice}>
              {/* Hidden native recorder — drives start/stop/onComplete only */}
              <WaveformRecorderView
                ref={recorderRef}
                style={styles.waveViewContainer}
                onStateChange={onStateChange}
                onComplete={onComplete}
                onError={onError}
                onPermissionDenied={onPermissionDenied}
              />

              <View style={styles.wave}>
                {Array.from({ length: 17 }, (_, index) => (
                  <View
                    key={index}
                    style={[
                      styles.waveBar,
                      { height: 9 + ((index * 11) % 23) },
                    ]}
                  />
                ))}
              </View>
              <Text style={styles.timer}>{formatTime(seconds)}</Text>
              <Pressable
                style={[styles.mic, recording && styles.recording]}
                onPress={toggleRecording}
              >
                {recording ? (
                  <Pause color="#FFFFFF" size={21} fill="#FFFFFF" />
                ) : (
                  <Mic color="#FFFFFF" size={21} />
                )}
              </Pressable>
              <Text style={styles.voiceHint}>
                {recording ? 'Recording...' : 'Tap to record'}
              </Text>
            </View>

            {audioPathWatcher && (
              <AudioPlayer
                audioPath={audioPathWatcher}
                isDeleted={true}
                onDelete={onDelete}
              />
            )}

            {errors.audioPath && (
              <Text style={[commonStyle.errorTextColor, { marginTop: 10 }]}>
                {errors.audioPath.message}
              </Text>
            )}
          </View>
        ) : selected?.[0] === '2' ? (
          <View style={styles.mediaCard}>
            <Text style={styles.panelHeading}>Images</Text>
            <Pressable style={styles.upload} onPress={toggleSheet}>
              <View style={styles.uploadIcon}>
                <ImagePlus color="#76D4F2" size={19} />
              </View>

              {images.length > 0 ? (
                <>
                  <Text style={styles.uploadText}>
                    {images.length} {images.length === 1 ? 'image' : 'images'}{' '}
                    selected
                  </Text>

                  <Text style={styles.uploadHint}>
                    Tap here to view or manage your images
                  </Text>

                  <View style={styles.viewButton}>
                    <Text style={styles.browse}>View Selected Images</Text>
                  </View>
                </>
              ) : (
                <>
                  <Text style={styles.uploadText}>
                    Add an image or <Text style={styles.browse}>browse</Text>
                  </Text>

                  <Text style={styles.uploadHint}>PNG, JPG up to 10MB</Text>
                </>
              )}
            </Pressable>

            {errors.imageList && (
              <Text style={commonStyle.errorTextColor}>
                {errors.imageList.message}
              </Text>
            )}
          </View>
        ) : null}
      </KeyboardAwareScrollView>
      <BottomSheet
        backgroundStyle={{
          backgroundColor: colors.secondary,
        }}
        handleIndicatorStyle={{
          backgroundColor: colors.monthTextColor,
        }}
        ref={bottomSheetRef}
        onChange={handleSheetChanges}
        snapPoints={['50%']}
        index={-1}
        enablePanDownToClose={true}
        enableDynamicSizing={false}
        backdropComponent={renderBackdrop}
      >
        <BottomSheetView style={styles.contentBottomContainer}>
          <View style={styles.mediaOptions}>
            <Pressable style={styles.mediaOption} onPress={openCamera}>
              <View style={styles.mediaIconContainer}>
                <Camera size={36} color={colors.heading} strokeWidth={1.8} />
              </View>

              <Text style={styles.mediaOptionText}>Camera</Text>
            </Pressable>

            <Pressable style={styles.mediaOption} onPress={openGallery}>
              <View style={styles.mediaIconContainer}>
                <Images size={36} color={colors.heading} strokeWidth={1.8} />
              </View>

              <Text style={styles.mediaOptionText}>Gallery</Text>
            </Pressable>
          </View>
          <ImagePreviewList
            images={images}
            onRemove={index => {
              const updatedImages = images.filter((_, i) => i !== index);
              setImages(updatedImages);
              setValue('imageList', updatedImages, {
                shouldValidate: true,
                shouldDirty: true,
              });
            }}
          />
        </BottomSheetView>
      </BottomSheet>
    </>
  );
};

export default Media;
