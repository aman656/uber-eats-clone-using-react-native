import { View, StyleSheet, Text, ScrollView } from "react-native";
import Fixing from "../components/Home/Fixing";
import { useSelector } from "react-redux";
import LottieView from "lottie-react-native";
import { Divider } from "react-native-elements";
import { TextInfo, ImageInfo } from "../components/Detail/Menu";

const Completed = ({ route }) => {
  const cart = useSelector((state) => state.cartReducer.items);
  const totalPrice = cart
    .map((i) => Number(i.price))
    .reduce((p, c) => p + c, 0);
  const currenc = totalPrice.toLocaleString("en", {
    style: "currency",
    currency: "USD",
  });
  return (
    <Fixing>
      <View style={styles.container}>
        <View style={{ margin: 12, alignItems: "center", height: "100%" }}>
          <LottieView
            source={require("../assets/animations/ckeck.json")}
            style={{ height: 100, alignSelf: "center", marginBottom: 10 }}
            autoPlay
            loop={false}
            speed={0.5}
          />
          <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10 }}>
            Your order to restaurant {route.params.name} of {currenc}$ has been
            placed.
          </Text>
          {cart.map((m, index) => (
            <View key={index}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  margin: 10,
                }}
              >
                <TextInfo name={m.name} desc={m.desc} price={m.price} />
                <ImageInfo image={m.image} />
              </View>
              <Divider
                width={0.5}
                orientation="vertical"
                style={{ marginHorizontal: 20 }}
              />
            </View>
          ))}
          <LottieView
            style={{ height: 200, alignSelf: "center" }}
            source={require("../assets/animations/cooking.json")}
            autoPlay
            speed={0.5}
          />
        </View>
      </View>
    </Fixing>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
export default Completed;
