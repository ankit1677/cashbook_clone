import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import Header from '../components/Home/Header'
import Data from '../components/Home/Data'
import fin_data from '../Data/fin_data'

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.main}>
      <Header/>
      <Data data={fin_data}/>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    main: {
        flex: 1,
        width: "100%",
    },
})