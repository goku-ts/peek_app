import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { FC } from "react";
import { Colors, Screen } from "../assets/assets";

import { MediumText } from "./texts/MediunText";
import { SmallText } from "./texts/SmallText";

type CardType = {
  title: string;
  by : string
  date: string;
  color?: string;
  onPress ? : any
};

export const Card: FC<CardType> = ({ title, date, color = Colors.white, by, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
    <View style={[styles.cardview, { backgroundColor: color }]}>
      <View style={styles.content}>
        <View style={styles.title}>
          <MediumText text={title} />
        </View>
        <View style={styles.date}>
            <SmallText text={by} color={Colors.gray}/>
          <SmallText text={date} color={Colors.gray} />
        </View>
      </View>
    </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardview: {
    height: Screen.height / 4.2,
    width: Screen.width / 2.3,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    padding:10,
    height: Screen.height / 4.4,
    width: Screen.width / 2.5,
  },
  date: {
    paddingTop: 5,
  },
  title: {
    flexShrink:1,
  },
});
