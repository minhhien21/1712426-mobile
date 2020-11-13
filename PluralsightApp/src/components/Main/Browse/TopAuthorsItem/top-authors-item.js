import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
const TopAuthorsItem = (props) => {
  return (
    <View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          props.OnPressListenItem();
        }}>
        <Image source={props.item.link} style={styles.image} />
      </TouchableOpacity>
      <Text style={styles.text}>{props.item.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#353a3e',
    borderRadius: 15,
    marginRight: 15,
    height: 80,
    width: 80,
    borderRadius: 40,
  },
  image: {
    height: 80,
    width: 80,
    borderRadius: 40,
  },
  text: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    width: 90,
  },
});
export default TopAuthorsItem;
