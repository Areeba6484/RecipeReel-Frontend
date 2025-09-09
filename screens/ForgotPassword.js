import { SafeAreaView } from "react-native-safe-area-context";
import { Text, TouchableOpacity } from "react-native";
import { styles } from "../styles/global";
import { useFonts } from "expo-font";
import { useRouter } from "expo-router";

// Reusable input
import CustomInput from "../components/CustomInput";
import { useState } from "react";

const ForgotPassword = () => {
  const [clicked, setClicked] = useState(false);
  const router = useRouter();

  function reset() {
    setClicked(true);
    router.push("/resetpassword");
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
      <Text style={styles.headerText}>Forgot</Text>
      <Text style={styles.headerText}>Password?</Text>

      <Text style={styles.subHeaderText}>
        Enter your email to receive a password reset code.
      </Text>

      {/* Email input */}
      <CustomInput label="Email Address" placeholder="Enter Email Address" />

      {/* Submit button */}
      <TouchableOpacity style={styles.signInButton} onPress={reset}>
        <Text style={styles.signInText}>Submit</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ForgotPassword;
