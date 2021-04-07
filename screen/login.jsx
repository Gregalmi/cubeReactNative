import React, { useEffect, useState } from 'react'
import { Button,ImageBackground, TextInput,TouchableOpacity, StyleSheet, Text, View, Image } from 'react-native'
import {loginAuth, KEY_TOKEN, logoutAuth} from '../services/authService'
import AsyncStorage from '@react-native-async-storage/async-storage';


const login = ({navigation, route}) => {
    const [email, setEmail] = useState('')
    const [pwd, setPwd] = useState('')
    const [token, setToken] = useState(null)

    // useEffect(() => {
    //     //console.log(route.params.email)
    //     route.params.email ? setEmail(route.params.email) : null
    // }, [])

     const handlePress = () => {
        {console.log("coucou")}
     

        if(email && pwd && email.length > 5 && pwd.length > 3) {
            const data = {
                username: email.toLowerCase(),
                password: pwd
            }
            loginAuth(data).then((response) =>{
                AsyncStorage.getItem(KEY_TOKEN).then((data) => {
                    console.log(data)
                    setToken(data)
                    //navigation.reset({
                     //   index: 0,
                     //   routes: [{ name: 'MyRessources' }],
                     // })
                     navigation.navigate('MyRessources')
                })

            })
        }
    }

    const  displayToken = () => {
        if(!token) {
            AsyncStorage.getItem(KEY_TOKEN)
            .then((storedToken) => setToken(storedToken))
        }
        
        return token ? ( <Text>{token}</Text> ) : null;
    }

    const logout = () => {
        logoutAuth()
        setToken(null)
    }

    return (
        <ImageBackground  style={{width: '100%', height: '100%'}} source = {require("../assets/background-vertical.png")}>
                    {console.log('RENDER', email, pwd, token)}
                {/* {displayToken()} */}
            <View style={styles.container}>
                
                <Text style={styles.titre}>Bienvenue</Text>
                
                <View style={styles.inputView}>
                    <TextInput 
                        onChangeText={setEmail}
                        value={email}
                        placeholder="Email"
                        placeholderTextColor="#003f5c"
                        keyboardType='email-address'
                        textContentType= 'emailAddress'
                        style={styles.TextInput}
                        onSubmitEditing={handlePress}
                    />
                </View>
                <View style={styles.inputView}>
                    <TextInput 
                        onChangeText={setPwd}
                        value={pwd}
                        placeholder="Password"
                        placeholderTextColor="#003f5c"
                        secureTextEntry={true}
                        textContentType= 'password'
                        style={styles.TextInput}
                        onSubmitEditing={handlePress}
                    />
                </View>
                
                    <TouchableOpacity onPress={()=>{handlePress}} style={styles.loginBtn}>
                        <Text style={styles.loginText}>Se Connecter</Text>
                    </TouchableOpacity>
                {/*}
                    <TouchableOpacity onPress={()=>{handlePress}} style={styles.loginBtn}>
                        <Text style={styles.loginText}>Se Déconnecter</Text>
    </TouchableOpacity>*/}
            </View>
        </ImageBackground>
        
    )
}

export default login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
      },
      image: {
        flex: 1
      },
      inputView: {
        backgroundColor: "#FF9F1C",
        borderRadius: 30,
        width: "70%",
        height: 45,
        marginBottom: 20,
        alignItems: "center",
        opacity: 0.8
      },
      titre:{
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 20,
        color: '#fff'
      },
     
      TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
      },
     
      forgot_button: {
        height: 30,
        marginBottom: 30,
      },
     
      loginBtn: {
        width: "80%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "#FFA831",
      },

})