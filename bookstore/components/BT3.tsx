import React from 'react'
import { View,Text,StyleSheet } from 'react-native'

export default function BT3() {
  return (
 <View style={styles.container}>
    <Text style={styles.chips}>Văn học</Text>
    <Text style={styles.chips}>Kinh tế</Text>
    <Text style={styles.chips}>Thiếu nhi</Text>
    <Text style={styles.chips}>Truyện tranh</Text>
    <Text style={styles.chips}>Ngoại ngữ</Text>
    <Text style={styles.chips}>Lịch sử</Text>

 </View>
  )
}
const  styles  = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap:8,
        flex:1,
        width:'100%',
    },
    chips: {
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 20,
        backgroundColor: '#1E1B4B',
        color: '#fff',
      
    }
})

