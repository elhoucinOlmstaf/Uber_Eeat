import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from  './src/Screens/Home'
import RestaurantDetails from './src/Screens/RestaurantDetails'
import NavigationRoutes from './NavigationRoutes'

export default function App() {
  return (
   <NavigationRoutes />
  );
}
