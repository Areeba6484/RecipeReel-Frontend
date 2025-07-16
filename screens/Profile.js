import React from 'react';
import { SafeAreaView, Text, TextInput, TouchableOpacity, View, Image, ScrollView, Pressable } from 'react-native';
import { styles } from '../styles/global';
import { useFonts } from 'expo-font';
import { Ionicons, FontAwesome, Entypo } from '@expo/vector-icons';
import { localStyles } from '../styles/local';
import RecipeCard from '../components/RecipeCard';
import { useRouter } from 'expo-router';


export default function ProfileScreen() {
    const router = useRouter();
    function Review() {
        router.push("/review");
    }
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
                            <Text style={[styles.headerText, { fontSize: 20 }]}><TouchableOpacity><Entypo name='dots-three-horizontal' size={24} style={{ marginRight: 100 }} /></TouchableOpacity>Profile</Text>

                        </View></View>
                    <ScrollView showsVerticalScrollIndicator={false}>

                        {/* {profile info} */}
                        <View style={styles.profileContainer}>
                            <Image source={require('../assets/images/avatar.jpg')} style={{ width: 90, height: 90, borderRadius: 45, marginBottom: 10 }} />
                            <View style={{ flex: 1, marginLeft: 12 }}>
                                <Text style={styles.title} >Jhon Doe</Text>
                                <Text >Chef </Text>
                                <Text style={{ color: '#444', marginTop: 4 }} >Private Chef{'\n'}Passionate about food and life.</Text>
                            </View></View>

                        <View style={styles.statBox}>


                            <Text>Recipe{"\n"}
                                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>4</Text></Text>
                            <Text >Followers{"\n"}
                                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>2.5M</Text></Text>
                            <Text >Following{"\n"}
                                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>259</Text></Text>
                        </View>

                    </ScrollView>

                    {/* {tabs} */}
                    <View style={styles.tabBox}>

                        <TouchableOpacity style={styles.activeTab}><Text style={styles.activeTabText}>Recipe</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.inactiveTab}><Text style={styles.inactiveTabText}>Videos</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.inactiveTab} onPress={(Review)}><Text style={styles.inactiveTabText}>Reviews</Text></TouchableOpacity>
                    </View>



                    <View style={{ flex: 1 }}>
                        <ScrollView showsVerticalScrollIndicator={false}>

                            <RecipeCard
                                image={require('../assets/images/ribs.jpg')}
                                title="Traditional Spare Ribs"
                                chef="Chef John"
                                time="25 mins"
                                rating="4.0" />


                            <RecipeCard
                                image={require('../assets/images/chops.jpg')}
                                title="Lamb Chops with mint"
                                chef="Chef Laura"
                                time="30 mins"
                                rating="4.5" />

                            <RecipeCard
                                image={require('../assets/images/chickenBiryani.jpg')}
                                title="Chicken Biryani"
                                chef="Chef James Milner"
                                time="40 mins"
                                rating="4.9" />



                        </ScrollView>

                    </View>
                </ScrollView>






                <View style={{
                    position: 'absolute', right: 0, left: 0, bottom: 0, height: 80, backgroundColor: '#fff', flexDirection: 'row',
                    justifyContent: 'space-around', alignItems: 'center',
                }}>
                    <TouchableOpacity onPress={(Home)}><Ionicons name='home-outline' size={24} /></TouchableOpacity>

                    <TouchableOpacity onPress={(Saved)}><Ionicons name='bookmark-outline' size={24} /></TouchableOpacity>

                    <View style={localStyles.addButton}>
                        <TouchableOpacity><FontAwesome name='plus' style={localStyles.plusText} /></TouchableOpacity>
                    </View>
                    <TouchableOpacity ><Ionicons name='notifications-outline' size={24} /></TouchableOpacity>
                    <TouchableOpacity onPress={(Profile)} ><Ionicons name='person-outline' size={24} /></TouchableOpacity>
                </View>



            </SafeAreaView>


        )
    }
};