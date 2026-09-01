import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    position: 'relative',
  },

  bottomOverlay: {
    position: 'absolute',
    right: 0,
    bottom: 0,

    flexDirection: 'row',
    alignItems: 'center',

    paddingLeft: 20,
  },

  ellipsis: {
    fontSize: 18,
    fontWeight: '700',
  },

  readMore: {
    fontSize: 14,
    fontWeight: '600',
    marginLeft: 4,
  },

  readMoreText: {
    fontSize: 14,
    fontWeight: '600',
  },
});

export default styles;
