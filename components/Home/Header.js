import { StyleSheet,View, Text } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

const Header = () => {
  return (
    <View style={styles.container}>
        
        <View style={styles.ledger}>
            
            <Text style={styles.text}>Kca Ledger</Text>
            <TouchableOpacity>
                <MaterialCommunityIcons name="menu-down" size={24} color="black" />
            </TouchableOpacity>
            
        </View>
        
        <TouchableOpacity>
            <MaterialCommunityIcons name="menu" size={24} color="black" />
        </TouchableOpacity>
        
        

    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container: {
        flexDirection:"row",
        backgroundColor:"#6666ff",
        height:50,
        width:"100%",
        justifyContent:"space-between",
        alignItems:"center",
        paddingHorizontal:10,
        
    },
    text: {
        fontSize:20,
        color:"#fff",
        fontWeight:"bold",

    },
    ledger: {
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",

    },
})