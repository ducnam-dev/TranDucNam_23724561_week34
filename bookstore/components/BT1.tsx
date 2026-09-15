import React from 'react'
import { View,StyleSheet,Text } from 'react-native'

export default function BT1() {
  return (
  <View style={styles.header}>
    Logo
    <View style={styles.leftcontainer}>
        <Text style={styles.logoText}>Bookstore </Text>

    </View>
    <View style={styles.rightcontainer}>
    <Text style={styles.iconText}>Tim</Text>
    <Text style={styles.iconText}>Gio hang</Text>
    </View>
  </View>
  )
}
const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        height: 60,
        backgroundColor: '#1E1B4B',
color: '#fff',
        
    },
    leftcontainer: {
        justifyContent:"center",
        color: '#fff',
    },
    rightcontainer: {
        flexDirection: 'row',
        color: '#fff',
    },
    logoText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        margin: 50
   
    },
    iconText: {
        color: '#fff',
        margin:15,
    }




});
