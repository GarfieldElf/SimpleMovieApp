import React from 'react';
import {View ,Text, StyleSheet ,TouchableOpacity,Image} from 'react-native';

import { useNavigation } from '@react-navigation/native';

const Film = ({item}) => {

    const history = useNavigation();

return <TouchableOpacity onPress={() => history.navigate('view', {id: item.id})} style={style.container}>
          
          <View style={style.detail_container}>
            <Text style={style.title}>{item.category}</Text>
         </View>

         <View style={style.image_container}>

           <View style={style.star_container}>
              <Text style={style.star}>{item.star}</Text>
            </View>
         
            <Image source={{uri: item.image}} style={style.image}></Image>

         </View>

         
         <View style={style.detail_container}>
            <Text style={style.title}>{item.name}</Text>
         </View>

</TouchableOpacity>


}

const style = StyleSheet.create( {

    image : {

        width: '100%',
        height:200,
        borderRadius:5,
      
    },

    container: {

        flex:1,
        alignItems:'center',
        marginVertical:5,
        marginHorizontal: 10,

    },

    detail_container : {

        marginTop:5,

    },

    title: {

        textAlign:"center",
        color:'black',
        fontWeight:'500',
        fontSize:15,

    },

    image_container: {

        width:'100%',
        height:200

    },

    star_container: {

        position:'absolute',
        right:5,
        top:5,
        zIndex:9999,
        backgroundColor:'#EC712B',
        width:30,
        height:30,
        borderRadius:100,
        justifyContent:'center',
        alignItems:'center'

    },

    star: {

        color:"white",
        fontWeight:'700',
        textAlign:'center',


    }


})

export default Film;