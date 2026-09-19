import { fontSize, spacing, ThemeColors } from '@/theme';
import { responsive } from '@/theme/responsive';
import { fontFamily } from '@/theme/typography';
import { StyleSheet } from 'react-native';

const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    mainContainer: {
      marginTop: spacing.md,
    },
    title: {
      fontSize: 38,
      fontWeight: '700',
      color: colors.monthTextColor,
      marginVertical: spacing.md,

      padding: 0,
      margin: 0,

      // Prevent Android from adding extra font space
      includeFontPadding: false,
    },
    waveViewContainer: {
      position: 'absolute',
      width: 1,
      height: 1,
      opacity: 0,
    },
    mediaCard: {
      backgroundColor: colors.lightPrimary,

      borderRadius: 15,
      padding: 18,
      marginBottom: 15,
    },
    panelHeading: {
      color: colors.highlightColor,
      fontSize: 16,
      fontWeight: '800',
      marginBottom: 15,
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
    voice: {
      height: 190,
      borderRadius: 10,
      backgroundColor: colors.primary,
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
      color: colors.monthTextColor,
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
    voiceHint: { color: colors.monthTextColor, fontSize: 10, marginTop: 11 },
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
      backgroundColor: colors.primary,
    },

    contentBottomContainer: {
      flex: 1,
      padding: 15,
    },
    btnContainer: {
      paddingVertical: 20,
      paddingHorizontal: 35,
      gap: spacing.sm,
      alignContent: 'center',
      borderWidth: 2,
      borderStyle: 'dashed',
      borderRadius: spacing.sm,
      borderColor: colors.monthTextColor,
    },
    mediaOptions: {
      flexDirection: 'row',
      justifyContent: 'center',
      gap: responsive.horizontal(20),
    },

    mediaOption: {
      width: responsive.width(150),
      height: responsive.height(100),

      borderWidth: 1.5,
      borderColor: colors.lightBorder,
      borderStyle: 'dashed',
      borderRadius: responsive.radius(14),

      alignItems: 'center',
      justifyContent: 'center',

      backgroundColor: colors.primary,
    },

    mediaIconContainer: {
      width: responsive.width(60),
      height: responsive.height(50),

      borderRadius: responsive.radius(18),

      alignItems: 'center',
      justifyContent: 'center',

      backgroundColor: colors.iconBg,
      marginBottom: spacing.sm,
    },

    mediaOptionText: {
      fontFamily: fontFamily.inter.semiBold,
      fontSize: fontSize.body,
      color: colors.monthTextColor,
    },
    viewButton: {
      marginTop: spacing.sm,
      paddingHorizontal: spacing.md,
      paddingVertical: spacing.xs,
      borderRadius: responsive.radius(8),
      borderWidth: 1,
      borderColor: colors.highlightColor,
      backgroundColor: colors.iconBg,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default createStyles;
