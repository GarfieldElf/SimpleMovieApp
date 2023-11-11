import React, { useEffect } from 'react';
import {View ,Text, StyleSheet ,FlatList,ScrollView,SafeAreaView} from 'react-native';
import Data from '../Data/Movies.json';
import Icon from 'react-native-vector-icons/dist/FontAwesome5';

import Film from '../Components/Film';
import Notification from '../Components/Notification'
import NotificationData from '../Data/Notification.json';

const Index = () => {

    useEffect(() => {

        console.log(Data);

    },[]);


    const renderItem = ({item}) => {

        return <Film item={item}></Film>

    }

    const  renderNotification = ({item}) => {

        return <Notification item={item}></Notification>
    }

    return(

        <ScrollView flex={1}>

            <View style={style.header}>
                 <Text style={style.header_title}>MOVIES</Text>
                 <Icon name="search" size={20} color="black"></Icon>
            </View>

           <View style={style.body}>

             <View style={{paddingHorizontal:20,marginBottom:10}}>
                <FlatList data={NotificationData} renderItem={renderNotification} horizontal showsHorizontalScrollIndicator={false}></FlatList>
             </View>
              
             <View style={{paddingHorizontal:20}}>
                 <Text style={style.body_title}>FILMS</Text>
             </View>

          </View>
             
           <View style={{flex:1,paddingHorizontal:10}}>
               <FlatList scrollEnabled={false} numColumns={2} data={Data} renderItem={renderItem}> </FlatList>
          </View>
              
        </ScrollView>
     
    )

}


const style = StyleSheet.create({

    header: {

        flexDirection:"row",
        justifyContent:"space-between",
        paddingHorizontal: 20,
        paddingVertical: 30,
        alignItems:'center',
        flex:1

    },

    header_title: {

        fontSize:20,
        fontWeight:'700',
        color:'black'
        
    },

    body: {

        paddingHorizontal: 20

     },

     body_title : {

        fontSize:15,
        fontWeight:'700',
        color:'black'

     }

})


export default Index;