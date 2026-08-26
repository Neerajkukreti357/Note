import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    minHeight: 130,
    paddingHorizontal: 20,
  },

  dateContainer: {
    width: 70,
    alignItems: 'center',
    paddingTop: 20,
  },

  day: {
    fontSize: 32,
    fontWeight: '300',
    color: '#CBD5E1',
  },

  weekday: {
    fontSize: 14,
    color: '#94A3B8',
    marginTop: 2,
  },

  taskContainer: {
    flex: 1,
    marginLeft: 15,
    marginVertical: 10,
    padding: 18,
    borderRadius: 12,
    backgroundColor: '#151F33',
    flexDirection: 'row',
  },

  priority: {
    width: 4,
    borderRadius: 4,
    marginRight: 12,
  },

  taskContent: {
    flex: 1,
  },

  title: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '600',
  },

  description: {
    color: '#94A3B8',
    fontSize: 14,
    marginTop: 8,
    lineHeight: 20,
  },

  flatListContainer: {
    paddingBottom: 100,
  },
});

export default styles;
