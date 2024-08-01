import React from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, StyleSheet } from 'react-native';

import Button from '../components/Button/index'

export default function Welcome({navigation}) { //burada navigation prop'unu parçalayarak sadece onu aldık

    function goToMemberSign() {
        navigation.navigate('MemberSignScreen')
    }

    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <Text style={styles.header}>Kebap Fitness Salonu</Text>
                <Button text='Üye Kaydı Oluştur' onPress={goToMemberSign} /> 
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center', //bu merkeze yerleşirir, sadece y yönünde
        alignItems: 'center' //bu merkeze sıkıştırır, hem x hem de y yönünde
    },

    header: {
        textAlign: 'center',
        margin: 10,
        fontSize: 30,
        fontWeight: 'bold',
    }
})