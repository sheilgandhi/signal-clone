import React, { useState } from 'react'
import { KeyboardAvoidingView } from 'react-native';
import { StyleSheet, Text, View } from 'react-native'
import { Button, Input, Image } from "react-native-elements"

const LoginScreen = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        // Divs are Views
        <KeyboardAvoidingView behavior="padding" enabled style={styles.container}>
            <Image 
                style={{ width: 200, height: 200 }}
                source={{
                    uri: "https://blog.mozilla.org/internetcitizen/files/2018/08/signal-logo.png",
            }} />
            <View>
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

            <Button containerStyle={styles.button} title='Login' />
            <Button containerStyle={styles.button} title='Register' type='outline' />
        </KeyboardAvoidingView>
    )
}

export default LoginScreen

// Stylesheets instead of css
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center"
    },
    button: {
        width: 200,
        marginTop: 10
    }
})
