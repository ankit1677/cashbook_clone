import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'





const Data = ({data}) => {
  return (
    <ScrollView>
        {data.map(item => {
            return (
                <View style={styles.item} key={item.id}>
                    <Text style={styles.text}>{item.description}</Text>
                    <Text style={styles.text}>{item.amount}</Text>
                    <Text style={styles.text}>{item.date}</Text>
                    <Text style={styles.text}>{item.type}</Text>
                    <Text style={[styles.text,{ color:"red"}]}>{item.tag}</Text>
                    
                </View>
                
            )
        })}
      
    </ScrollView>
  )
}

export default Data

const styles = StyleSheet.create({
    item: {
        borderBottomColor:"grey",
        borderBottomWidth:1,
    },
    text:{
        fontSize:20,
        color:"green",
        fontWeight:"bold",
        padding:10,
    }
})