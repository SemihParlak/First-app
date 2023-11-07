import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function DesignScreen() {
    return (
        <View style={{ width: '100%', height: '100%', }}>
            <View style={{ width: '25%', height: '25%', backgroundColor: 'red' }} />
            <View style={{
                width: '25%',
                height: '25%',
                backgroundColor: 'green',
                position: 'absolute',
                right: 0,
                top: 0,
            }} />
            <View style={{
                width: '25%',
                height: '25%',
                backgroundColor: 'green',
                position: 'absolute',
                bottom: 0,
                left: 0,
            }} />
            <View style={{
                width: '25%',
                height: '25%',
                backgroundColor: 'red',
                position: 'absolute',
                bottom: 0,
                right: 0,
            }} />
        </View>
    )
}

const styles = StyleSheet.create({

})















{/* <Text style={styles.mainTextOne}>1</Text> */ }
{/* <Text style={styles.mainTextTwo}>2</Text>
      <Text style={styles.mainTextThree  }>3</Text> */}



       // mainView: {
    //     borderWidth: 1,
    //     borderColor: 'red',
    //     margin:20,
    //     borderRadius: 15,
    //     alignItems:'center',
    //     flexDirection: 'row',
    //     justifyContent: 'center',
    //     height: 400,
    // },
    // mainTextOne:{
    //     borderWidth: 1,
    //     borderColor: 'black',
    //     margin: 20,
    //     marginHorizontal: 30,
    //     marginVertical: 30,
    //     padding: 10,
    //     paddingHorizontal: 10,
    //     paddingVertical: 20,
    //     borderRadius: 8,
    //     flex:4,
    //     alignSelf: 'center',
    //     position: 'absolute',
    //     left: 20,
    //     bottom: 20,
    //     left: 0,
    //     bottom: 0,
    //     right: 0,
    //     top: 0,
    // },

/*
mainTextTwo:{
  borderWidth: 1,
  borderColor: 'black',
  margin: 20,
  // marginHorizontal: 30,
  // marginVertical: 30,
  padding: 10,
  // paddingHorizontal: 10,
  // paddingVertical: 20,
  borderRadius: 8,
  // flex: 3,
  // top: 10,
  // left: 30,
  // right: 20,
  // bottom: 20,
},
mainTextThree:{
  borderWidth: 1,
  borderColor: 'black',
  margin: 20,
  // marginHorizontal: 30,
  // marginVertical: 30,
  padding: 10,
  // paddingHorizontal: 10,
  // paddingVertical: 20,
  borderRadius: 8,
  // flex: 1,
},
*/