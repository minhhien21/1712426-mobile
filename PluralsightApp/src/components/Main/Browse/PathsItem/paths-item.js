import React, {useState} from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';

const PathsItem = (props) => {
  return (
    <View style={styles.item}>
      <Image source={props.item.link} style={styles.image}/>
      <View>
        <Text style={styles.title}>{props.item.title}</Text>
        <Text style={styles.darktext}>{props.item.total}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    item: {
      margin: 5,
      width: 180,
      height: 180,
      backgroundColor: '#1f242a',
    },
    image: {
      width: 180,
      height: 90,
    },
    title:{
        padding: 5,
        color: 'white'
    },
    darktext:{
        padding: 5,
        color: 'darkgray'
    }
  });
export default PathsItem;
