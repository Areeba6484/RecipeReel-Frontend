import { SafeAreaView } from "react-native-safe-area-context";
import { Text, TouchableOpacity } from "react-native";
import { styles } from "../styles/global";
import { useFonts } from "expo-font";
import { useRouter } from "expo-router";
import { useState } from "react";

// Reusable component
import CustomInput from "../components/CustomInput.js";

const ResetPassword = () => {
  const [clicked, setClicked] = useState(false);
  const router = useRouter();

  function goHome() {
    setClicked(true);
    router.push("/home");
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
      <Text style={styles.headerText}>Reset</Text>
      <Text style={styles.headerText}>Password?</Text>

      <Text style={styles.subHeaderText}>
        Enter new password below to reset your account.
      </Text>

      {/* Password fields */}
      <CustomInput
        label="New Password"
        placeholder="Enter Password"
        secureTextEntry
      />

      <CustomInput
        label="Confirm Password"
        placeholder="Retype Password"
        secureTextEntry
      />

      {/* Submit button */}
      <TouchableOpacity style={styles.signInButton} onPress={goHome}>
        <Text style={styles.signInText}>Submit</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ResetPassword;
