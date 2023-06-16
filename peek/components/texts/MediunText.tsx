import {Text,StyleSheet} from "react-native"
import { Colors, fontSize } from "../../assets/assets"
import { FC } from "react"

type mediumTextType = {
    text : string
    color? : string
}

export const MediumText : FC<mediumTextType> = ({color = Colors.black,text }) =>{
    return(
        <Text style={[styles.mediumtext,{color:color}]}>{text}</Text>
    )
}



const styles = StyleSheet.create({
   mediumtext:{
    fontSize : fontSize.medium,
    textAlign:"center"
   }
})