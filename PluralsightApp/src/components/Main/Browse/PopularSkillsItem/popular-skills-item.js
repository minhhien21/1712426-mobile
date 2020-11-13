import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
const PopularSkillsItem = (props) => {
  return (
    <View>
      <TouchableOpacity style={styles.button} 
      onPress={() => {
        props.OnPressListenItem();
      }}>
          <Text style={styles.text}>{props.item}</Text>
      </TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create({
    button: {
        backgroundColor: '#353a3e',
        borderRadius: 15,
        marginRight: 5,
        marginTop: 5,
    },
    text:{
        fontSize: 20,
        color: 'white',
        paddingVertical: 5,
        paddingHorizontal: 10,
    }
});
export default PopularSkillsItem;
