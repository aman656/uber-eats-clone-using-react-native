import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { Ionicons, AntDesign } from "@expo/vector-icons";

import { View, StyleSheet, Text } from "react-native";
const SearchBar = (props) => {
  return (
    <View
      style={{
        marginTop: 8,
        flexDirection: "row",
        marginLeft: 15,
      }}
    >
      <GooglePlacesAutocomplete
        query={{ key: "AIzaSyCSdVJDAe6oL6OaeR4XFL0FP-g8WQKp1Fw" }}
        placeholder="search"
        styles={{
          textInput: {
            backgroundColor: "#eee",
            borderRadius: 20,

            fontWeight: "700",
            marginTop: 5,
          },
          textInputContainer: {
            backgroundColor: "#eee",
            borderRadius: 50,
            flexDirection: "row",
            alignItems: "center",
            marginRight: 10,
          },
        }}
        renderLeftButton={() => (
          <View style={{ marginLeft: 5 }}>
            <Ionicons name="location-sharp" size={24} color="black" />
          </View>
        )}
        renderRightButton={() => (
          <View
            style={{
              flexDirection: "row",
              marginRight: 8,
              backgroundColor: "white",
              padding: 9,
              borderRadius: 30,
              alignItems: "center",
            }}
          >
            <AntDesign
              name="clockcircle"
              size={11}
              style={{ marginRight: 5 }}
            />
            <Text>Search</Text>
          </View>
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {},
});
export default SearchBar;
