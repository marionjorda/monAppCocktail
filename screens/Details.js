import React from 'react';
import { Text, View, Image, StyleSheet, ScrollView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

export default Details = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const { cocktail } = route.params;

    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.title}>{cocktail.strDrink}</Text>
                <Image style={ styles.image } source={{ uri: cocktail.strDrinkThumb }} />
                <View style={styles.ingredients}>
                    <Text style={styles.ingredient}>- {cocktail.strIngredient1} {cocktail.strMeasure1}</Text>
                    <Text style={styles.ingredient}>- {cocktail.strIngredient2} {cocktail.strMeasure2}</Text>
                    <Text style={styles.ingredient}>- {cocktail.strIngredient3} {cocktail.strMeasure3}</Text>
                    <Text style={styles.ingredient}>- {cocktail.strIngredient4} {cocktail.strMeasure4}</Text>
                </View>
                
                <Text style={styles.description}>{cocktail.strInstructions}</Text>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F1F9F1',
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
  