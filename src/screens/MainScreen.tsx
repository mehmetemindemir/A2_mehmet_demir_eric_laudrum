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
const API_URL = 'https://api.freecurrencyapi.com/v1/latest';
// Replace with a valid API key from https://freecurrencyapi.com
const API_KEY = 'fca_live_g5gg3R4fzStTll6IzhO8QLVh8ZGqOx7epulx7rzP';

type FetchState = {
  loading: boolean;
  error: string | null;
};

type ConversionResult = {
  base: string;
  target: string;
  rate: number;
  convertedAmount: number;
} | null; 

const LabeledInput = ({
  label,
  value,
  onChangeText,
  placeholder,
  keyboardType = 'default',
  autoCapitalize = 'none',
  editable = true,
}: {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  keyboardType?: 'default' | 'numeric';
  autoCapitalize?: 'none' | 'characters' | 'words' | 'sentences';
  editable?: boolean;
}) => (
  <View style={styles.inputBlock}>
    <Text style={styles.inputLabel}>{label}</Text>
    <TextInput
      style={styles.input}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      keyboardType={keyboardType}
      autoCapitalize={autoCapitalize}
      autoCorrect={false}
      editable={editable}
    />
  </View>
);

const SelectField = ({
  label,
  value,
  options,
  onSelect,
}: {
  label: string;
  value: string;
  options: string[];
  onSelect: (val: string) => void;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <View style={styles.inputBlock}>
      <Text style={styles.inputLabel}>{label}</Text>
      <Pressable
        onPress={() => setOpen(true)}
        style={[styles.input, styles.selectInput]}
        accessibilityRole="button"
      >
        <Text style={styles.selectValue}>{value}</Text>
      </Pressable>
      <Modal visible={open} animationType="slide" transparent>
        <View style={styles.modalBackdrop}>
          <View style={styles.modalCard}>
            <Text style={styles.modalHeading}>Choose Currency</Text>
            <ScrollView>
              {options.map(opt => (
                <TouchableOpacity
                  key={opt}
                  style={styles.optionRow}
                  onPress={() => {
                    onSelect(opt);
                    setOpen(false);


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
