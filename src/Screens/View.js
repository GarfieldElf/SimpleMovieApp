import React, { useEffect,useState,useRef} from 'react';
import {View ,Text, StyleSheet ,FlatList,ScrollView,Image,SafeAreaView,TouchableOpacity,Modal} from 'react-native';

import Icon from 'react-native-vector-icons/dist/FontAwesome5';

import Data from '../Data/Movies.json'
import StarRating from 'react-native-star-rating';
import Video  from 'react-native-video';

const Vieww = props => {

    const id = props.route.params.id;
    const item = Data.filter(item => item.id == id)[0];
    const [ismodalvisible,setmodalvisible] = useState(false);
    const videoRef = useRef(null);


    return(
       <ScrollView flex={1}>
         
        <View style={style.header}>
          <View style={style.controls}>

            <TouchableOpacity style={{flexDirection:'row', alignItems:'center'}} onPress={() => props.navigation.goBack()}>
                <Icon name="chevron-left" size={20} color="black"></Icon>
                <Text style={{color:"black",marginLeft:5,fontSize:16,fontWeight:'700'}}>Back</Text>
            </TouchableOpacity>

            <TouchableOpacity>
                <Icon name="share" size={20} color="black"></Icon>
            </TouchableOpacity>
          </View>         

            <View>
             <Image resizeMode='cover' source={{uri : item.image}} style={style.header_image}></Image>
           </View>

          <View style={style.playButtonContainer}>
              <TouchableOpacity onPress={() => setmodalvisible(!ismodalvisible)} style={style.playButton}>
              <Icon name="play" size={30} color="white"></Icon>
              </TouchableOpacity>
          </View>

          <View style={style.informationImageContainer}>
            <Image source={{uri:item.image}} style={style.information_image}></Image>
         </View>

        <View style={style.informationNameContainer}>
           <Text style={style.informationName}>{item.name}</Text>
        </View>
     </View>
     
     <View style={style.body}>
           <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <View style={{flex:1}}/>
                  <View style={style.top_right}>
                      <View style={style.top_right_item}>
                          <Icon name="clock" size={20}></Icon>
                          <Text style={style.top_right_item_text}>{item.time}</Text>
                      </View>

                      <View style={style.top_right_item}>
                          <Icon name="folder" size={20}></Icon>
                          <Text style={style.top_right_item_text}>{item.category}</Text>
                      </View>

                      <View style={style.top_right_item}>
                          <Icon name="street-view" size={20}></Icon>
                          <Text style={style.top_right_item_text}>{item.director}</Text>
                      </View>

                      <View style={style.top_right_item}>
                      <StarRating
                            disabled={false}
                           maxStars={5}
                           starSize={20}
                           fullStarColor="#DB3069"
                           rating={item.star}
                           selectedStar={(rating) => console.log(rating)}
                      />
                      </View>
                </View>
           </View>

           <View style={style.content}>
            <Text>{item.title}</Text>
            <Text style={{color:"black",textAlign:'center',marginTop:5}}>Casts:</Text>

             <View style={style.casts}>
                 {item.cast.map(item => (

                  <View style={{flex:1,alignItems:'center'}} >
                     <Text style={{color:"black",textAlign:'center'}}>{item.name}</Text>
                    </View>
                    
                ))}
             </View>
          </View>  
    </View>

    <Modal visible={ismodalvisible} transparent>                                                    
        <View style={{ flex: 1,justifyContent:'center',alignItems:'center',backgroundColor:'rgba(0, 0, 0, 0.8)'}}>
             <View style={{backgroundColor:'white',height:300,width:'90%'}}>

                <TouchableOpacity onPress={() => setmodalvisible(false)} style={style.modalclosebutton}>
                   <Icon name="times-circle" size={30} color="white"></Icon>
                </TouchableOpacity>

                <Video source={{uri:item.video}} style={style.video} resizeMode={"cover"} ref={videoRef}></Video>

             </View>
        </View>
      </Modal>

   </ScrollView>

    )
}

const style = StyleSheet.create({

     header_image: {
       
        width:'100%',
        height:300,
        opacity: 0.5,

     },

     playButtonContainer: {

        position:'absolute',
        width:'100%',
        height:'100%',
        justifyContent:'center',
        alignItems:'center',

     },

     playButton : {

      width:60,
      height:60,
      borderRadius:100,
      backgroundColor:'#DB3069',
      justifyContent:'center',
      alignItems:'center'


     },

     controls :  {

     position:'absolute',
     flexDirection:'row',
     justifyContent:'space-between',
     width:'100%',
     top:20,
     zIndex:11,
     paddingHorizontal: 20,

     },

     information_image : {

        width:130,
        height:170,
        borderRadius:5

     },

     informationImageContainer : {
        position:'absolute',
        bottom:-100,
        left:20,
        zIndex:11,
     },

     informationNameContainer : {

       position:'absolute',
       zIndex:11,
       bottom: 10,
       right:10,
       width:200,

     },

     informationName: {

        fontSize:18,
        color:'#DB3069',
        fontWeight:'700'

     },

     body : {

        flex:1
      
     },

     top_right : {

        flex:1.5,
        marginHorizontal:5,
        paddingVertical:20

     },

     top_right_item : {

        flexDirection:'row',
        alignItems:'center',
        marginBottom:5,

     },

     top_right_item_text : {

        left:10,
        textAlign:'center',
        color:"black"

     },

     content : {

        paddingHorizontal:20,
        paddingVertical:5

     },

     casts : {

      marginTop:10,
      flexDirection:'row',

     },

     modalclosebutton : {

     zIndex:99999,
     top:-20,
     right:-10,
     position:'absolute',
     backgroundColor:'black',
     width:40,
     height:40,
     justifyContent:'center',
     alignItems:'center',
     borderRadius:100

     },
   
     video: {

      height:300,
      width:'100%'

     }

})

export default Vieww;