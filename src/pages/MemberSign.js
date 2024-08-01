import React, { useState } from "react";
import {View, Text, Alert} from 'react-native'
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import Input from '../components/Input/index'
import Button from "../components/Button";

export default function MemberSign({navigation}){
    const [userName, setUserName] = useState(null);
    const [userSurname, setUserSurname] = useState(null);
    const [userAge, setUserAge] = useState(null);
    const [userMail, setUserMail] = useState(null);
    const [userHomeTown, setUserHomeTown] = useState(null);

    /* 
        const user = {
           userName: userName,
           userSurname: userSurname,
           userAge: userAge,
           userMail: userMail,
           userHomeTown: userHomeTown
        } 
        yerine aşağıdaki gibi yaparız
        json formatında
    */

    function handleSubmit() {
        if(!userName || !userSurname || !userAge || !userMail || !userHomeTown ){
            Alert.alert('Kebap Fitness Salonu', 'Bilgiler boş bırakılamaz!');
            return; //üye bilgilerinin sergilendiği sayfaya gitmiyor
        }

        const user = { 
           userName,
           userSurname,
           userAge,
           userMail,
           userHomeTown
        }

        navigation.navigate('MemberPageScreen', {user}); //{user} diyerek objeyi de yolladık
    }

    /* normalde onChangeText = {text => setUserName(text)} yapmamız gerekirken react native'in sağladığı kolaylıkla böyle yazmamız yeterli */

    return (
        <SafeAreaProvider>
            <SafeAreaView>
                <Input placeholder = "Üyenin ismini giriniz..." label = "Üye Adı" onChangeText = {setUserName}/> 
                <Input placeholder = "Üyenin soyismini giriniz..." label = "Üye soyadı" onChangeText = {setUserSurname}/>
                <Input placeholder = "Üyenin yaşını giriniz..." label = "Üye yaşı" onChangeText={setUserAge}/>
                <Input placeholder = "Üyenin mailini giriniz..." label = "Üye e-mail" onChangeText={setUserMail}/>
                <Input placeholder = "Üyenin memleketini giriniz..." label = "Üye memleketi" onChangeText={setUserHomeTown}/>
                <Button text = "Kaydı Tamamla" onPress = {handleSubmit} />
            </SafeAreaView>
        </SafeAreaProvider>
    )
}