import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreens from './src/screens/HomeScreens';
import CoursesScreen from './src/screens/CoursesScreen';
import Coursesinformations from './src/screens/Coursesinformations';
import CounterScreens from './src/screens/CounterScreens';
import BoxScreen from './src/screens/BoxScreen';
import ColorChangeScreen from './src/screens/ColorChangeScreen';
import PasswordScreen from './src/screens/PasswordScreen';
import PlusMınusScreen from './src/screens/PlusMınusScreen';
import DesignScreen from './src/screens/DesignScreen';
import LoadingScreen from './src/screens/LoadingScreen';
import denemebutonu from './src/screens/denemebutonu';


const Stack = createNativeStackNavigator();
export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Anasayfa" component={HomeScreens} />
        <Stack.Screen name="Kurslarım" component={CoursesScreen} />
        <Stack.Screen name="KursBilgilerim" component={Coursesinformations} />
        <Stack.Screen name="Sayac" component={CounterScreens} />
        <Stack.Screen name="Kutu" component={BoxScreen} />
        <Stack.Screen name="RenkDegistir" component={ColorChangeScreen} />
        <Stack.Screen name="Şifre Ekranı" component={PasswordScreen} />
        <Stack.Screen name="Toplama Çıkartma" component={PlusMınusScreen} />
        <Stack.Screen name="Tasarım Ekranı" component={DesignScreen} />
        <Stack.Screen name="Loading Ekranı" component={LoadingScreen} />
        <Stack.Screen name="Deneme Ekranı" component={denemebutonu} />
      </Stack.Navigator>
    </NavigationContainer>
  );

}

const styles = StyleSheet.create({

});
