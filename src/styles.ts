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

  heading: {
    fontSize: 24,
    fontWeight: '900',
    color: '#0f172a',
    
    marginBottom: 4,
  },
  subheading: {
    fontSize: 14,
    color: '#475569',
    marginBottom: 12,
  },
  infoText: {
    fontSize: 16,
    color: '#334155',
    marginTop: 8,
    lineHeight: 22,
  },
  inputBlock: {
    marginBottom: 12,
  },
  inputLabel: {
    fontSize: 14,
    fontWeight: '700',
    color: '#0f172a',
    marginBottom: 4,
  },
  input: {
    borderWidth: 1,
    borderColor: '#cbd5e1',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
    color: '#0f172a',
  },
  selectInput: {
    justifyContent: 'center',
  },
  selectValue: {
    fontSize: 16,
    color: '#0f172a',
    fontWeight: '600',
  },
});
