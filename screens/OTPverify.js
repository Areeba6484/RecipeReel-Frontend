import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { styles } from '../styles/global';
import { useFonts } from 'expo-font';
import { localStyles } from '../styles/local';
import { useRouter } from 'expo-router';
import { useState } from 'react';

const OTPverify = () => {
    const [clicked, setClicked] = useState(false);
    const router = useRouter();
    function Home() {
        setClicked(true);
        router.push("/home");
    }

    const [otp, setotp] = useState('');
    const [fontsLoaded] = useFonts({
        'Roboto-Bold': require('../assets/Fonts/Roboto-Bold.ttf'),
        'Roboto-Regular': require('../assets/Fonts/Roboto-Regular.ttf')
    });
    if (!fontsLoaded) {
        return null;
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.headerText}>OTP Verification</Text>
            <Text style={[styles.subHeaderText, { textAlign: 'center', marginBottom: 20 }]}>
                Enter the 4-digit code sent to your email or phone
            </Text>

            <View style={[localStyles.otpContainer, { justifyContent: 'center', alignItems: 'center' }]}>
                <TextInput style={localStyles.otpBox} keyboardType='numeric' maxLength={1} />
                <TextInput style={localStyles.otpBox} keyboardType='numeric' maxLength={1} />
                <TextInput style={localStyles.otpBox} keyboardType='numeric' maxLength={1} />
                <TextInput style={localStyles.otpBox} keyboardType='numeric' maxLength={1} />
            </View>

            <TouchableOpacity style={[styles.signInButton, { marginTop: 30 }]} onPress={Home}>
                <Text style={styles.signInText}>Verify</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

export default OTPverify;
