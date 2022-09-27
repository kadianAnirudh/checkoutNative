import * as React from 'react';
import { Text, View, StyleSheet, Image,  ImageBackground } from 'react-native';
import bgImage from '../assets/background.png'

export default function AssetExample() {
  return (
    <View>
    // <View style={styles.container}>
    //   <Text style={styles.paragraph}>
    //     Local files and assets can be imported by dragging and dropping them into the editor
    //   </Text>
    //   <Image style={styles.logo} source={require('../assets/snack-icon.png')} />
    // </View>

  // These will be the icons to show winners
 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    height: 140,
    width: 140,
  },

});
