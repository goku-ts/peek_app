import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  FlatList,
  Alert,
  BackHandler,
} from "react-native";
import { Colors, fontSize } from "../../assets/assets";
import { FC, useEffect } from "react";
import { LargeText } from "../../components/texts/LargeText";
import { StatusBar } from "expo-status-bar";
import { IconButton } from "../../components/buttons/IconButton";

import { Card } from "../../components/Card";
import { AddButton } from "../../components/buttons/addButton";
import { Screen } from "../../assets/assets";

type itemtype = {
  item: {
    name: string;
    id: string;
    date: string;
    by: string;
  };
};

const lists : itemtype | [] = [];

const Header = () => {
  return (
    <View style={styles.header}>
      <LargeText text="Notes" color={Colors.white} />
      <IconButton name={"search-outline"} />
    </View>
  );
};

const renderItem: FC<itemtype> = ({ item }) => (
  <View style={styles.cardview}>
    <Card title={item?.name} date={item.date} by={item.by} />
  </View>
);

const NoteList = () => {
  return (
    <View style={styles.listview}>
      <FlatList
        data={lists}
        renderItem={renderItem}
        numColumns={2}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const AddButtonView = () => {
  return (
    <View style={styles.addbuttonview}>
      <AddButton name={"add-outline"} />
    </View>
  );
};

const EmptyNotesView =()=>{
  return(
    <View style={{flex:1, justifyContent:"center",alignItems:"center"}}>
     <Text style={{color:"white"}}>Press the + icon to add new note</Text>
    </View>
  )
}



export const Notes: FC = () => {


  useEffect(() => {
    const backAction = () => {
      Alert.alert('Hold on!', 'Are you sure you want to exit?', [
        {
          text: 'Cancel',
          onPress: () => null,
          style: 'cancel',
        },
        {text: 'YES', onPress: () => BackHandler.exitApp()},
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);

 

  return (
    <View style={styles.container}>
      <Header />
      {lists.length === 0 ?  <EmptyNotesView/>:<NoteList />}  
      <AddButtonView/>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
  },
  header: {
    marginTop: 40,
    marginLeft: 20,
    marginRight: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  view: {
    height: 20,
    width: 100,
    backgroundColor: Colors.white,
  },
  listview: {
    flex: 1,
    alignItems: "center",
    marginTop: 20,
  },
  cardview: {
    margin: 5,
  },
  addbuttonview:{
    position:"absolute",
    top: Screen.height/1.12,
    left:Screen.width /1.3,
    
  }
});
