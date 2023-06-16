import { StyleSheet, Text, View } from 'react-native';

import { LargeText } from '../components/texts/LargeText';
import { SmallText } from '../components/texts/SmallText';
import { MediumText } from '../components/texts/MediunText';
import { IconButton } from '../components/buttons/IconButton';
import { AddButton } from '../components/buttons/addButton';
import { ColorPicker } from '../components/ColorPicker';
import { NoteColors } from '../assets/assets';
import { Card } from '../components/Card';
import NoteView from './Notes/Views';



const  Home=() : any =>{
  return(
    <View style={styles.container}>
      <NoteView/>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  
  },
});
