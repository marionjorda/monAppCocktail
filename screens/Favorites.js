import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default Favorites = () => {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        getFavorites();
    }, []);

    const getFavorites = async () => {
        try {
            const value = await AsyncStorage.getItem('@favorites');
            if(value !== null) {
                setFavorites(JSON.parse(value));
            }
        } catch(e) {
            // error reading value
        }
    }

    return (
        <View>
            <FlatList
                data={favorites}
                renderItem={({ item }) => (
                    <View>
                        <Text>{item.strDrink}</Text>
                        <Image
                            style={{ width: 100, height: 100 }}
                            source={{ uri: item.strDrinkThumb }}
                        />
                    </View>
                )}
            />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFF',
      alignItems: 'center',
      paddingVertical: 15,
      paddingHorizontal: 10,
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold'
    },
    ingredient: {
        fontSize: 16,
        fontStyle: 'italic',
        marginBottom: 5,
    },
    ingredients: {
        fontSize: 16,
        fontStyle: 'italic',
        marginBottom: 15,
        marginTop: 5,
    },
    description: {
        marginHorizontal: 15,
        fontSize: 15,
        marginBottom: 15,
    },
    image: {
        width: 350, 
        height: 350,
        borderRadius: 10,
        borderColor: 'black',
        borderWidth: 3,
        marginBottom: 5,
        marginTop: 5,
    }
  });