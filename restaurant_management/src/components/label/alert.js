import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { THEME } from "../../constants/colorsTheme";
import { ICONS } from "../../constants/icons";
const AlertLabel = props=>
{
    return (
        <View style={styles.container}>
            <Icon
            size={15}
            name={ICONS.invalidLabel}
            color={THEME.danger}
            ></Icon>
            <Text style={[styles.message,{color:THEME.danger}]}>{props.message}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row',
    },
    message:{
        marginLeft:10,
        fontSize:15
    }
});
export default AlertLabel;