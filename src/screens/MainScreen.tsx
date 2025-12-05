import React, { useMemo, useState } from 'react';
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
                  }}
                >
                  <Text style={styles.optionText}>{opt}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
            <TouchableOpacity
              style={[styles.button, styles.buttonGhost]}
              onPress={() => setOpen(false)}
            >
              <Text style={[styles.buttonText, styles.buttonGhostText]}>
                Cancel
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default function MainScreen() {
  const [baseCurrency, setBaseCurrency] = useState('CAD');
  const [targetCurrency, setTargetCurrency] = useState('USD');
  const [amount, setAmount] = useState('1');
  const [fetchState, setFetchState] = useState<FetchState>({
    loading: false,
    error: null,
  });
  const [result, setResult] = useState<ConversionResult>(null);

  const currencyOptions = ['CAD', 'USD', 'AUD', 'GBP', 'EUR', 'JPY'];

  const parsedAmount = useMemo(() => Number(amount), [amount]);
  const isAmountValid = useMemo(
    () => !Number.isNaN(parsedAmount) && parsedAmount > 0,
    [parsedAmount],
  );

  const validateCurrency = (code: string) => /^[A-Z]{3}$/.test(code);
  
const handleConvert = async () => {
    const base = baseCurrency.trim().toUpperCase();
    const target = targetCurrency.trim().toUpperCase();

    if (!validateCurrency(base) || !validateCurrency(target)) {
      setFetchState({
        loading: false,
        error: 'Currency codes must be 3-letter uppercase ISO codes.',
      });
      setResult(null);
      return;
    }

    if (base === target) {
      setFetchState({
        loading: false,
        error: 'Base and destination currencies must be different.',
      });
      setResult(null);
      return;
    }

    if (!isAmountValid) {
      setFetchState({
        loading: false,
        error: 'Amount must be a positive number.',
      });
      setResult(null);
      return;
    }

    if (!API_KEY) {
      setFetchState({
        loading: false,
        error: 'Please set a valid API key in App.tsx.',
      });
      setResult(null);
      return;
    }

    setFetchState({ loading: true, error: null });
    setResult(null);

    try {
      const url = `${API_URL}?base_currency=${encodeURIComponent(
        base,
      )}&currencies=${encodeURIComponent(target)}&apikey=${API_KEY}`;
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(
          `API error ${response.status}: ${response.statusText || 'Unknown'}`,
        );
      }

      const data = await response.json();
      const rate = data?.data?.[target];

      if (typeof rate !== 'number') {
        throw new Error('Exchange rate not available for the selected currency.');
      }

      setResult({
        base,
        target,
        rate,
        convertedAmount: parsedAmount * rate,
      });
    } catch (error) {
      const message =
        error instanceof Error ? error.message : 'An unexpected error occurred.';
      setFetchState({ loading: false, error: message });
      return;
    }

    setFetchState({ loading: false, error: null });
  };
const buttonDisabled =
    fetchState.loading ||
    !isAmountValid ||
    !validateCurrency(baseCurrency.trim().toUpperCase()) ||
    !validateCurrency(targetCurrency.trim().toUpperCase());

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={styles.flex}
    >
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.section}>
          <Text style={styles.heading}>Currency Converter</Text>
          <Text style={styles.subheading}>
            Enter base and destination currency codes and an amount to convert.
          </Text>
        </View>

        <View style={styles.card}>
          <SelectField
            label="Base Currency"
            value={baseCurrency}
            options={currencyOptions.filter(opt => opt !== targetCurrency)}
            onSelect={selected => {
              setBaseCurrency(selected);
              if (selected === targetCurrency) {
                const next = currencyOptions.find(opt => opt !== selected);
                if (next) {
                  setTargetCurrency(next);
                }
              }
            }}
          />
          <SelectField
            label="Destination Currency"
            value={targetCurrency}
            options={currencyOptions.filter(opt => opt !== baseCurrency)}
            onSelect={setTargetCurrency}
          />
          <LabeledInput
            label="Amount"
            value={amount}
            onChangeText={setAmount}
            placeholder="e.g. 1"
            keyboardType="numeric"
          />

          <TouchableOpacity
            style={[
              styles.button,
              buttonDisabled ? styles.buttonDisabled : styles.buttonPrimary,
            ]}
            disabled={buttonDisabled}
            onPress={handleConvert}
          >
            {fetchState.loading ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Text style={styles.buttonText}>Convert</Text>
            )}
          </TouchableOpacity>

          {fetchState.error ? (
            <Text style={styles.errorText}>{fetchState.error}</Text>
          ) : null}

          {result ? (
            <View style={styles.resultBox}>
              <Text style={styles.resultHeading}>Converted Amount</Text>
              <Text style={styles.resultValue}>
                {result.convertedAmount.toFixed(2)} {result.target}
              </Text>
              <Text style={styles.resultMeta}>
                Rate used: 1 {result.base} = {result.rate.toFixed(4)}{' '}
                {result.target}
              </Text>
            </View>
          ) : null}
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
