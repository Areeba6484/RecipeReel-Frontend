import React from 'react';
import { SafeAreaView, Text, TextInput, TouchableOpacity, View, Image, ScrollView } from 'react-native';
import { styles } from '../styles/global';
import { useFonts } from 'expo-font';
import { Ionicons, FontAwesome,Entypo} from '@expo/vector-icons';
import { localStyles } from '../styles/local';
import RecipeCard from '../components/RecipeCard';
import { useRouter } from 'expo-router';


export default function SavedRecipes() {
  const router = useRouter();
   function Home() {
    router.push("/home");
  }
  function Saved() {
    router.push("/savedrecipes");
  }
  function Profile() {
    router.push("/profile");
  }
 
  const [fontsLoaded] = useFonts({
    'Roboto-Bold': require('../assets/Fonts/Roboto-Bold.ttf'),
    'Roboto-Regular': require('../assets/Fonts/Roboto-Regular.ttf')
  });
  if (!fontsLoaded) {
    return null
  }
  {
    return (
      <SafeAreaView style={localStyles.safeArea}>
        <ScrollView style={{ padding: 20 }}>
          <View style={localStyles.headerRow}>
            <View>
              <Text style={[styles.headerText, { fontSize: 20 }]}>Saved Recipes</Text>
             
            </View></View>
            <View style={{flex:1}}>
                <ScrollView showsVerticalScrollIndicator={false}>

            <RecipeCard
            image={require('../assets/images/ribs.jpg')}
            title="Traditional Spare Ribs"
            chef="Chef John"
            time="25 mins"
            rating="4.0"/>


            <RecipeCard
            image={require('../assets/images/chops.jpg')}
            title="Lamb Chops with mint"
            chef="Chef Laura"
            time="30 mins"
            rating="4.5"/>

            <RecipeCard
            image={require('../assets/images/chickenBiryani.jpg')}
            title="Chicken Biryani"
            chef="Chef James Milner"
            time="40 mins"
            rating="4.9"/>

            
            <RecipeCard
            image={require('../assets/images/butterChicken.jpg')}
            title="Butter Chicken"
            chef="Chef Ali"
            time="30 mins"
            rating="4.9"/>
            </ScrollView>
            </View>
            </ScrollView>

            
            
         

         
<View style={{position:'absolute',right:0,left:0,bottom:0,height:80,backgroundColor:'#fff',flexDirection:'row',
justifyContent:'space-around',alignItems:'center',
}}>
            <TouchableOpacity onPress={(Home)}><Ionicons name='home-outline' size={24}/></TouchableOpacity>
           
            <TouchableOpacity onPress={(Saved)} ><Ionicons name='bookmark-outline' size={24}/></TouchableOpacity>

            <View style={localStyles.addButton}>
              <TouchableOpacity><FontAwesome name='plus' style={localStyles.plusText}/></TouchableOpacity>
            </View>
            <TouchableOpacity ><Ionicons name='notifications-outline' size={24}/></TouchableOpacity>
            <TouchableOpacity onPress={(Profile)}><Ionicons name='person-outline' size={24}/></TouchableOpacity>
          </View>

 

      </SafeAreaView>


    )
  }
};