import React, { useRef, useState } from 'react';
import { View, TextInput } from 'react-native';
import { localStyles } from '../styles/local';

const OtpInput = ({ length = 4, onComplete }) => {
  const [digits, setDigits] = useState(Array(length).fill(''));
  const inputsRef = useRef([]);

  const handleChange = (text, idx) => {
    // keep only last numeric char
    const val = text.replace(/[^0-9]/g, '').slice(-1);
    const next = [...digits];
    next[idx] = val;
    setDigits(next);

    // move focus to next when user types
    if (val && idx < length - 1) {
      const nextRef = inputsRef.current[idx + 1];
      if (nextRef && nextRef.focus) nextRef.focus();
    }

    // if all filled, call onComplete
    if (next.every((d) => d !== '')) {
      onComplete && onComplete(next.join(''));
    }
  };

  const handleKeyPress = ({ nativeEvent }, idx) => {
    // on backspace when empty, move focus to previous
    if (nativeEvent.key === 'Backspace' && digits[idx] === '' && idx > 0) {
      const prevRef = inputsRef.current[idx - 1];
      if (prevRef && prevRef.focus) prevRef.focus();
    }
  };

  return (
    <View style={localStyles.otpContainer}>
      {Array.from({ length }).map((_, idx) => (
        <TextInput
          key={idx}
          ref={(el) => (inputsRef.current[idx] = el)}
          style={localStyles.otpBox}
          keyboardType="numeric"
          maxLength={1}
          onChangeText={(t) => handleChange(t, idx)}
          onKeyPress={(e) => handleKeyPress(e, idx)}
          value={digits[idx]}
          autoFocus={idx === 0}
        />
      ))}
    </View>
  );
};

export default OtpInput;
