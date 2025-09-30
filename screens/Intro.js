import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, View, ImageBackground } from 'react-native';
import { localStyles } from '../styles/local';
import { useFonts } from 'expo-font';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import AppButton from '../components/AppButton.js';

const Intro = () => {
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
  if (!fontsLoaded) return null;

  return (
    <SafeAreaView>
      <ImageBackground
        source={require('../assets/images/bg.png')}
        resizeMode="cover"
        style={localStyles.backgroundImage}
      >
        <View style={localStyles.contentBox}>
          {/* chef Icon */}
          <View style={localStyles.iconIntro}>
            <MaterialCommunityIcons name="chef-hat" size={50} color={'#E0115F'} />
          </View>

          <Text style={localStyles.subTitle}>100K+ Premium Recipes</Text>
          <Text style={localStyles.title}>Recipe{"\n"}Reel</Text>
          <Text style={localStyles.description}>Simple Way To Find Tasty Recipes</Text>

          {/* Reusable button */}
          <AppButton title="Start Cooking" onPress={Signin} />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Intro;
