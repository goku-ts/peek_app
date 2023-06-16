import {Text,StyleSheet} from "react-native"
import { Colors, fontSize } from "../../assets/assets"
import { FC } from "react"

type smallTextType = {
    text : string
    color? : string
}

export const SmallText : FC<smallTextType> = ({color = Colors.black,text }) =>{
    return(
        <Text style={[styles.smalltext,{color:color}]}>{text}</Text>
    )
}


const styles = StyleSheet.create({
   smalltext:{
    fontSize : fontSize.small
   }
})