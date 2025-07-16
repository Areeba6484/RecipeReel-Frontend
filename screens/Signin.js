import React from 'react';
import { SafeAreaView, Text, TextInput, TouchableOpacity, View, Button } from 'react-native';
import { styles } from '../styles/global';
import { useFonts } from 'expo-font';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useRouter } from 'expo-router';
import { useState } from 'react';


export default function Signin() {
    const [clicked, setClicked] = useState(false);
    const router = useRouter();
    function Signup() {
        setClicked(true);
        router.push("/signup");
    }

     function Password() {
        setClicked(true);
        router.push("/forgotpassword");
    }


    const [fontsLoaded] = useFonts({
        'Roboto-Bold': require('../assets/Fonts/Roboto-Bold.ttf'),
        'Roboto-Regular': require('../assets/Fonts/Roboto-Regular.ttf')
    });
    if (!fontsLoaded) {
        return null
    }
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.headerText}>Hello</Text>
            <Text style={styles.subHeaderText}>Welcome Back!</Text>
            <Text style={styles.label}>Email</Text>
            <TextInput placeholder='Enter Email' style={styles.input}></TextInput>
            <Text style={styles.label}>Password</Text>
            <TextInput placeholder='Enter Password' style={styles.input} secureTextEntry></TextInput>
            <TouchableOpacity onPress={Password}>
                <Text style={styles.forgottext}>Forgot Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.signInButton} onPress={Signup}>
                <Text style={styles.signInText}>Sign In  </Text>
            </TouchableOpacity>
            <View style={styles.dividerContainer}>
                <View style={styles.line} />
                <Text style={styles.orText}>Or Sign In With</Text>
                <View style={styles.line}></View>
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