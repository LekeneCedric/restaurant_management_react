import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { COLOR } from "../../contants/color"
import { horizontalScale, moderateScale, verticalScale } from "../../theme/Metric"
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ICON } from "../../contants/icons";


const DATA = [
    {
        image : "../../../assets/images/menu_1.jpg",
        price : "3500",
        name:"Steak Buffet",
        count:3
    },
    {
        image : "../../../assets/images/menu_2.jpg",
        price : "3500",
        name:"Steak Buffet",
        count:3
    },
    {
        image : "../../../assets/images/menu_1.jpg",
        price : "3500",
        name:"Steak Buffet",
        count:3
    },
    {
        image : "../../../assets/images/menu_1.jpg",
        price : "3500",
        name:"Steak Buffet",
        count:3
    },
    {
        image : "../../../assets/images/menu_1.jpg",
        price : "3500",
        name:"Steak Buffet",
        count:3
    },
    {
        image : "../../../assets/images/menu_1.jpg",
        price : "3500",
        name:"Steak Buffet",
        count:3
    },
    {
        image : "../../../assets/images/menu_1.jpg",
        price : "3500",
        name:"Steak Buffet",
        count:3
    },{
        image : "../../../assets/images/menu_1.jpg",
        price : "3500",
        name:"Steak Buffet",
        count:3
    },
    {
        image : "../../../assets/images/menu_1.jpg",
        price : "3500",
        name:"Steak Buffet",
        count:3
    },{
        image : "../../../assets/images/menu_1.jpg",
        price : "3500",
        name:"Steak Buffet",
        count:3
    },
    {
        image : "../../../assets/images/menu_1.jpg",
        price : "3500",
        name:"Steak Buffet",
        count:3
    },{
        image : "../../../assets/images/menu_1.jpg",
        price : "3500",
        name:"Steak Buffet",
        count:3
    },
    {
        image : "../../../assets/images/menu_1.jpg",
        price : "3500",
        name:"Steak Buffet",
        count:3
    },
]
export const DetailMenu = ({navigation,route})=>{
    return(
        <View style={Styles.container}>
            <View style={Styles.menu}>
                <Image style={Styles.image_menu} source={require("../../../assets/images/menu_1.jpg")}/>
                <View style={Styles.about}>
                    <Text style={Styles.menuTitle}>About</Text>
                    <Text style={Styles.menuDetail}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</Text>
                </View>
                <View style={Styles.menu_title_section}>
                    <Text style={Styles.menuTitle}>Menu</Text>
                    <Text style={Styles.menuDetail}><Text style={{ fontWeight:'bold' }}>24</Text> Plats</Text>
                </View>
            </View> 
            <FlatList
                            data={DATA}
                            renderItem={({item})=>(
                                <View style={ Styles.card}>
                                    <Image source={require("../../../assets/images/menu_1.jpg")} style={Styles.card_image}/>
                                    <View style={Styles.card_description}>
                                        <Text style={Styles.card_description_price}> $ 540</Text>
                                        <Text style={Styles.card_description_name}>Chicken nooble</Text>
                                        <Text style={Styles.card_description_details}>300g - 150 kcal</Text>
                                    </View>
                                    <View style={Styles.card_counter}>
                                        <TouchableOpacity>
                                        <Ionicons name={ICON.add} size={moderateScale(20)}/>
                                        </TouchableOpacity>
                                        <Text style={Styles.count_number}>0</Text>
                                        <TouchableOpacity>
                                        <Ionicons name={ICON.remove} size={moderateScale(20)}/>
                                        </TouchableOpacity>        
                                    </View>
                                </View>
                                )}
                        />
        </View>
    )

}

const Styles = StyleSheet.create({
    container:{
        flexDirection:'column'
    },
    menu:{
        flexDirection:'column'
    },
    image_menu:{
        borderBottomLeftRadius:moderateScale(50),
        borderBottomRightRadius:moderateScale(50),
        height:verticalScale(300),
    },
    about:{
        margin:horizontalScale(10),
        flexDirection:'column',
        justifyContent:'space-between'
    },
    menuTitle:{
        fontWeight:'700',
        color:COLOR.color1,
        fontSize:moderateScale(25)
    },
    menuDetail:{
        color:COLOR.color1,
        fontSize:moderateScale(15),
        fontWeight:'300',
    },
    menu_title_section : {
        margin:horizontalScale(10),
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        alignContent:'center'
    },
    card:{
        alignItems:'center',
        backgroundColor:COLOR.light,
        height:verticalScale(100),
        padding:horizontalScale(10),
        borderRadius:horizontalScale(10),
        flexDirection:'row',
        position:'relative',
        marginBottom:verticalScale(10)
    },
    card_image:{
        flex:2,
        width:horizontalScale(60),
        height:verticalScale(60),
        borderRadius:moderateScale(100)
    },
    card_description:{
        flex:8,
        flexDirection:'column',
        overflow:'scroll',
        marginLeft:horizontalScale(10)
    },
    card_description_price:{
        color:COLOR.color1,
      fontWeight:'900',
      fontSize:moderateScale(16),
      marginBottom:verticalScale(2)  
    },
    card_description_name:{
        color:COLOR.color1,
        fontWeight:'400',
        fontSize:moderateScale(16),
        marginBottom:verticalScale(2)  
    },
    card_description_details:{
        color:COLOR.color2,
        fontWeight:'350',
        fontSize:moderateScale(13),
        marginBottom:verticalScale(2)  
    },
    card_counter:{
        flex:1,
        flexDirection:'column',
        justifyContent:'center'
    },
})
