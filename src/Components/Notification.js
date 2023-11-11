import React from 'react';
import {View ,Text, StyleSheet ,TouchableOpacity,Image} from 'react-native';

import { useNavigation } from '@react-navigation/native';



const Notification = ({item}) => {

    const history = useNavigation();

return <TouchableOpacity style={style.container}>
          
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
        width:320,
        height:200,
        borderRadius:5,
      
    },

    container: {

      width:330,
      marginHorizontal:5

    },

    detail_container : {

        marginTop:5,
        position:'absolute',
        bottom:0,
        backgroundColor:'rgba(0,0,0,0.5)',
        padding:10,
        width:320

    },

    title: {

        textAlign:"center",
        color:'white',
        fontWeight:'500',
        fontSize:14,

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

export default Notification;