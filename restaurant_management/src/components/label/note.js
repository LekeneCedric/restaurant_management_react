
import { StyleSheet, Text, View } from "react-native";
import { COLOR } from "../../contants/color";
import { moderateScale } from "../../theme/Metric";

export const NoteLabel = props=>
{
    return (
        <View style={[styles.container,{marginTop:8}]}>
            <Text style={styles.message}>{props.message}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1
    },
    message:{
        color:COLOR.color1,
        fontSize:moderateScale(18),
        fontWeight:'300'
    }
});