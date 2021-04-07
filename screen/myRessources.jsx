import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, FlatList, StyleSheet, Text, View,Image, TouchableOpacity,ScrollView } from 'react-native'
import { KEY_TOKEN, logoutAuth } from '../services/authService'
import ResourcesCard from '../component/ResourcesCard'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

import {findRessources} from '../services/myResourcesService'




const myRessources = ({navigation, route, token}) => {

    const [ resources, setResources ] = useState([])
    
    // React.useEffect(() => {
    //     const init = async () => {
    //       let res = await ResourceRepository.getResourceList();
    //       console.log(res);
    //       const newResource = res.data["hydra:member"];
    //       setResources(newResource);
    //     }
    //     init()
    
    //   }, [])
      useEffect(() => {
		const fetchData = async () => {
			const res = await findRessources()
			setResources(res['hydra:member'])			
		}

		fetchData()
	} ,[])
    console.log(resources)

    //findRessources().then((response) =>{
    //console.log(response)
    //setResources(response['hydra:member'])

    //console.log(resources)
    
    //})

    const onPress = () => {
       console.log(resources)
        //navigation.navigate('Resource', { resource: resource })
    }
   token = AsyncStorage.getItem(KEY_TOKEN)
   //const navigation = useNavigation();

    const logout = () => {
      console.log("adios")
      console.log(token)
      logoutAuth()
      token = null
      console.log(token)
      navigation.navigate('Login')
  }

    return (
        <View style={styles.container}>
        {/* {console.log('RENDER', films)} */}
            <Text>
                Mes ressources
            </Text>

            <ScrollView>

                {resources.length === 0
                ? <Text > Aucune resources disponibles </Text>
                : <FlatList
                    data={resources}
                    keyExtractor={item => item.nom}
                    renderItem={({ item }) => <ResourcesCard resource={item} navigation={navigation}

                    />}
                />
                }

            </ScrollView>
           

                <View style={styles.espace}>
                    <TouchableOpacity onPress={logout} style={styles.loginBtn}>
                        <Text style={styles.loginText}>Se Déconnecter</Text>
                    </TouchableOpacity>
                </View>
        </View>

    )
}
 
export default myRessources

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        flex: 1,
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
    },
    espace: {
        margin: 10,
    },
    topLeft: {
        position: "absolute",
        top: 10,
        // right:15,
        left: 15,
        textAlign: 'left'

    },
    topRight: {
        position: "absolute",
        top: 10,
        right: 15,
    },

    categoryLabel: {
        top: 10,
        left: 0,
    },

    authorName: {
        fontSize: 'smaller'
    },

    titleArticle: {
        fontSize: 'smaller'
    },

    lineStyle: {
        borderWidth: 0.5,
        borderColor: 'black',
        margin: 10,
    },
    to: {
        backgroundColor: 'lightgray',
        marginBottom: 5,
    },
    loginBtn: {
        width: "100%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "#FFA831",
      },
})
