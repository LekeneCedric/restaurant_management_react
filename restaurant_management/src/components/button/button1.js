import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const Button1 = (props)=>
{
    return (
        <TouchableOpacity style={[styles.button,{backgroundColor:props.backColor},props.styleButton]} onPress={props.function}>
            <Text style={[styles.text,{color:props.textColor}]}>{props.title}</Text>
        </TouchableOpacity> 
    )
}
const styles = StyleSheet.create({
    button:{
        borderRadius:5,
        width:'100%',
        padding:10,
    },
    text:{
        alignSelf:'center',
        fontWeight:'bold',
        fontSize:18
    },
})
export default Button1;