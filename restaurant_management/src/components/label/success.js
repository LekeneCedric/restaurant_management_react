import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { THEME } from "../../constants/colorsTheme";
import { ICONS } from "../../constants/icons";
import { horizontalScale, moderateScale } from "../../theme/Metric";
const SuccessLabel = props=>
{
    return (
        <View style={styles.container}>
            <Icon
            size={15}
            name={ICONS.validLabel}
            color={THEME.success}
            ></Icon>
            <Text style={[styles.message,{color:THEME.success}]}>{props.message}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row',
    },
    message:{
        marginLeft:horizontalScale(12),
        fontSize:moderateScale(15)
    }
});
export default SuccessLabel;