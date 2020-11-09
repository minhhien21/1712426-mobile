import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
const TopAuthorsItem = (props) => {
  const OnPressListenItem = () => {
    props.navigation.navigate('AuthorDetail', {item: props.item});
  };
  return (
    <View>
      <TouchableOpacity style={styles.button} onPress={OnPressListenItem}>
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
        height: 80,
        width: 80,
        borderRadius: 40,
    },
    image:{
        height: 80,
        width: 80,
        borderRadius: 40,
    },
    text:{
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
        width: 90,
    }
});
export default TopAuthorsItem;
