import React, {useState, useEffect, AsyncStorage } from 'react';
import { Text, View, StyleSheet, Image,  ImageBackground, Button, Pressable } from 'react-native';
import logo from '../assets/logo.png'
import { useFonts } from 'expo-font';
import bezos from '../assets/bezos.png'

export default function Page2() {

  const array = [
    {url:'https://media-exp1.licdn.com/dms/image/C4E03AQGdJBC6vml_7w/profile-displayphoto-shrink_400_400/0/1661804209171?e=1669852800&v=beta&t=4Ny_r7MroSq_6p1m-0qR-Kz9mND4mEl17OO5zfFDpcQ',
name: 'Tabah',
lc: '9200'
},
{url:'https://media-exp1.licdn.com/dms/image/C4E03AQH78UzL2miBaA/profile-displayphoto-shrink_400_400/0/1604779078979?e=1669852800&v=beta&t=JPskwdhOXnjOY24ekW2sO6X5JUHplD6OqvOsTHSh86E',
name: 'Theo',
lc: '9000'
},
{url:'https://media-exp1.licdn.com/dms/image/C4D03AQGBvUkJAaLAFg/profile-displayphoto-shrink_800_800/0/1663423080726?e=1669852800&v=beta&t=hglUcG_Ct18T62-asI1UY9VyeXytqVqM9qUC5n26rfQ',
name: 'Kadi',
lc: '8400'
},
{url:'https://media-exp1.licdn.com/dms/image/C4D03AQE_Ea2hZYWzzw/profile-displayphoto-shrink_400_400/0/1638910337860?e=1669852800&v=beta&t=tAyjeA369B8VhjDjk3Z34ic50lHLUrnE8jovfd632u8',
name: 'Greg',
lc: '8000'
},
{url:'https://media-exp1.licdn.com/dms/image/D5603AQEem8z01WHvVQ/profile-displayphoto-shrink_400_400/0/1663441395441?e=1669852800&v=beta&t=TKBSf8zUKnE06WsHfjDZo527pC9uJhqmVtsz5g3b058',
name: 'Felix',
lc: '7400'
}

  ] ;

    const list = () => {
    return array.map((element) => {
      return (
      <View className="ticket" style={styles.ticket}> 
      <View className="ticket-text" style={styles.ticketText}>
      <Text style={styles.tictext}> {array.indexOf(element) + 1} </Text>
      </View> 
      <View className="ticketImageContainer" style={styles.ticketImageContainer}>
<Image style={styles.ticketImage}  source={{uri: `${element.url}`}}
resizeMode="contain"/>
      </View>
      <View style={styles.tickeTextContainer}>
      <Text style={styles.ticketText1}> {element.name} </Text>
      <Text style={styles.ticketText2}> $ {element.lc} </Text>
      </View>
      </View>
      );
    });
  };

  return (
    <View style={styles.ticketParent}>
     <View style={styles.page2Container}>
      <Text style={styles.paragraph}>
        LEADERBOARD
      </Text>


  
      <View className="ticketContainer" style={styles.ticketContainer}> 
 { list() }
      </View>


</View>
</View>
  )
  }


const styles = StyleSheet.create({
ticketParent:{
  backgroundColor:'#11041d',
},

page2Container:{
  height: '100%',
  width: '100%',
  overflow: 'scroll',
  justifyContent: 'center',
alignItems: 'center'
},

paragraph: {
  fontSize: 35,
  fontWeight: 'bold',
  textAlign: 'center',
  color: 'white',
  fontFamily: "Poppins"
  },

ticket:{
  backgroundColor: '#fff3f3',
  width: '90%',
  height: '40',
  borderRadius: '20%',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  borderColor: '#5e489b',
  borderWidth: 5,
  marginTop: 15
},

ticketContainer:{
  justifyContent: 'center',
  alignItems: 'center',
  overflow: 'scroll',
  marginTop: 20
},

ticketText:{
backgroundColor: 'white',
height: 40,
width: 40,
borderRadius: 100,
justifyContent: 'center',
alignItems: 'center',
borderColor: 'black',
borderWidth: 3,
marginRight: '15%'


},

tictext:{
  fontSize: 20,
},

ticketImageContainer:{
  backgroundColor: 'white',
height: 70,
width: 70,
borderRadius: 100,
justifyContent: 'center',
alignItems: 'center',
borderColor: 'black',
borderWidth: 3,
margin: 10,
overflow: 'scroll',
marginRight: '10%'

},

ticketImage:{
  height: '200%',
  width: '150%',
  borderRadius: '100%',
  transform: [{ scale: 1 }],
  margin: '20%'

},

ticketText1:{
  fontSize: 25,
  fontWeight: 'bold',
  color: 'black',
  fontFamily: "Poppins",
},

ticketText2:{
  fontSize: 20,
  fontWeight: 'bold',
  color: 'black',
  fontFamily: "Poppins",
},



tickeTextContainer:{
  marginRight: '5%'
}
});