import React, { useEffect, useState } from 'react';
import { Text, View, Image, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default Home = () => {

    const [cocktails, setCocktails] = useState([]);
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
        // ajoute au local storage ?
        // import AsyncStorage from '@react-native-async-storage/async-storage';


        // chat gpt (il utilise JSON.stringify mais je sais pas non plus si c'est nécessaire je crois que oui): 
        // try {
        //     await AsyncStorage.setItem(cocktails, JSON.stringify(cocktail));
        //     console.log('Item added successfully');
        //   } catch (error) {
        //     console.error('Error adding item to AsyncStorage:', error);
        //   }

        try {
            const value = await AsyncStorage.getItem('@favorites');
            let favorites = [];
            if (value !== null) {
                favorites = JSON.parse(value);
            }
            favorites.push(cocktail);

            await AsyncStorage.setItem('@favorites', JSON.stringify(favorites));
        } catch (e) {
            console.error('Error adding item to AsyncStorage:', error);
        }

    };

    // Usage example
        // addToFavorites(item);

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
                                <Ionicons name="star" size={25} color="#000" />
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
  