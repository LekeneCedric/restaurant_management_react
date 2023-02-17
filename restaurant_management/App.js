import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { DetailMenu } from './src/pages/detail_menu/DetailMenu';
import { Home } from './src/pages/Home/home';
import { Menu } from './src/pages/menus/Menu';
import { Plat } from './src/pages/plats/Plat';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='home'>
        <Stack.Screen name='home' component={Home} options={{ headerShown:false}}/>
        <Stack.Screen name='detail_menu' component={DetailMenu} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
