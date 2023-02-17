import { FlatList, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import { COLOR } from "../../contants/color"
import { horizontalScale, moderateScale, verticalScale } from "../../theme/Metric"
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ICON } from "../../contants/icons";
import { useState } from "react";

export const Menus = ({navigation,route})=>{

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
                            placeholder="Rechercher un menu"
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
    const DATA = [
        {
            image:'../../../assets/images/menu_1.jpg',
            title:"Alaska",
            description:"Salomon,cream,cheese,avocado,cucumber"
        },
        {
            image:'../../../assets/images/menu_2.jpg',
            title:"Biftech",
            description:"Salomon,cream,cheese,avocado,cucumber"
        },
        {
            image:'../../../assets/images/menu_3.jpg',
            title:"Legumes",
            description:"Salomon,cream,cheese,avocado,cucumber"
        },
        {
            image:'../../../assets/images/menu_1.jpg',
            title:"Alaska",
            description:"Salomon,cream,cheese,avocado,cucumber"
        },
        {
            image:'../../../assets/images/menu_2.jpg',
            title:"Biftech",
            description:"Salomon,cream,cheese,avocado,cucumber"
        },
        {
            image:'../../../assets/images/menu_3.jpg',
            title:"Legumes",
            description:"Salomon,cream,cheese,avocado,cucumber"
        },{
            image:'../../../assets/images/menu_1.jpg',
            title:"Alaska",
            description:"Salomon,cream,cheese,avocado,cucumber"
        },
        {
            image:'../../../assets/images/menu_2.jpg',
            title:"Biftech",
            description:"Salomon,cream,cheese,avocado,cucumber"
        },
        {
            image:'../../../assets/images/menu_3.jpg',
            title:"Legumes",
            description:"Salomon,cream,cheese,avocado,cucumber"
        },{
            image:'../../../assets/images/menu_1.jpg',
            title:"Alaska",
            description:"Salomon,cream,cheese,avocado,cucumber"
        },
        {
            image:'../../../assets/images/menu_2.jpg',
            title:"Biftech",
            description:"Salomon,cream,cheese,avocado,cucumber"
        },
        {
            image:'../../../assets/images/menu_3.jpg',
            title:"Legumes",
            description:"Salomon,cream,cheese,avocado,cucumber"
        },{
            image:'../../../assets/images/menu_1.jpg',
            title:"Alaska",
            description:"Salomon,cream,cheese,avocado,cucumber"
        },
        {
            image:'../../../assets/images/menu_2.jpg',
            title:"Biftech",
            description:"Salomon,cream,cheese,avocado,cucumber"
        },
        {
            image:'../../../assets/images/menu_3.jpg',
            title:"Legumes",
            description:"Salomon,cream,cheese,avocado,cucumber"
        }
    ]
    return (
        <View style={Styles.container}>
                <FlatList
                    data={DATA}
                    renderItem={({item})=>(
                        <TouchableOpacity onPress={()=>{navigation.navigate('detail_menu')}}>
                            <View style={Styles.card}>
                                <Image source={require("../../../assets/images/menu_1.jpg")} style={Styles.card_img}/>
                                <View style={Styles.card_detail_section}>
                                    <Text style={Styles.card_detail_section_title}> {item.title}</Text>
                                    <Text style={Styles.card_detail_section_description}>{item.description}</Text>
                                    <Ionicons style={Styles.card_detail_section_icon} name={ICON.next} size={moderateScale(20)}/>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )}
                />
            
        </View>
    )
}
const Styles = StyleSheet.create({
    container:{
        paddingHorizontal:horizontalScale(5),
        paddingTop:verticalScale(5),
        backgroundColor:COLOR.color2
    },
    card:{
        alignItems:'center',
        backgroundColor:COLOR.light,
        height:verticalScale(150),
        padding:horizontalScale(15),
        borderRadius:horizontalScale(10),
        flexDirection:'row',
        position:'relative',
        marginBottom:verticalScale(10)
    },
    card_img:{
        width:horizontalScale(100),
        height:verticalScale(110),
        borderRadius:moderateScale(10)
    },
    card_detail_section:{
        flexDirection:'column',
        overflow:'scroll',
        marginLeft:horizontalScale(4)
    },
    card_detail_section_title:{
      color:COLOR.color1,
      fontWeight:'800',
      fontSize:moderateScale(20),
      marginBottom:verticalScale(5)  
    },
    card_detail_section_description:{
        width:horizontalScale(210),
        fontWeight:'200',
        fontSize:moderateScale(16),
        marginBottom:verticalScale(5),
        overflow:'scroll'
    },
    card_detail_section_icon:{
        position:'absolute',
        right:0,
        bottom:0,
        color:COLOR.color1
    },
    containerSearchBar:{
        backgroundColor:COLOR.light,
        shadowColor: COLOR.color1,
        shadowOffset: {
          width: 0,
          height:1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 5,
        
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