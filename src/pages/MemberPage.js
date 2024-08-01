import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import {View, Text, StyleSheet} from 'react-native';

export default function MemberPage({route}) { //kullanıcı bilgileri parametreleri route parametresiyle çekiliyor
    const {user} = route.params; //burada da aşağıda çağırıken kötü görünmemesi adına parçalayarak ilk erişimi sağladık
    
    return (
        <SafeAreaProvider>
            <SafeAreaView>
                <Text style= {styles.message}>Kayıt tamamlandı</Text>
                <Text style = {styles.label}>Üye Adı: {user.userName}</Text>
                <Text style = {styles.label}>Üye Soyadı: {user.userSurname}</Text>
                <Text style = {styles.label}>Üye Yaşı: {user.userAge}</Text>
                <Text style = {styles.label}>Üye Mail: {user.userMail}</Text>
                <Text style = {styles.label}>Üye memleketi: {user.userHomeTown}</Text>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

const styles = StyleSheet.create({
    label: {
        fontWeight: 'bold',
        fontSize: 20,
        margin: 5,
    },

    message: {
        fontWeight: 'bold',
        fontSize: 50,
        textAlign: 'center',
    },
})

