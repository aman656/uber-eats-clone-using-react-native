import { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import Fixing from "./Fixing";
import HeaderBtn from "./HeaderBtn";

const Header = ({ activebtn, setActiveBtn }) => {
  return (
    <SafeAreaView
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",

        padding: 15,
      }}
    >
      <HeaderBtn
        txt="Delivery"
        bgColor="black"
        fColor="white"
        activebtn={activebtn}
        setActiveBtn={setActiveBtn}
      />
      <HeaderBtn
        txt="Pickup"
        bgColor="white"
        fColor="black"
        activebtn={activebtn}
        setActiveBtn={setActiveBtn}
      />
    </SafeAreaView>
  );
};
export default Header;
