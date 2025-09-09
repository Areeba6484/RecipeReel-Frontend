import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { styles } from '../styles/global';
import { useFonts } from 'expo-font';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { localStyles } from '../styles/local';
import { useRouter } from 'expo-router';
import { useState } from 'react';

const Signup = () => {
  const router = useRouter();

  function OTPScreen() {
    router.push("/otp");
  }

  const [isChecked, setisChecked] = useState(false);

  const [fontsLoaded] = useFonts({
    'Roboto-Bold': require('../assets/Fonts/Roboto-Bold.ttf'),
    'Roboto-Regular': require('../assets/Fonts/Roboto-Regular.ttf')
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>Create an account</Text>
      <Text style={styles.subHeaderText}>
        Let's help you set up your account, it would not take long
      </Text>

      <Text style={styles.label}>Name</Text>
      <TextInput placeholder="Enter Name" style={styles.input} />

      <Text style={styles.label}>Email</Text>
      <TextInput placeholder="Enter Email" style={styles.input} />

      <Text style={styles.label}>Password</Text>
      <TextInput placeholder="Enter Password" style={styles.input} secureTextEntry />

      <Text style={styles.label}>Confirm Password</Text>
      <TextInput placeholder="Retype Password" style={styles.input} secureTextEntry />

      <View style={localStyles.checkboxContainer}>
        <TouchableOpacity onPress={() => setisChecked(!isChecked)}>
          <FontAwesome
            name={isChecked ? 'check-square' : 'square-o'}
            size={24}
          />
        </TouchableOpacity>
        <Text style={localStyles.checkboxText}>Accept terms & Conditions</Text>
      </View>

      <TouchableOpacity style={styles.signInButton} onPress={OTPScreen}>
        <Text style={styles.signInText}>Sign Up</Text>
      </TouchableOpacity>

      <View style={styles.dividerContainer}>
        <View style={styles.line} />
        <Text style={styles.orText}>Or Sign In With</Text>
        <View style={styles.line} />
      </View>

      <View style={styles.iconContainer}>
        <TouchableOpacity><FontAwesome name="google" size={40} /></TouchableOpacity>
        <TouchableOpacity><FontAwesome name="facebook-square" size={40} /></TouchableOpacity>
      </View>

      <Text style={styles.signUpText}>
        {"Already a member? "}
        <Text style={styles.signUpLink} onPress={() => router.push("/signin")}>
          Sign In
        </Text>
      </Text>
    </SafeAreaView>
  );
};

export default Signup;
