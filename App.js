  
import React, { useState } from 'react';
import { Button, StyleSheet, View} from 'react-native';
//import Accueil from './screen/accueil';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './screen/login';
import { initialisation, isAdmin, isAuth, KEY_TOKEN, logoutAuth } from './services/authService';
import MyRessources from './screen/myRessources';

import Ressource from './component/ResourceDetail';

import UserProfil from './screen/userProfil';
import AsyncStorage from '@react-native-async-storage/async-storage';
//import Register from './screen/register';

export default function App() {
  initialisation()
  const Stack = createStackNavigator()


  return (
    <NavigationContainer>
      <Stack.Navigator>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen
                  name="MyRessources" 
                  component={MyRessources} 
                  options={({ navigation, route }) => ({
                    headerRight: () => (
                        <View style={{ display: "inline-flex" }}>
                            <Button
                                style={styles.button}
                                title="Profil"
                                onPress={() => navigation.navigate('UserProfil')}
                            />
                        </View>

                    )
                  })}
                 />
                <Stack.Screen name="Resource">
                    {props => <Ressource {...props} />}
                </Stack.Screen>
                <Stack.Screen name="UserProfil" component={UserProfil} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
