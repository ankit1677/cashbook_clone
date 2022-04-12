import { StyleSheet, Text, View,SafeAreaView,TextInput,Button } from 'react-native'
import React from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'


const LoginScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.main}>
        <Text style={{bottom:100}}>LoginScreen</Text>
        <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={values => {
                console.log(values)
                navigation.navigate('Home')
            }}
            validationSchema={Yup.object().shape({
                email: Yup.string()
                    .email("Invalid email address")
                    .required("Email is required"),
                password: Yup.string()
                    .min(6, "Password must be at least 6 characters")
                    .required("Password is required")
            })}
        >
                {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                    <View style={styles.inner}>
                        <TextInput
                            placeholder='Email'
                            placeholderTextColor='#fff'
                            style={[styles.input, {borderColor: touched.email ? (errors.email ? 'red' : 'green') : null}]}
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                            value={values.email}
                        />
                        {errors.email && touched.email && <Text style={{ color: 'red' }}>{errors.email}</Text>}
                        <TextInput
                            placeholder='Password'
                            placeholderTextColor='#fff'
                            style={[styles.input, {borderColor: touched.email ? (errors.email ? 'red' : 'green') : null}]}
                            onChangeText={handleChange('password')}
                            onBlur={handleBlur('password')}
                            value={values.password}
                        />
                        {errors.password && touched.password && <Text style={{ color: 'red' }}>{errors.password}</Text>}
                        <Button title="Submit" onPress={handleSubmit} />
                        </View>
                    )}
        </Formik>
    </SafeAreaView>
                    )}
       
export default LoginScreen

const styles = StyleSheet.create({
    

    main: {
        flex: 1,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor :"grey",
    },
    inner: {
        width: "100%",
        justifyContent: "center",
        padding: 20,
    },
    input: {
        borderColor: 'black',
        borderWidth: 1,   
        marginBottom: 10,
        height: 40, 
        
        

    },
})