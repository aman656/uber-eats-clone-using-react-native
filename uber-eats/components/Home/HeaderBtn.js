import { TouchableOpacity, Text } from "react-native";

const HeaderBtn = ({ bgColor, fColor, txt, activebtn, setActiveBtn }) => (
  <TouchableOpacity
    style={{
      backgroundColor: activebtn === txt ? "black" : "white",
      paddingHorizontal: 16,
      paddingVertical: 6,
      borderRadius: 30,
      marginRight: 5,
    }}
    onPress={() => setActiveBtn(txt)}
  >
    <Text
      style={{
        color: activebtn === txt ? "white" : "black",
        fontSize: 17,
        fontWeight: "700",
      }}
    >
      {txt}
    </Text>
  </TouchableOpacity>
);

export default HeaderBtn;
