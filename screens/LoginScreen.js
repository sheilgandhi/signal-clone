import React, { useEffect, useState } from 'react'
import { KeyboardAvoidingView } from 'react-native';
import { StyleSheet, Text, View } from 'react-native'
import { Button, Input, Image } from "react-native-elements"
import { auth } from "../firebase";

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
            if(authUser){
                navigation.replace("Home")
            }
        });

        return unsubscribe;
    }, [])

    const signIn = () => {

    }

    return (
        // Divs are Views
        // Keyboard avoiding for when keyboard needs to open up
        <KeyboardAvoidingView behavior="padding" enabled style={styles.container}>
            <Image 
                style={{ width: 200, height: 200 }}
                source={{
                    uri: "https://blog.mozilla.org/internetcitizen/files/2018/08/signal-logo.png",
            }} />
            <View style={styles.inputContainer}>
                <Input 
                    placeholder="Email" 
                    autoFocus 
                    type="email"
                    value={email}
                    onChangeText={text => setEmail(text)} 
                />
                <Input 
                    placeholder="Password" 
                    secureTextEntry
                    type="password"
                    value={password}
                    onChangeText={text => setPassword(text)} 
                />
            </View>

            <Button containerStyle={styles.button} onPress={signIn} title='Login' />
            <Button containerStyle={styles.button} onPress={() => navigation.navigate('Register')} title='Register' type='outline' />
            <View style={{ height: 100}} /> 
            {/* Extra padding from keyboard */}
        </KeyboardAvoidingView>
    )
}

export default LoginScreen

// Stylesheets instead of css
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        backgroundColor: "white"
    },
    inputContainer: {
        width: 300,
    },
    button: {
        width: 200,
        marginTop: 10,
    }
})
