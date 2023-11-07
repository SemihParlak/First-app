import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function Informatinons({ title, imageSource, desc }) {
    return (
        <View>
            <Image style={styles.img} source={imageSource} />
            <View style={styles.descTitle}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.title.Desc}>{desc}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    img: {
        width: '100%',
        height: 300,
    },
    descTitle: {
        alignItems: 'center',
        paddingVertical: 20,
    },
    title: {
        fontSize: 30,
    },
    titleDesc: {
        fontSize: 20,
    },
})