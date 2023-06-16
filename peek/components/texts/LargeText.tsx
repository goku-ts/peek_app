import {Text,StyleSheet} from "react-native"
import { Colors, fontSize } from "../../assets/assets"
import { FC } from "react"

type largeTextType = {
    text : string
    color? : string
}

export const LargeText : FC<largeTextType> = ({color = Colors.black,text }) =>{
    return(
        <Text style={[styles.largetext,{color:color}]}>{text}</Text>
    )
}



const styles = StyleSheet.create({
   largetext:{
    fontSize : fontSize.large
   }
})