import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { styles } from '../styles/global';
import { useFonts } from 'expo-font';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useRouter } from 'expo-router';
import { useState } from 'react';

const ResetPassword = () => {
  const [clicked, setClicked] = useState(false);
  const router = useRouter();

  function Home() {
    setClicked(true);
    router.push("/home");
  }

  const [fontsLoaded] = useFonts({
    'Roboto-Bold': require('../assets/Fonts/Roboto-Bold.ttf'),
    'Roboto-Regular': require('../assets/Fonts/Roboto-Regular.ttf')
  });
  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>Reset</Text>
      <Text style={styles.headerText}>Password?</Text>

      <Text style={styles.subHeaderText}>
        Enter new Password below to reset your account.
      </Text>

      <Text style={styles.label}>New Password</Text>
      <TextInput
        placeholder="Enter Password"
        style={styles.input}
        secureTextEntry
      />

      <Text style={styles.label}>Confirm Password</Text>
      <TextInput
        placeholder="Retype Password"
        style={styles.input}
        secureTextEntry
      />

      <TouchableOpacity style={styles.signInButton} onPress={Home}>
        <Text style={styles.signInText}>Submit</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ResetPassword;
