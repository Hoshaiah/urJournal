import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

function HomeScreen (props) {
    const { navigation } = props
    return(
        <View style={styles.container}>
            <Text>Open up App.js to start working on ur journal!</Text>
            <StatusBar style="auto" />
            <TouchableOpacity onPress={()=> navigation.navigate('Logs')}>
                <Text>Go to logs</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
});

export default HomeScreen;