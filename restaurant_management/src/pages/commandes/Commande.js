import { useState } from "react"
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import { COLOR } from "../../contants/color"
import { horizontalScale, moderateScale, verticalScale } from "../../theme/Metric"
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ICON } from "../../contants/icons";

export const Commandes = ({navigation,route})=>{
    
    useState(()=>{
        navigation.setOptions({
            headerTitle:(props)=>(
                
                    <View style={[Styles.searchBar,{width:horizontalScale(340)}]}>
                        <Ionicons
                            style={{ flex:1,alignSelf:'center',textAlign:'center' }}
                            name={ICON.search}
                            size={horizontalScale(20)}
                            color={COLOR.color1}
                        />
                        <TextInput
                            style={{ flex:5 }}
                            placeholder="Rechercher commande"
                            keyboardType='ascii-capable'
                            cursorColor={COLOR.color1}
                            onChangeText={new_search=>setSearch(new_search)}
                            />
                        <Ionicons
                            style={{ flex:1,textAlign:'center',alignSelf:'center', }}
                            name={ICON.filter}
                            size={horizontalScale(20)}
                            color={COLOR.color1}
                        />
                    </View>
            )
        })
    },[navigation])

    return (
        <View>
            <View style={Styles.button_validation_container}> 
                <TouchableOpacity style={Styles.validationButton}>
                    <Text style={Styles.ValidationButtonText}>Valider Commande</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection:'row',marginTop:verticalScale(10),padding:horizontalScale(10),alignItems:'center',alignSelf:'center' }}>
                <View style={{ flex:6 }}><Text style={{ fontWeight:'bold' }}>Article</Text></View>
                <View style={{ flex:2 ,borderLeftWidth:0.5,paddingLeft:4}}><Text style={{ fontWeight:'bold' }}>Qte</Text></View>
                <View style={{ flex:2 ,borderLeftWidth:0.5,paddingLeft:4}}><Text style={{ fontWeight:'bold' }}>Prix</Text></View>
            </View>
            <View style={{ flexDirection:'row',marginTop:verticalScale(10),padding:horizontalScale(10),alignItems:'center',alignSelf:'center' }}>
                <View style={{ flexDirection:'row' }}>
                    <Image source={require("../../../assets/images/menu_2.jpg")}/>
                    <Text>Stake</Text>
                </View> 
            </View>

        </View>
    )
}
const Styles = StyleSheet.create({
    button_validation_container:{
        alignItems:'center',
        justifyContent:'center'
    },
    validationButton:{
        borderBottomRightRadius:horizontalScale(15),
        borderBottomLeftRadius:horizontalScale(100),
        borderTopLeftRadius:verticalScale(10),
        borderTopRightRadius:verticalScale(100),
        marginTop:verticalScale(10),
        padding:horizontalScale(15),
        backgroundColor:COLOR.color1,
        shadowColor: COLOR.color1,
        shadowOffset: {
          width: 0,
          height:1,
        },
        shadowOpacity: 1,
        shadowRadius: 2.22,
        elevation: 15,
    },
    ValidationButtonText:{
        color:COLOR.light,
        fontWeight:'700'
    },
    searchBar:{
        borderWidth:1,
        margin:horizontalScale(10),
        padding:horizontalScale(5),
        flexDirection:'row',
        alignItems:'center',
        borderRadius:horizontalScale(5),
        backgroundColor:COLOR.color2,
        borderColor:COLOR.color2
    },
})