import { StyleSheet, Text, TouchableOpacity, TouchableOpacityBase, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from './screens/Home';
import DetailsScreen from './screens/Details';
import FavoritesScreen from './screens/Favorites';
import ProfileScreen from './screens/Profile';
import { FavoritesProvider } from './context/FavoritesContext';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <FavoritesProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen 
            name="Home" 
            component={HomeScreen} 
            options={({ navigation }) => ({
              headerRight: () => (
                <View style={{ flexDirection: 'row' }}>
                  <TouchableOpacity onPress={() => navigation.navigate('Favorites')}>
                    <Ionicons name="star" size={30} color="black" style={{ marginRight: 25}}/>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                    <Ionicons name="person-circle-outline" size={32} color="black" style={{ marginRight: 5}}/>
                  </TouchableOpacity>
                </View>
              ),
            })}/>
          <Stack.Screen name="Details" component={DetailsScreen} />
          <Stack.Screen name="Favorites" component={FavoritesScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </FavoritesProvider>

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
