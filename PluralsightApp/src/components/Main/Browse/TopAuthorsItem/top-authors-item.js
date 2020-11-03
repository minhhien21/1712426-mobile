import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
const TopAuthorsItem = (props) => {
  return (
    <View>
      <TouchableOpacity style={styles.button}>
          <Image source={props.item.link} style={styles.image}/>
      </TouchableOpacity>
      <Text style={styles.text}>{props.item.name}</Text>
    </View>
  );
};


const styles = StyleSheet.create({
    button: {
        backgroundColor: '#353a3e',
        borderRadius: 15,
        marginHorizontal: 5,
        height: 90,
        width: 90,
        borderRadius: 45,
    },
    image:{
        height: 90,
        width: 90,
        borderRadius: 45,
    },
    text:{
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
        width: 90,
    }
});
export default TopAuthorsItem;
