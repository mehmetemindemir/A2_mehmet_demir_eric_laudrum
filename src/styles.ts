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
  boldText:{
    fontWeight: '700',
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

  card: {
      backgroundColor: '#fff',
      marginHorizontal: 16,
      marginBottom: 16,
      padding: 16,
      borderRadius: 16,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.08,
      shadowRadius: 8,
      elevation: 2,
    },


    button: {
      paddingVertical: 14,
      borderRadius: 10,
      alignItems: 'center',
      marginTop: 4,
    },
    buttonPrimary: {
      backgroundColor: '#1d4ed8',
    },
    buttonDisabled: {
      backgroundColor: '#94a3b8',
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: '700',
    },

    
    errorText: {
      color: '#b91c1c',
      fontWeight: '600',
      marginTop: 8,
    },
    resultBox: {
      borderRadius: 12,
      backgroundColor: '#eff6ff',
      padding: 12,
      marginTop: 8,
    },
    resultHeading: {
      fontSize: 16,
      fontWeight: '700',
      color: '#0f172a',
    },
    resultValue: {
      fontSize: 28,
      fontWeight: '800',
      color: '#1d4ed8',
      marginVertical: 4,
    },
    resultMeta: {
      color: '#334155',
      fontSize: 14,
    },

    modalBackdrop: {
      flex: 1,
      backgroundColor: 'rgba(0,0,0,0.35)',
      justifyContent: 'center',
      padding: 20,
    },
    modalCard: {
      backgroundColor: '#fff',
      borderRadius: 16,
      padding: 16,
      maxHeight: '70%',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 6 },
      shadowOpacity: 0.2,
      shadowRadius: 12,
      elevation: 6,
      gap: 12,
    },
    modalHeading: {
      fontSize: 18,
      fontWeight: '800',
      color: '#0f172a',
    },
    optionRow: {
      paddingVertical: 12,
      borderBottomWidth: 1,
      borderBottomColor: '#e2e8f0',
    },
    optionText: {
      fontSize: 16,
      fontWeight: '600',
      color: '#0f172a',
    },
    buttonGhost: {
      backgroundColor: '#e2e8f0',
    },
    buttonGhostText: {
      color: '#0f172a',
    },
    swapButtonText: {
      fontSize: 14,
      fontWeight: '800',
      color: '#0f172a',
    },
    swapButtonHint: {
      fontSize: 10,
      color: '#475569',
    },
    currencyBlock: {
      gap: 2,
    },
    swapBetweenRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginVertical: 0,
      gap: 0,
    },
    swapBetweenLine: {
      flex: 1,
      height: 1,
      backgroundColor: '#cbd5e1',
    },
    swapCircleButton: {
      width: 48,
      height: 48,
      borderRadius: 32,
      borderWidth: 3,
      borderColor: '#cbd5e1',
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      marginVertical: 0,
      shadowColor: '#cbd5e1',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.15,
      shadowRadius: 6,
      elevation: 4,
    },
    swapCircleIcon: {
      fontSize: 20,
      fontWeight: '800',
      color: '#0f172a',
      textAlign: 'center',
      lineHeight: 15,
    },
});
