import { StyleSheet } from 'react-native';

export const shadows = StyleSheet.create({
  low: {
    shadowColor: 'rgba(0, 0, 0, 0.04)',
    shadowOffset: { width: 0, height: 2 },
  },
  medium: {
    shadowColor: 'rgba(0, 0, 0, 0.05)',
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 24,
  },
  high: {
    shadowColor: 'rgba(0, 0, 0, 0.09)',
    shadowOffset: { width: 0, height: 20 },
    shadowRadius: 48,
  },
});
