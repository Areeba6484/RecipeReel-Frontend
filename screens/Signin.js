import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../styles/global';
import { useFonts } from 'expo-font';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useRouter } from 'expo-router';

const Signin = () => {
  const router = useRouter();

  function Home() {
    router.push("/home");
  }
  function Signup() {
    router.push("/signup");
  }

  function Password() {
    router.push("/forgotpassword");
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
      <Text style={styles.headerText}>Hello</Text>
      <Text style={styles.subHeaderText}>Welcome Back!</Text>

      <Text style={styles.label}>Email</Text>
      <TextInput placeholder="Enter Email" style={styles.input} />

      <Text style={styles.label}>Password</Text>
      <TextInput placeholder="Enter Password" style={styles.input} secureTextEntry />

      <TouchableOpacity onPress={Password}>
        <Text style={styles.forgottext}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.signInButton} onPress={Home}>
        <Text style={styles.signInText}>Sign In</Text>
      </TouchableOpacity>

      <View style={styles.dividerContainer}>
        <View style={styles.line} />
        <Text style={styles.orText}>Or Sign In With</Text>
        <View style={styles.line} />
      </View>

      <View style={styles.iconContainer}>
        <TouchableOpacity>
          <FontAwesome name="google" size={40} />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome name="facebook-square" size={40} />
        </TouchableOpacity>
      </View>

      <Text style={styles.signUpText}>
        {"Don't have an account? "}
        <Text style={styles.signUpLink} onPress={Signup}>Sign Up</Text>
      </Text>
    </SafeAreaView>
  );
};

export default Signin;
