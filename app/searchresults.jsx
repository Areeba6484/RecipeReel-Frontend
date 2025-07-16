import React from "react";
import {Text,View,SafeAreaView,ScrollView} from 'react-native';
import SearchResults from "../screens/SearchResults";

export default function Index(){
    return(
        <ScrollView>
<SearchResults/>
        </ScrollView>
    )
}