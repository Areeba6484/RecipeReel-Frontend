import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
import { styles } from '../styles/global';
import { useFonts } from 'expo-font';
import { localStyles } from '../styles/local';
import { useRouter } from 'expo-router';

export default function VerifyScreen() {
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
        return null
    }
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.headerText}>OTP Verification</Text>
            <Text style={styles.subHeaderText}>Enter the 4-digit code sent to your email or phone</Text>
            <View style={localStyles.otpContainer}>
                <TextInput style={localStyles.otpBox} keyboardType='numeric' maxLength={1}></TextInput>
                <TextInput style={localStyles.otpBox} keyboardType='numeric' maxLength={1}></TextInput>
                <TextInput style={localStyles.otpBox} keyboardType='numeric' maxLength={1}></TextInput>
                <TextInput style={localStyles.otpBox} keyboardType='numeric' maxLength={1}></TextInput>
            </View>
            <TouchableOpacity style={styles.signInButton} onPress={Home}>
                <Text style={styles.signInText}>Verify  </Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};