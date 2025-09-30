import { SafeAreaView } from "react-native-safe-area-context";
import { Text, TouchableOpacity } from "react-native";
import { styles } from "../styles/global";
import { useFonts } from "expo-font";
import { useRouter } from "expo-router";

// Reusable components
import CustomInput from "../components/CustomInput.js";
import Divider from "../components/Divider.js";
import SocialIconsRow from "../components/SocialIconsRow.js";

const Signin = () => {
  const router = useRouter();

  function goHome() {
    router.push("/home");
  }
  function goSignup() {
    router.push("/signup");
  }
  function goForgotPassword() {
    router.push("/forgotpassword");
  }

  const [fontsLoaded] = useFonts({
    "Roboto-Bold": require("../assets/Fonts/Roboto-Bold.ttf"),
    "Roboto-Regular": require("../assets/Fonts/Roboto-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>Hello</Text>
      <Text style={styles.subHeaderText}>Welcome Back!</Text>

      <CustomInput label="Email" placeholder="Enter Email" />
      <CustomInput label="Password" placeholder="Enter Password" secureTextEntry />

      {/* Forgot Password */}
      <TouchableOpacity onPress={goForgotPassword}>
        <Text style={styles.forgottext}>Forgot Password?</Text>
      </TouchableOpacity>

      {/* Sign In button */}
      <TouchableOpacity style={styles.signInButton} onPress={goHome}>
        <Text style={styles.signInText}>Sign In</Text>
      </TouchableOpacity>

      <Divider text="Or Sign In With" />
      <SocialIconsRow />

      {/* Sign Up link */}
      <Text style={styles.signUpText}>
        {"Don't have an account? "}
        <Text style={styles.signUpLink} onPress={goSignup}>
          Sign Up
        </Text>
      </Text>
    </SafeAreaView>
  );
};

export default Signin;
