import React from 'react';
import { styles } from '../styles';
import { Text, View } from 'react-native';

export default function AboutScreen() {
  return (
    <View style={styles.section}>
      <Text style={styles.heading}>About This App</Text>
      <Text style={styles.infoText}>
        <Text style={{ fontWeight: 'bold' }}>Developers:</Text> {'\n'}
        Mehmet Demir ,101394234 {'\n'}
        Eric Laudrum ,100556934 {'\n'}
      </Text>
      <Text style={styles.infoText}>
        This React Native app converts amounts between currencies using the Free
        Currency API. Enter valid currency codes and an amount to see the
        converted value and the rate applied.
      </Text>
    </View>
  );
}
