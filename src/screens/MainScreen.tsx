import React  from 'react';
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  Modal,
  TouchableOpacity,
  View,
} from 'react-native';
import { styles } from '../styles';



export default function MainScreen() {
  
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={styles.flex}
    >
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        keyboardShouldPersistTaps="handled"
      >
        
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
