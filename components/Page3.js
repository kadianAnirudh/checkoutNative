import * as React from 'react';
import { Text, View, StyleSheet, Image, ImageBackground } from 'react-native';
import bgImage from '../assets/background.png';

export default function Page3() {
  return (
    <View style={styles.addParent}>

      <View style={styles.addChild1}>
        <Text style={styles.addText}> Add new Peer </Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
addText:{
  fontSize: 35,
  fontWeight: 'bold',
  textAlign: 'center',
  color: 'white',
  fontFamily: "Poppins"
},

addParent:{
    backgroundColor:'#11041d',
    height: '100%'
},

addChild1:{
  marginTop: 50
}
});
