import React from 'react';
import { SafeAreaView, Text, TouchableOpacity, View, ImageBackground } from 'react-native';
import { styles } from '../styles/global';
import { localStyles } from '../styles/local';
import { useFonts } from 'expo-font';
import { Ionicons, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';

export default function IntroScreen() {
    const [clicked, setClicked] = useState(false);
    const router = useRouter();
    function Signin() {
        setClicked(true);
        router.push("/signin");
    }


    const [fontsLoaded] = useFonts({
        'Roboto-Bold': require('../assets/Fonts/Roboto-Bold.ttf'),
        'Roboto-Regular': require('../assets/Fonts/Roboto-Regular.ttf')
    });
    if (!fontsLoaded) {
        return null
    }
    return (
        <SafeAreaView>
            <ImageBackground source={require('../assets/images/bg.jpg')} resizeMode='cover' style={localStyles.backgroundImage}>
                <View style={localStyles.contentBox}>
                    {/* chef Icon */}
                    <View style={localStyles.iconIntro}>
                        <MaterialCommunityIcons name="chef-hat" size={50} color={'#fff'} />
                    </View>
                    <Text style={localStyles.subTitle}>100K+  Premium Recipes</Text>
                    <Text style={localStyles.title}>Recipe{"\n"}Reel</Text>
                    <Text style={localStyles.description}>Simple Way To Find Tasty Recipes</Text>
                    <TouchableOpacity style={styles.signInButton} onPress={Signin}>
                        <Text style={styles.signInText}>Start Cooking</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </SafeAreaView>
    );
};