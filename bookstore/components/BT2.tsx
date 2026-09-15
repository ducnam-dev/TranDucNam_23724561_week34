import React from 'react'
import { View,StyleSheet,Text } from 'react-native'
export default function BT2() {
  return (
    <View style={style.headerCard}>
        <View style={style.imgCard}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8LG8RYwyTQ-uJkR_0Z2Kqqpmqffxh5W4sGZYMmSM8mhbKT1HaJ0te7sLx&s=10" alt="#" />
        </View>
        <View style={style.inf}>
            <Text>Tên sách</Text>
            <Text>Tác giả</Text>
            <Text style={style.price}>Giá</Text>
        </View>
    </View>
  )
}
const style =   StyleSheet.create({
    headerCard:{
        flexDirection: 'row',
        alignItems:'flex-start',
        padding: 10,
       
    },
    imgCard:{
        width: 100,
        height: 100,
        borderRadius: 10,
    },
    inf: {
        flex:1,
        flexDirection: 'column',
        alignItems:'flex-start',
        marginLeft: 30,
    },
    price:{
        justifyContent:'space-between',

    }

})
