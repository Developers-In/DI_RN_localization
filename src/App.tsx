import React, { FC } from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import LocalizedStrings from "react-native-localization";
import Item from "./components/Item";

let strings = new LocalizedStrings({
  en: {
    how: "How do you want your egg today?",
    boiledEgg: "Boiled egg",
    softBoiledEgg: "Soft-boiled egg",
    choice: "How to choose the egg"
  },
  it: {
    how: "Come vuoi il tuo uovo oggi?",
    boiledEgg: "Uovo sodo",
    softBoiledEgg: "Uovo alla coque",
    choice: "Come scegliere l'uovo"
  },
  si: {
    how: "අද ඔබට ඔබේ බිත්තරය අවශ්‍ය වන්නේ කෙසේද?",
    boiledEgg: "තම්බා බිත්තර",
    softBoiledEgg: "මෘදු තම්බා බිත්තරයක්",
    choice: "බිත්තරය තෝරා ගන්නේ කෙසේද"
  },
  zh: {
    how: "你今天想要怎样的鸡蛋",
    boiledEgg: "煮鸡蛋",
    softBoiledEgg: "水煮蛋",
    choice: "如何选择鸡蛋"
  },
  ru: {
    how: "Как ты хочешь свое яйцо сегодня",
    boiledEgg: "Вареное яйцо",
    softBoiledEgg: "Яйцо всмятку",
    choice: "Как выбрать яйцо"
  }
});

const App: FC = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Item text={strings.how} isQuestion={true}/>
        <Item text={strings.boiledEgg} isQuestion={false}/>
        <Item text={strings.softBoiledEgg} isQuestion={false}/>
        <Item text={strings.choice} isQuestion={true}/>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 8
  }
})

export default App;
