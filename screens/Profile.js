import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default Profile = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Profil</Text>
            <Text style={styles.info}>Nom : John Doe</Text>
            <Text style={styles.info}>Email : john.doe@example.com</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    info: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

