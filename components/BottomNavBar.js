import { View, TouchableOpacity } from "react-native";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import { localStyles } from "../styles/local";

const BottomNavBar = ({ onHome, onSaved, onAdd, onNotifications, onProfile }) => {
  return (
    <View style={localStyles.iconContainer}>
      <TouchableOpacity onPress={onHome}><Ionicons name='home-outline' size={24} /></TouchableOpacity>
      <TouchableOpacity onPress={onSaved}><Ionicons name='bookmark-outline' size={24} /></TouchableOpacity>
      <View style={localStyles.addButton}>
        <TouchableOpacity onPress={onAdd}><FontAwesome name='plus' style={localStyles.plusText} /></TouchableOpacity>
      </View>
      <TouchableOpacity onPress={onNotifications}><Ionicons name='notifications-outline' size={24} /></TouchableOpacity>
      <TouchableOpacity onPress={onProfile}><Ionicons name='person-outline' size={24} /></TouchableOpacity>
    </View>
  );
};

export default BottomNavBar;
