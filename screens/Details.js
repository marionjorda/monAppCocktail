import React from 'react';
import { Text, Button, View, Image, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

export default Details = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const { cocktail } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{cocktail.strDrink}</Text>
            <Text style={styles.ingredients}>{cocktail.strIngredient1} {cocktail.strMeasure1} | {cocktail.strIngredient2} {cocktail.strMeasure2} | {cocktail.strIngredient3} {cocktail.strMeasure3} | {cocktail.strIngredient4}</Text>
            <Text>{cocktail.strInstructions}</Text>
            <Image
                style={{ width: 100, height: 100 }}
                source={{ uri: cocktail.strDrinkThumb }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      paddingVertical: 15,
      paddingHorizontal: 10
    },
    box: {
        backgroundColor: '#356284',
        flex: 1,
        borderRadius: 20,
        padding: 10,
        marginHorizontal: 15,
        marginVertical: 10
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    ingredients: {
        fontSize: 15,
        fontStyle: 'italic',
        marginBottom: 5
    }
  });
  