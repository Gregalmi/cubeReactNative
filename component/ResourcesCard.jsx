import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View, Button, ImageBackground } from 'react-native'

const ResourcesCard = ({navigation,  resource }) => {
// const ResourcesCard = ({ resource }) => {


    // const onPress = () => {
    //     //permet ajouter une vue dans la stack navigation et de l'afficher
    //     // utiliser navigation.push pour des view sans paramètre 
    //     // ou navigation.navigate si vous avez besoin d'envoyer des paramètres a la vue
    //     navigation.navigate('Resource', { resource: resource })
    // }
    // console.log('resource', resource)
    // const navigation = useNavigation()
    const onPress = () => {
      //permet ajouter une vue dans la stack navigation et de l'afficher
      // utiliser navigation.push pour des view sans paramètre 
      // ou navigation.navigate si vous avez besoin d'envoyer des paramètres a la vue
    //   navigation.navigate('Home')
    //   navigation.pop();
      navigation.navigate('Resource', { resource: resource })

  }



    return (
        <TouchableOpacity onPress={onPress}>
            <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: 10 }}>

                <View style={styles.topLeft}>

                    {resource.type &&
                        <View >
                            {resource.type.createdAt &&
                                <Text >{resource.type.createdAt}</Text>
                            }
                            {resource.type.label &&
                                <Text >{resource.type.label}</Text>
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

                <View style={styles.topRight}>
                    {resource.author &&
                        <>
                            {/* <Button> */}


                            <View style={styles.authorName}>

                                <Text >{resource.author.firstname} </Text>
                            </View>
                            {/* </Button> */}

                        </>
                    }

                    
                </View>

                <View>
                    <Image source={{ uri: resource.imageUrl }} style={{ width: 250, height: 100 }} />
                </View>



                <View style={styles.titleArticle}>
                    <Text >{resource.title} </Text>
                </View>

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


            <View style={styles.lineStyle} />

        </TouchableOpacity>
    )
}



const styles = StyleSheet.create({

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

});


export default ResourcesCard