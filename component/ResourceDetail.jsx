import React from 'react'


import { Image, StyleSheet, Text, TouchableOpacity, View, Button, ImageBackground } from 'react-native'
import { useNavigation } from '@react-navigation/native';

// export default function ResourceDetail({ navigation, route }) {
const ResourceDetail = ({  navigation, route }) => {

    const resource = route.params.resource;
    // const handlePress = (event) => {
    //     //permet de revenir sur la précédente vue de la stack navigation
    //     navigation.pop();
    // }
    // const navigation = useNavigation()
    const handlePress = () => {
      //permet ajouter une vue dans la stack navigation et de l'afficher
      // utiliser navigation.push pour des view sans paramètre 
      // ou navigation.navigate si vous avez besoin d'envoyer des paramètres a la vue
    //   navigation.navigate('Home')
      navigation.pop();

  }





    return (
        <View style={styles.main}>

            <View style={styles.topLeft}>

                {resource.type &&
                    <View >
                        {resource.type.createdAt &&
                            <Text >{resource.type.createdAt}</Text>
                        }
                        {resource.type.label &&
                            <Text style={styles.label}>{resource.type.label}</Text>
                        }
                    </View>
                }

                {resource.category &&
                    <View style={styles.categoryLabel}>
                        {resource.category.label &&
                            <Text >{resource.category.label}</Text>
                        }
                    </View>
                }
            </View>

            <Image source={{ uri: resource.imageUrl }} style={styles.img}></Image>

            <Text style={styles.titleArticle}>{resource.title}</Text>



            {resource.content && resource.content.length > 0 &&
                <View>
                    {/* <Text >{resource.content.map((cont) => cont.textValue)}</Text> */}
                    {resource.content.map((cont) => [
                        <View>
                            {cont.attribute && cont.attribute.label && <Text styles={styles.attributeLabel}> {cont.attribute.label}  :  </Text>}
                            <Text styles={styles.textValue}> {cont.textValue}</Text>
                            {/* <View style={styles.contentDivider}> </View> */}
                        </View>
                    ])}

                </View>

            }

            <TouchableOpacity
                onPress={handlePress} >
                <View
                    style={styles.btn}
                    title="Retour">
                    Retour
                </View>
            </TouchableOpacity>


        </View>
    )
}

const styles = StyleSheet.create({
    main: { flex: 1, flexDirection: 'column', alignItems: 'center', textAlign: 'center' },
    contents: {

    },
    attributeLabel: {
        fontSize: 11,
        fontWeight: 'bold',
        textAlign: 'left'

    },

    textValue: {
        fontSize: 13,
        padding: 5,
    },

    topLeft: {
        position: "absolute",
        top: 10,
        left: 15,
        textAlign: 'left'
    },
    favoriteButton: {
        position: "absolute",
        top: 10,
        right: 15,
        textAlign: 'right'
    },

    categoryLabel: {
        top: 10,
        left: 0,
        textAlign: 'left'
    },
    
    titleArticle: {
        fontSize: 'larger',
        marginTop: 13,
    },

    contentDivider: {
        borderWidth: 0.1,
        borderColor: 'black',
        margin: 1,
    },
    txt: { fontSize: 30, marginTop: 20 },
    txt_md: { fontSize: 20, marginTop: 5 },
    img: { width: 150, height: 150, marginTop: 20 },
    pan: { borderWidth: 1, borderRadius: 30, borderColor: 'gray', padding: 10, marginTop: 5, marginBottom: 5, flex: 0 },
    btn: {
        borderWidth: 1, borderRadius: 20,
        borderColor: 'gray',
        padding: 10, marginTop: 15, marginBottom: 5,
        flex: 0
    },
})



export default ResourceDetail
