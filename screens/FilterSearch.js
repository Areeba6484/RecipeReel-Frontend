import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { styles } from '../styles/global';
import { useFonts } from 'expo-font';
import { Ionicons, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { localStyles } from '../styles/local';
import { useRouter } from 'expo-router';



const FilterOption = ({ lable, active }) => (
    <TouchableOpacity style={[localStyles.filterTag, active && localStyles.filterTagActive]}>
        <Text style={[localStyles.filterTagText, active && localStyles.filterTagTextActive]}>{lable}</Text>
    </TouchableOpacity>
);
const CategoryTag = ({ label, icon, active }) => (
    <TouchableOpacity
        style={[localStyles.filterTag, active && localStyles.filterTagActive]}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={[localStyles.filterTagText, active && localStyles.filterTagTextActive]}>{label}</Text>
            <MaterialCommunityIcons name={icon} size={16} color={active ? '#F4A124' : '#F4A124'} style={{ marginLeft: 5 }} />

        </View>
    </TouchableOpacity>
)

export default function FilterScreen() {
    const router = useRouter();
    function Search() {
        router.push("/search");
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
                <ScrollView style={{ padding: 20, flex: 1, paddingHorizontal: 20, paddingTop: 20 }}>
                    <View style={localStyles.headerRow}>
                        <View>
                            <Text style={[styles.headerText, { fontSize: 20, justifyContent: 'center' }]}>Filter Search</Text>

                        </View></View>
                    {/* {Time section} */}
                    <Text style={localStyles.filterSectionTitle}>Time</Text>
                    <View style={localStyles.filterRow}>
                        <FilterOption lable="All" />
                        <FilterOption lable="Newest" active />
                        <FilterOption lable="Oldest" />
                        <FilterOption lable="Popularity" />
                    </View>
                    {/* {Rate section} */}
                    <Text style={localStyles.filterSectionTitle}>Rate</Text>
                    <View style={localStyles.filterRow}>
                        {[5, 4, 3, 2, 1].map((num, index) => (
                            <TouchableOpacity
                                key={index}
                                style={[localStyles.filterTag, num === 4 && localStyles.filterTagActive, // mark 4 as active
                                ]}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Text style={[localStyles.filterTagText, num === 4 && localStyles.filterTagTextActive]}>{num}</Text>
                                    <FontAwesome name="star" size={14} color={'#F4A124'} style={{ marginLeft: 5 }} />

                                </View>
                            </TouchableOpacity>
                        ))}
                    </View>
                    {/* {Category section} */}
                    <Text style={localStyles.filterSectionTitle}>Category</Text>
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginBottom: 30 }}>
                        <CategoryTag label="All" />
                        <CategoryTag label="Cereal" />
                        <CategoryTag label="Vegetables" />
                        <CategoryTag label="Dinner" />
                        <CategoryTag label="Chinese" />
                        <CategoryTag label="Local Dish" active />
                        <CategoryTag label="Fruit" />
                        <CategoryTag label="BreakFast" />
                        <CategoryTag label="Spanish" />
                        <CategoryTag label="Lunch" />
                    </View>

                    <TouchableOpacity style={[styles.signInButton]} onPress={(Search)}><Text style={styles.signInText}>Filter</Text>
                    </TouchableOpacity>


                </ScrollView>
            </SafeAreaView>

        )
    }
};