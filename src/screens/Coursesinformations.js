import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Informatinons from '../../components/Informatinons';


export default function Coursesinformations() {
  return (
    <ScrollView>
      <Informatinons title='Angular Eğitimi'
      imageSource={require('../../assets/angular.jpg')}
      desc='Kapsamlı Angular Eğitimi'
      />
      <Informatinons title='Boostrap 5 Eğitmi'
      imageSource={require('../../assets/bootstrap5.png')}
      desc='Kapsamlı Boostrap 5 Eğitimi'
      />
      <Informatinons title='C Programlama Eğitimi'
      imageSource={require('../../assets/c.png')}
      desc='Kapsamlı C Programlama Eğtimi'
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({})