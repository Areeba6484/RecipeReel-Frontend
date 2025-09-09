import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "../styles/global";
import { useFonts } from "expo-font";
import { localStyles } from "../styles/local";
import { useRouter } from "expo-router";
import { useState } from "react";

// Components
import CustomInput from "../components/CustomInput";
import CheckBox from "../components/CheckBox";
import Divider from "../components/Divider";
import SocialIconsRow from "../components/SocialIconsRow";

const Signup = () => {
  const router = useRouter();
  const [isChecked, setIsChecked] = useState(false);

  function OTPScreen() {
    router.push("/otp");
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
      <Text style={styles.headerText}>Create an account</Text>
      <Text style={styles.subHeaderText}>
        Let's help you set up your account, it would not take long
      </Text>

      <CustomInput label="Name" placeholder="Enter Name" />
      <CustomInput label="Email" placeholder="Enter Email" />
      <CustomInput label="Password" placeholder="Enter Password" secureTextEntry />
      <CustomInput label="Confirm Password" placeholder="Retype Password" secureTextEntry />

      <CheckBox
        checked={isChecked}
        onToggle={() => setIsChecked(!isChecked)}
        label="Accept terms & Conditions"
      />

      <TouchableOpacity style={styles.signInButton} onPress={OTPScreen}>
        <Text style={styles.signInText}>Sign Up</Text>
      </TouchableOpacity>

      <Divider text="Or Sign In With" />
      <SocialIconsRow />

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
