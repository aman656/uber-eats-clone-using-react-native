import { View, Text, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
const Bottom = (props) => {
  return (
    <View
      style={{
        flexDirection: "row",
        margin: 8,
        marginHorizontal: 20,
        justifyContent: "space-between",
      }}
    >
      <BottomComp name="home" txt="Home" />
      <BottomComp name="search" txt="Browse" />
      <BottomComp name="shopping-bag" txt="Grocery" />
      <BottomComp name="list" txt="Orders" />
      <BottomComp name="user" txt="Account" />
    </View>
  );
};

const BottomComp = ({ name, txt }) => (
  <TouchableOpacity>
    <View>
      <FontAwesome
        name={name}
        size={25}
        color="black"
        style={{ marginBottom: 3, alignSelf: "center" }}
      />
      <Text>{txt}</Text>
    </View>
  </TouchableOpacity>
);

export default Bottom;
