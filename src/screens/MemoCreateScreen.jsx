import React from 'react';
import {
  View, TextInput, StyleSheet,
} from 'react-native';

import AppBar from '../components/AppBar';
import CircleButton from '../components/CircleButton';
import KeyboardSafeView from '../components/KeyboardSafeView';

export default function MemoCreateScreen() {
  return (
    <KeyboardSafeView style={styles.container} behavior="height">
      <AppBar />
      <View style={styles.inputContainer}>
        <TextInput value="" multiline style={styles.input} />
      </View>
      <CircleButton name="check" />
    </KeyboardSafeView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    paddingHorizontal: 27,
    paddingVertical: 32,
    flex: 1,
    // backgroundColor: 'gray',
  },
  input: {
    // backgroundColor: 'red',
    textAlignVertical: 'top',
    fontSize: 16,
    lineHeight: 24,
    flex: 1,
  },
});

// inputContainer,inputにそれぞれflex: 1,が入る