import { auth } from "../firebase";
import React, { useLayoutEffect, useState } from 'react'
import { StatusBar } from 'react-native'
import { KeyboardAvoidingView } from 'react-native'
import { StyleSheet, View } from 'react-native'
import { Button, Input, Text } from "react-native-elements"

const RegisterScreen = ({ navigation }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    //navigates before paint
    useLayoutEffect(() => {
        navigation.setOptions({
            headerBackTitle: "Back", // visible next to back button

        })
    }, [navigation])

    const register = () => {
        auth.createUserWithEmailAndPassword(email, password)
        .then(authUser => {
            authUser.user.update({
                displayName: name,
                photoURL: imageUrl || "https://cencup.com/wp-content/uploads/2019/07/avatar-placeholder.png",
            })
        })
        .catch((error) => alert(error.message));
    }

    return (
        <KeyboardAvoidingView behavior='padding' style={styles.container}>
            <StatusBar style="light" />
            <Text h3 style={{ marginBottom: 50 }}>
                Create a Signal account
            </Text>

            <View style={styles.inputContainer}>
                <Input placeholder="Full Name" autofocus type='text' value={name} onChangeText={(text) => setName(text)}/>
                <Input placeholder="Email" type='email' value={email} onChangeText={(text) => setEmail(text)}/>
                <Input placeholder="Password" secureTextEntry type='password' value={password} onChangeText={(text) => setPassword(text)}/>
                <Input placeholder="Image URL (optional)" type='text' value={imageUrl} onChangeText={(text) => setImageUrl(text)} onSubmitEditing={register}/>
            </View>

            <Button containerStyle={styles.button} raised onPress={register} title='Register' />

            <View style={{ height: 100}} /> 
            {/* Extra padding from keyboard */}
        </KeyboardAvoidingView>
    )
}

export default RegisterScreen

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
    },
})
