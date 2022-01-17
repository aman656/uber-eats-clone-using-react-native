import { View, StyleSheet, TouchableOpacity, Text, Modal } from "react-native";
import { useState } from "react";
import { useSelector } from "react-redux";
import Orders from "./Orders";
import { db } from "../../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import LottieView from "lottie-react-native";

const collectionRef = collection(db, "orders");

const CartBtn = ({ name, navigation }) => {
  const [showModal, setShowModal] = useState(false);
  const [isloading, setLoading] = useState(false);
  const cart = useSelector((state) => state.cartReducer.items);
  const totalPrice = cart
    .map((i) => Number(i.price))
    .reduce((p, c) => p + c, 0);
  const currenc = totalPrice.toLocaleString("en", {
    style: "currency",
    currency: "USD",
  });

  const addOrder = () => {
    setLoading(true);
    addDoc(collectionRef, {
      items: cart,
      restaurantName: name,
      createdAt: serverTimestamp(),
    }).then(() => {
      setTimeout(() => {
        setLoading(false);
        navigation.navigate("complete", {
          name: name,
        });
      }, 2500);
    });
  };

  const checkoutModal = () => {
    return (
      <View style={styles.modalContainer}>
        <View style={styles.modalCheckoutContainer}>
          <Text style={styles.restaurantName}>{name}</Text>
          {cart.map((item, index) => (
            <Orders name={item.name} price={item.price} key={index} />
          ))}
          <View style={styles.subtotalContainer}>
            <Text style={styles.subtotalText}>Subtotal</Text>
            <Text>${currenc}</Text>
          </View>
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <TouchableOpacity
              style={{
                marginTop: 20,
                backgroundColor: "black",
                alignItems: "center",
                padding: 13,
                borderRadius: 30,
                width: 250,
                position: "relative",
              }}
              onPress={() => {
                addOrder();
                setShowModal(false);
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: 19,
                  fontWeight: "700",
                  letterSpacing: 1,
                }}
              >
                CheckOut
              </Text>
              <Text
                style={{
                  position: "absolute",
                  right: 20,
                  color: "white",
                  fontSize: 16,
                  top: 17,
                }}
              >
                {totalPrice ? `$ ${currenc}` : ""}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  return (
    <>
      <Modal
        visible={showModal}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setShowModal(false)}
      >
        {checkoutModal()}
      </Modal>
      {totalPrice ? (
        <View style={styles.container}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <TouchableOpacity
              style={{
                marginTop: 20,
                backgroundColor: "black",
                flexDirection: "row",
                justifyContent: "flex-end",
                // alignItems: "center",
                padding: 15,
                borderRadius: 30,
                width: 300,
                position: "relative",
              }}
              onPress={() => setShowModal(true)}
            >
              <Text style={{ color: "white", fontSize: 20, marginRight: 50 }}>
                View Cart
              </Text>
              <Text style={{ color: "white", fontSize: 20, marginRight: 20 }}>
                {`${currenc}$`}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <></>
      )}
      {isloading ? (
        <View
          style={{
            backgroundColor: "black",
            position: "absolute",
            opacity: 0.6,
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "100%",
          }}
        >
          <LottieView
            source={require("../../assets/animations/float.json")}
            speed={3}
            autoPlay
            style={{ height: 200 }}
          />
        </View>
      ) : (
        <></>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 10,
    zIndex: 999,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0,0.7)",
    marginTop: 0,
  },

  modalCheckoutContainer: {
    backgroundColor: "white",
    padding: 16,
    height: 500,
    borderWidth: 1,
  },

  restaurantName: {
    textAlign: "center",
    fontWeight: "600",
    fontSize: 18,
    marginBottom: 10,
  },

  subtotalContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
  },

  subtotalText: {
    textAlign: "left",
    fontWeight: "600",
    fontSize: 15,
    marginBottom: 10,
  },
});
export default CartBtn;
