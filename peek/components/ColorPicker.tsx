import {TouchableOpacity,StyleSheet} from "react-native"
import { FC } from "react"


type colorPickerType = {
 color : string
}

export const ColorPicker : FC<colorPickerType> = ({color}) =>{
    return(
        <TouchableOpacity style={[styles.button,{backgroundColor:color}]} activeOpacity={0.8}/>
    )
}



const styles = StyleSheet.create({
  button:{
    height : 50,
    width : 50,
    borderRadius:25
  }
})