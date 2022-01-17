import { View, StyleSheet, ScrollView } from "react-native";
import { Divider } from "react-native-elements";
import About from "../components/Detail/About";
import CartBtn from "../components/Detail/CartBtn";
import Menu from "../components/Detail/Menu";

const menulist = [
  {
    name: "Veg Salad",
    desc: "with chicken sprinkles and cheese spreadings",
    price: 20,
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Chicken Salad",
    desc: "with chicken sprinkles and cheese spreadings",
    price: 20,
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Beef Salad",
    desc: "with chicken sprinkles and cheese spreadings",
    price: 20,
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Mutton Salad",
    desc: "with chicken sprinkles and cheese spreadings",
    price: 20,
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
];
const Detail = ({ navigation, route }) => {
  return (
    <View>
      <About route={route} />
      <Divider width={1.5} style={{ marginVertical: 20 }} />

      <Menu menulist={menulist} name={route.params.name} />

      {
        <CartBtn
          navigation={navigation}
          route={route}
          name={route.params.name}
        />
      }
    </View>
  );
};

export default Detail;
