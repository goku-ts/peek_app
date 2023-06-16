import { StyleSheet, Text, View, ScrollView } from "react-native";

import { IconButton } from "../../components/buttons/IconButton";
import { LargeText } from "../../components/texts/LargeText";
import { MediumText } from "../../components/texts/MediunText";
import { Colors } from "../../assets/assets";
import { SmallText } from "../../components/texts/SmallText";

const TopIcons = () => {
  return (
    <View style={styles.topicons}>
      <View>
        <IconButton name={"chevron-back-outline"} />
      </View>
      <IconButton name={"create-outline"} />
    </View>
  );
};

const TitleAndDate = () => {
  return (
    <View style={styles.titleanddate}>
      <LargeText text="TITLE GOES HERE" color={Colors.white} />
      <View style={styles.date}>

      <MediumText text="21 May 2020" color={Colors.gray} />
      </View>
    </View>
  );
};

const Content = () => {
  return (
    <View style={styles.content}>
      <MediumText
        text= {`Here is a sub topic 
        
        many things can happen depending on how it goes`}
        color={Colors.white}
      />
    </View>
  );
};

const NoteView = () => {
  return (
    <View style={styles.container}>
      <View style={styles.contentview}>
        <TopIcons />
        <ScrollView>
          <TitleAndDate />
          <Content />
        </ScrollView>
      </View>
    </View>
  );
};

export default NoteView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topicons: {
    flexDirection: "row",
    marginTop: 30,
    marginBottom:5,
    justifyContent: "space-between",
  },
  contentview: {
    flex: 1,
    marginLeft:25,
    marginRight:25
  },
  titleanddate: {
    marginTop: 20,
  },
  content: {
    marginTop: 20,
  },
  date:{
    marginTop:5
  }
});
