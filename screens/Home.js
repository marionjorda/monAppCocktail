import React, { useEffect, useState } from 'react';
import { Text, View, Image, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

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

    return (
        <View>
            <FlatList
                data={cocktails}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('Details', {cocktail: item})}>
                            <View style={ styles.box }>
                                <Text>{item.strDrink}</Text>
                                <Image
                                    style={{ width: 100, height: 100 }}
                                    source={{ uri: item.strDrinkThumb }}
                                />
                            </View>
                        </TouchableOpacity>
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
        marginVertical: 10
    }
  });
  