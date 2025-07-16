import React from "react";
import {Text,View,SafeAreaView,ScrollView} from 'react-native';
import SavedRecipes from "../screens/SavedRecipes";

export default function Index(){
    return(
        <ScrollView>
<SavedRecipes/>
        </ScrollView>
    )
}