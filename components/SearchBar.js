import { View, TextInput, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { localStyles } from "../styles/local";

const SearchBar = ({ placeholder, onFilterPress }) => {
  return (
    <View style={localStyles.searchContainer}>
      <View style={localStyles.searchBox}>
        <Ionicons name="search" size={20} style={localStyles.searchIcon} />
        <TextInput
          placeholder={placeholder || "Search recipe"}
          style={localStyles.inputBox}
          placeholderTextColor="#333"
        />
      </View>
      <TouchableOpacity style={localStyles.filterButton} onPress={onFilterPress}>
        <Ionicons name="options-outline" size={20} />
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;
