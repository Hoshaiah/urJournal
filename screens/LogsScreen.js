import { TouchableOpacity, StyleSheet, Text, View, KeyboardAvoidingView, TextInput } from 'react-native';
import { useState } from 'react'
// import { auth } from '../firebase';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth';
import { app } from '../App.js'

function LogsScreen () {
    const [email, setEmail]= useState('')
    const [password, setPassword]= useState('')
    const auth = getAuth(app);
    const [user, setUser] = useState(null)

    const handleSignUp = () => {
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            setUser(userCredential.user);
            console.log(`sign up successful with ${user.email}, user logged in`)
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage)
        });
    }
    const handleLogin = () => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            setUser(userCredential.user);
            console.log(`log in successful with ${user.email}`)
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(error.message)
        });
    }
    const logUserCredentials = () => {
        console.log(user)
    }

    return (
        <KeyboardAvoidingView style={styles.container}>
            <Text>Logs Screen</Text>

            <View>
                <TextInput value={email} onChangeText={setEmail} placeholder="Email"/>
                <TextInput value={password} onChangeText={setPassword} placeholder="Password" secureTextEntry/>
            </View>

            <View>
                <TouchableOpacity 
                    style={styles.button}
                    onPress={handleLogin}>
                    <Text>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.button}
                    onPress={handleSignUp}>
                    <Text>Signup</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.button}
                    onPress={logUserCredentials}>
                    <Text>LogUserCredentials</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 36,
        marginTop: 20,
    },

    button: {

    }
})

export default LogsScreen;