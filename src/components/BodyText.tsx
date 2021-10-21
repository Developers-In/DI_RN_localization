import React, { FC } from "react";
import { StyleSheet, Text } from "react-native";

const BodyText: FC = ({ children }) => {
  return (
    <Text style={styles.text}>{children}</Text>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "#fff",
    fontSize: 20
  }
});

export default BodyText;
