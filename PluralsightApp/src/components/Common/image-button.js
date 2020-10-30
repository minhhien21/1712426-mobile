import React from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Text,
} from 'react-native';
const ImageButton = (props) => {
  return (
    <ImageBackground
      style={styles.button}
      source={{
        uri:
          'https://www.itl.cat/pngfile/big/0-7755_nature-pier-bridge-d-river-water-sunset-night.jpg'
      }}>
      <TouchableOpacity style={styles.touch}>
        <Text style={styles.text}>{props.title}</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  button: {
    height: 100,
  },
  touch:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    padding: 5,
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold',
    textAlign: "center",
  },
});

export default ImageButton;
