import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  navBar: {
    flexDirection: 'row',
    margin: 16,
    backgroundColor: '#f2f4f7',
    borderRadius: 12,
    padding: 4,
  },
  navButton: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 10,
  },
  navButtonActive: {
    backgroundColor: '#1d4ed8',
  },
  navButtonText: {
    fontWeight: '700',
    color: '#1d4ed8',
  },
  navButtonTextActive: {
    color: '#fff',
  },
  section: {
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
});
