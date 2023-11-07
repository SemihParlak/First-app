import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';

export default function HomeScreens({ navigation }) {
  return (
    <View style={styles.viewmenu}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Kurslarım')} >
          <Text style={styles.buttonText}>Kurslarım</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('KursBilgilerim')} >
          <Text style={styles.buttonText}>Kurs Bilgilerim</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Sayac')} >
          <Text style={styles.buttonText}>Sayac Uygulaması</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Kutu')} >
          <Text style={styles.buttonText}>Renkli Kutu</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('RenkDegistir')} >
          <Text style={styles.buttonText}>Renk Değiştir</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Şifre Ekranı')} >
          <Text style={styles.buttonText}>Şifre Ekranı</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Toplama Çıkartma')} >
          <Text style={styles.buttonText}>Toplama Çıkartma</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Tasarım Ekranı')} >
          <Text style={styles.buttonText}>Tasarım Ekranı</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Loading Ekranı')} >
          <Text style={styles.buttonText}>Loading Ekranı</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  viewmenu: {
    margin: 0,
    padding: 0,
    width: 350,
    position: 'absolute',
    right: 50,
  },
  buttonContainer: {
    width: '60%',
    marginTop: 40,
    flex:1,
    justifyContent:'flex-start',
    position:'relative',
    left:70,
    bottom:10,
    width:280,
  },
  button: {
    backgroundColor: '#0782f9',
    padding: 15,
    alignItems: 'center',
    borderRadius: 30,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    margin:6,
  },
})



// flex: 1, alignItems: 'center', justifyContent: 'center', flexGrow: 10,


{/* <Button
title="Kurs Bilgilerim"
onPress={() => navigation.navigate('KursBilgilerim')}
/>
<Button
title="Sayaç Uygulaması"
onPress={() => navigation.navigate('Sayac')}
/>
<Button
title="Renkli Kutu Ekle"
onPress={() => navigation.navigate('Kutu')}
/>
<Button
title="Renk Değiştir"
onPress={() => navigation.navigate('Renk Değiştir')}
/>
<Button
title="Şifre Ekranı"
onPress={() => navigation.navigate('Şifre Ekranı')}
/>
<Button
title="Toplama Çıkartma"
onPress={() => navigation.navigate('Toplama Çıkartma')}
/>
<Button
title="Tasarım Ekranı"
onPress={() => navigation.navigate('Tasarım Ekranı')}
/>
<Button
title="Loading Ekranı"
onPress={() => navigation.navigate('Loading Ekranı')}
/> */}