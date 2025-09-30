import { SafeAreaView } from 'react-native-safe-area-context';
import { Text } from 'react-native';
import { styles } from '../styles/global';
import { useFonts } from 'expo-font';
import { useRouter } from 'expo-router';
import { useState } from 'react';

import OtpInput from '../components/OtpInput.js';
import AppButton from '../components/AppButton.js';

const OTPverify = () => {
  const [clicked, setClicked] = useState(false);
  const router = useRouter();

  function goHome() {
    setClicked(true);
    router.push('/home');
  }

  const [otpValue, setOtpValue] = useState('');
  const [fontsLoaded] = useFonts({
    'Roboto-Bold': require('../assets/Fonts/Roboto-Bold.ttf'),
    'Roboto-Regular': require('../assets/Fonts/Roboto-Regular.ttf'),
  });
  if (!fontsLoaded) return null;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>OTP Verification</Text>
      <Text style={[styles.subHeaderText, { textAlign: 'center', marginBottom: 20 }]}>
        Enter the 4-digit code sent to your email or phone
      </Text>

      <OtpInput
        length={4}
        onComplete={(code) => {
          setOtpValue(code);
        }}
      />

      <AppButton title="Verify" onPress={goHome} style={{ marginTop: 30 }} />
    </SafeAreaView>
  );
};

export default OTPverify;
