import React, { useState } from 'react';
import { StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import AboutScreen from './src/screens/AboutScreen';
import MainScreen from './src/screens/MainScreen';
import { styles } from './src/styles';

type Screen = 'Main' | 'About';

function App() {
  const [activeScreen, setActiveScreen] = useState<Screen>('Main');

  return (
    <SafeAreaProvider>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.flex}>
        <View style={styles.navBar}>
          <TouchableOpacity
            style={[
              styles.navButton,
              activeScreen === 'Main' ? styles.navButtonActive : null,
            ]}
            onPress={() => setActiveScreen('Main')}
          >
            <Text
              style={[
                styles.navButtonText,
                activeScreen === 'Main' ? styles.navButtonTextActive : null,
              ]}
            >
              Main
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.navButton,
              activeScreen === 'About' ? styles.navButtonActive : null,
            ]}
            onPress={() => setActiveScreen('About')}
          >
            <Text
              style={[
                styles.navButtonText,
                activeScreen === 'About' ? styles.navButtonTextActive : null,
              ]}
            >
              About
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.flex}>
          {activeScreen === 'Main' ? <MainScreen /> : <AboutScreen />}
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default App;
