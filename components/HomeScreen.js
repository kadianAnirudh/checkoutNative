import * as React from 'react';
import { Text, View, StyleSheet, Image,  ImageBackground, Button, Pressable } from 'react-native';
import logo from '../assets/logo.png'
import { useFonts } from 'expo-font';
import bezos from '../assets/bezos.png';
import bgImage from '../assets/bgImage.png';

export default function Home({navigation}) {
  return (
    <ImageBackground style={styles.background} source={bgImage} resizeMode="cover">
    <View style={styles.parentContainer}>

    <View style={styles.container1}>
    <View style={styles.imgContainer}>
    <Image style={styles.logo} source={logo}/>
    </View>
      <Text style={styles.paragraph}>
        Late Checkout
      </Text>
    </View>

    <View style={styles.crownContainer}>

  <View style={styles.crown}>
  <Text style={styles.crownText}> 🥇 </Text> 
<View className="winnerImage" style={styles.winnerImageContainer} >
<Image style={styles.winnerImage} source={{uri:'https://media-exp1.licdn.com/dms/image/C4E03AQGdJBC6vml_7w/profile-displayphoto-shrink_400_400/0/1661804209171?e=1669852800&v=beta&t=4Ny_r7MroSq_6p1m-0qR-Kz9mND4mEl17OO5zfFDpcQ'}} resizeMode="contain"/>
</View>
  <View> 
  <Text style={styles.winnerText}> Theo Tabah </Text>
  </View>
  </View> 


  <View style={styles.runnerUps}>

  <View style={styles.crown}>
  <Text style={styles.runnerUpText}> 🥈 </Text> 
  <View style={styles.runnerUpImageContainer} >
    <Image style={styles.runnerUpImage} source={{uri:'https://media-exp1.licdn.com/dms/image/C4E03AQH78UzL2miBaA/profile-displayphoto-shrink_400_400/0/1604779078979?e=1669852800&v=beta&t=JPskwdhOXnjOY24ekW2sO6X5JUHplD6OqvOsTHSh86E'}} resizeMode="contain"/>
</View>

  <View> 
  <Text style={styles.runnersUpText}> Richardson </Text>
  </View>

  </View> 

    <View style={styles.crown2}>
  <Text style={styles.runnerUpText2}> 🥉 </Text> 
  <View style={styles.runnerUpImageContainer} >
    <Image style={styles.runnerUpImage} source={{uri:'https://media-exp1.licdn.com/dms/image/C4D03AQGBvUkJAaLAFg/profile-displayphoto-shrink_800_800/0/1663423080726?e=1669852800&v=beta&t=hglUcG_Ct18T62-asI1UY9VyeXytqVqM9qUC5n26rfQ',
name: 'Anirudh Kadian'}} resizeMode="contain"/>
</View>
  <View> 
  <Text style={styles.runnersUpText}> Anirudh </Text>
  </View>

  </View> 
  </View>

<View style={styles.buttonContainer}> 
  <Pressable style={styles.pressable}
  onPress={()=>navigation.navigate("Page2")}
  >
  <Text style={styles.leadertext}> Check Leaderboard </Text>
</Pressable>
  </View>
    </View>

    <View className="silver">

    </View>

    <View className="bronze">

    </View>
    
    </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container1: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: "row",
    marginTop: 60,
    textAlign: 'center',
    backgroundImage: url(bgImage)

  },

  background: {
    height: '100%',
    width: '100%', 
    backgroundImage: (bgImage)
  },


  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    fontFamily: "Poppins"
  },


  logo: {
    height: '100%',
    width: '100%',
  },


  imgContainer:{
    height: 100,
    width: 100
  },


  crown:{
  color: 'fff',
  height: 100,
  width: 100,
  fontWeight: 'bold',
  textAlign: 'center',
    alignItems: 'center',
  justifyContent: 'center',

    },


  crownText:{
  marginTop: 0,
  fontSize: 50,
  fontWeight: 'bold',
  textAlign: 'center',
    },


  crownContainer:{
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: 80,
    },


  winnerImageContainer:{
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: 10,
  borderRadius: 100,
  borderWidth: 6,
  borderColor: '#5e489b',
  height:110,
  width:110,
  overflow: 'hidden'
  },


  winnerImage:{
  height: '200%',
  width: '150%',
  borderRadius: '100%',
  transform: [{ scale: 1 }]
  },


  parentContainer:{
    alignItems: 'center',
  justifyContent: 'center',
  },


  winnerText:{
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
    fontFamily: "Poppins",
    marginTop: 20,
  },

  runnerUpText:{
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
    fontFamily: "Poppins",
    marginTop: 20,
  },

  runnerUpImageContainer:{
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: 10,
  borderRadius: 100,
  borderWidth: 6,
  borderColor: '#5e489b',
  height:90,
  width:90,
  overflow: 'hidden'
  },

  runnerUpImage:{
  height: '200%',
  width: '150%',
  borderRadius: '100%',
  transform: [{ scale: 1 }]
  },

runnersUpText:{
      fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
    fontFamily: "Poppins",
    marginTop: 20,
},

runnerUps:{
      alignItems: 'center',
    justifyContent: 'center',
    flexDirection: "row",
    marginTop: 150
},

crown2:{
  color: 'fff',
  height: 100,
  width: 100,
  fontWeight: 'bold',
  textAlign: 'center',
    alignItems: 'center',
  justifyContent: 'center',
  marginLeft: 40
},

  runnerUpText2:{
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
    fontFamily: "Poppins",
    marginTop: 20,
  },

buttonContainer:{
marginTop: 130,
height: 50,
width: 250,
backgroundColor: '#fff3f3',
justifyContent: 'center',
alignItems: 'center',
borderRadius: 15,
color: '#5e489b'
},

pressable:{
  fontColor:'white'
},

leadertext:{
  fontSize: 19,
  color: 'black',
  fontWeight: 'bold',
}


});