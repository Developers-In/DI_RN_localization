import React, { FC } from "react";
import { StyleSheet, View } from "react-native";
import BodyText from "./BodyText";

interface Props {
  text: string;
  isQuestion: boolean;
}

const Item: FC<Props> = ({ text, isQuestion }) => {
  return (
    <View style={[styles.container, isQuestion ? styles.questionContainer : styles.answerContainer]}>
      <BodyText>{text}</BodyText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderRadius: 8,
    marginBottom: 8
  },
  questionContainer: {
    width: '80%',
    alignSelf: "flex-start",
    backgroundColor: "#2b6673"
  },
  answerContainer: {
    width: '80%',
    marginLeft: '20%',
    backgroundColor: "#87b0b6"
  }
});

export default Item;
