import { spacing } from '@/theme';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: spacing.md,
  },
  mediaCard: {
    backgroundColor: '#1A2237',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#2B3650',
    padding: 18,
    marginBottom: 15,
  },
  panelHeading: {
    color: '#CFCCEF',
    fontSize: 16,
    fontWeight: '800',
    marginBottom: 15,
  },
  panelHint: {
    color: '#858FA4',
    fontSize: 12,
    lineHeight: 18,
    marginBottom: 22,
  },
  uploadIcon: {
    width: 35,
    height: 35,
    borderRadius: 12,
    backgroundColor: '#1F4056',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 9,
  },
  uploadText: { color: '#D6D9E6', fontSize: 12, fontWeight: '600' },
  browse: { color: '#78D3F1', fontWeight: '800' },
  uploadHint: { color: '#707B92', fontSize: 10, marginTop: 6 },
  thumbs: { flexDirection: 'row', gap: 9, marginTop: 12 },
  thumb: {
    flex: 1,
    height: 60,
    backgroundColor: '#2B344A',
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
  },
  voice: {
    height: 190,
    borderRadius: 10,
    backgroundColor: '#151E32',
    alignItems: 'center',
    justifyContent: 'center',
  },
  wave: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
    height: 34,
    marginBottom: 13,
  },
  waveBar: { width: 3, borderRadius: 3, backgroundColor: '#55BADA' },
  timer: {
    color: '#E3E5F0',
    fontSize: 17,
    fontWeight: '800',
    letterSpacing: 2,
    marginBottom: 12,
  },
  mic: {
    width: 43,
    height: 43,
    borderRadius: 22,
    backgroundColor: '#B52D2D',
    alignItems: 'center',
    justifyContent: 'center',
  },
  recording: { backgroundColor: '#554ED5' },
  voiceHint: { color: '#C1C5D4', fontSize: 10, marginTop: 11 },
  toolbarContainer: {
    marginTop: 12,
    borderRadius: 14,
    overflow: 'hidden',
  },
  upload: {
    borderRadius: 11,
    borderStyle: 'dashed',
    borderWidth: 1,
    borderColor: '#46516D',
    height: 138,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#151E32',
  },
});

export default styles;
