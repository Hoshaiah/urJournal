import { TouchableOpacity, StyleSheet, Text, View, KeyboardAvoidingView, TextInput } from 'react-native';
import { useState, useRef } from 'react'
import { auth } from '../firebase';

function LogsScreen () {
    const [email, setEmail]= useState('')
    const [password, setPassword]= useState('')
    
    const handleSignUp = () => {
        auth
        .createUserWithEmailAndPassword(email, password)
        .then(userCredentials => {
            const user = userCredentials.user;
            console.log(user.email)
        }).catch(error => {
            alert(error.message)
            console.log(error)
        })
    }
    return (
        <KeyboardAvoidingView>
            <Text>Logs Screen</Text>

            <View>
                <TextInput value={email} onChangeText={setEmail} placeholder="Email"/>
                <TextInput value={password} onChangeText={setPassword} placeholder="Password" secureTextEntry/>
            </View>

            <View>
                <TouchableOpacity 
                    style={styles.button}
                    onPress={()=> {console.log(email)}}>
                    <Text>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.button}
                    onPress={handleSignUp}>
                    <Text>Signup</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {

    },

    button: {

    }
})

export default LogsScreen;