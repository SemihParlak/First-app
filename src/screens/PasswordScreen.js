import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

export default function PasswordScreen() {
    const [password, setPassword] = useState('')
    return (
        <View style={styles.main}>
            <Text style={styles.text}>Şifrenizi giriniz:</Text>
            <TextInput style={styles.input} autoCapitalize='none' value={password} onChangeText={(newValue) => setPassword(newValue)} />
            {password.length < 6 ? (
                <Text style={{color: 'red',}}>Şifre en az 6 karakter olmalıdır</Text>
            ) : null}
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        margin: 10,
    },
    input: {
        backgroundColor:'#dcdcdc',
        borderBlockColor: 'black',
        borderWidth: 1,
        padding: 10,
        borderRadius: 12,
    },
    text:{
        fontSize: 18,

    }
});