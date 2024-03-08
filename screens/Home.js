import React, { useEffect, useState } from 'react';
import { Text, View, Image, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFavorites } from '../context/FavoritesContext';

export default Home = () => {

    const [cocktails, setCocktails] = useState([]);
    // const [favorites, setFavorites] = useState([]);
    const { favorites, setFavorites } = useFavorites();
    const navigation = useNavigation();
    // search by name
    // www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita

    useEffect(() => {
        fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setCocktails(data.drinks);
            })
    }, []);

    const addToFavorites = async (cocktail) => {
        try {
          const value = await AsyncStorage.getItem('@favorites');
          let updatedFavorites = [];
      
          if (value !== null) {
            updatedFavorites = JSON.parse(value);
          }
      
          const indexToRemove = updatedFavorites.findIndex(
            (favoriteCocktail) => favoriteCocktail.idDrink === cocktail.idDrink
          );
      
          if (indexToRemove !== -1) {
            updatedFavorites.splice(indexToRemove, 1);
          } else {
            updatedFavorites.push(cocktail);
          }
      
          setFavorites(updatedFavorites);
          await AsyncStorage.setItem('@favorites', JSON.stringify(updatedFavorites));
      
        } catch (e) {
          console.log('Error adding item to AsyncStorage:', e);
        }
      };
      


    return (
        <View>
            <FlatList
                data={cocktails}
                renderItem={({ item }) => {
                    return (
                        <View style={ styles.box }>
                            <TouchableOpacity onPress={() => navigation.navigate('Details', { cocktail: item })}>
                                <Text>{item.strDrink}</Text>
                                <Image
                                    style={ styles.image }
                                    source={{ uri: item.strDrinkThumb }}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => addToFavorites(item)}>
                            {favorites.some(favorite => favorite.idDrink === item.idDrink) 
                                ? <Ionicons name="star" size={25} color="#000" /> 
                                : <Ionicons name="star" size={25} color="#FFF" />
                            }
                            </TouchableOpacity>
                        </View>
                    )
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    box: {
        backgroundColor: '#356284',
        flex: 1,
        borderRadius: 20,
        padding: 10,
        marginHorizontal: 15,
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: 250,
        alignSelf: 'center',
    },
    image: {
        width: 150, 
        height: 150,
        borderRadius: 10,
        borderColor: 'black',
        borderWidth: 3,
        marginBottom: 5,
        marginTop: 5,
    },
    name: {
        color: '#FFF',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 18,
    }
  });
  