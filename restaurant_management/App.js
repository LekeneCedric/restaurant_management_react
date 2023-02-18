import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, Modal, StyleSheet, Text, View } from 'react-native';
import { DetailMenu } from './src/pages/detail_menu/DetailMenu';
import { Home } from './src/pages/Home/home';
import RNPickerSelect from "react-native-picker-select";
import { COLOR } from './src/contants/color';
import { horizontalScale, verticalScale } from './src/theme/Metric';
import { userRoleStore } from './src/store';

export default function App() {
  const [modalVisible,setModalVisible] = useState(true);
  const [user_role,set_role] = userRoleStore((store)=>[store.user_role,store.set_role])
  const Stack = createNativeStackNavigator();
  return (
    <>
    <Modal
    animationType="slide"
    transparent = {true}
    visible = {modalVisible}
    onRequestClose = {()=>{
      Alert.alert("welcome","Welcome to the restaurant management system",[{
        text:'Ok',
        onPress:()=>{}
      }])
    }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <RNPickerSelect
                        style={{ borderWidth:0.5,padding:horizontalScale(10),borderColor:COLOR.color2,marginBottom:verticalScale(10) }}
                        onValueChange={(value) => { 
                            set_role(value);
                            setModalVisible(false)
                        }}
                        items={[
                            { label: "Client", value: "client" },
                            { label: "Cuisinier", value: "cuisinier" },
                            { label: "livreur", value: "livreur" },
                        ]}
                    />
        </View>
      </View>
    </Modal>
    <NavigationContainer>
      <Stack.Navigator initialRouteName='home'>
        <Stack.Screen name='home' component={Home} options={{ headerShown:false}}/>
        <Stack.Screen name='detail_menu' component={DetailMenu} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
    </>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    marginTop: verticalScale(0),
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  }
});
