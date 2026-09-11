import { Camera, ImagePlus, Images, Mic, Pause } from 'lucide-react-native';
import { Pressable, ScrollView, Text, TextInput, View } from 'react-native';
import styles from './styles';
import { useEffect, useRef, useState } from 'react';
import { MediaNoteFormData } from '@/screens/AddNotesScreen/shema';
import { Controller, useFormContext } from 'react-hook-form';
import { CustomDropdown } from '../formComponents';
import { DropdownOptions } from '../general/constants';
import { AppColors } from '@/theme';
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
import { savePersistentAudio } from '@/utils';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import ImagePreviewList from '../imagePreview';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

const Media = ({ loading }: { loading: boolean }) => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const [recording, setRecording] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const recorderRef = useRef<WaveformRecorderViewRef>(null);
  const [isSheetOpen, setIsSheetOpen] = useState(false);

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

  const selected = watch('media');
  const audioPathWatcher = watch('audioPath');

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

    if (image) {
      console.log('Captured image:', image);
    }
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

    const images = result.assets ?? [];

    console.log('Selected images:', images);

    bottomSheetRef.current?.close();
  };

  return (
    <>
      <ScrollView style={styles.mainContainer}>
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
                style={styles.title}
                placeholderTextColor={AppColors.monthTextColor}
                value={value}
                onChangeText={onChange}
                aria-disabled={loading}
              />
            )}
          />
          {errors.title && (
            <Text style={commonStyle.errorTextColor}>
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
                style={{
                  position: 'absolute',
                  width: 1,
                  height: 1,
                  opacity: 0,
                }}
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

              <Text style={styles.uploadText}>
                Add an image or <Text style={styles.browse}>browse</Text>
              </Text>

              <Text style={styles.uploadHint}>PNG, JPG up to 10MB</Text>
            </Pressable>
          </View>
        ) : null}
      </ScrollView>
      <BottomSheet
        backgroundStyle={{
          backgroundColor: AppColors.secondary,
        }}
        handleIndicatorStyle={{
          backgroundColor: AppColors.monthTextColor,
        }}
        ref={bottomSheetRef}
        onChange={handleSheetChanges}
        snapPoints={['50%']}
        index={-1}
        enablePanDownToClose={true}
        enableDynamicSizing={false}
      >
        <BottomSheetView style={styles.contentBottomContainer}>
          <View style={styles.mediaOptions}>
            <Pressable style={styles.mediaOption} onPress={openCamera}>
              <View style={styles.mediaIconContainer}>
                <Camera size={36} color={AppColors.heading} strokeWidth={1.8} />
              </View>

              <Text style={styles.mediaOptionText}>Camera</Text>
            </Pressable>

            <Pressable style={styles.mediaOption} onPress={openGallery}>
              <View style={styles.mediaIconContainer}>
                <Images size={36} color={AppColors.heading} strokeWidth={1.8} />
              </View>

              <Text style={styles.mediaOptionText}>Gallery</Text>
            </Pressable>
          </View>
          <ImagePreviewList images={[]} onRemove={() => {}} onAdd={() => {}} />
        </BottomSheetView>
      </BottomSheet>
    </>
  );
};

export default Media;
