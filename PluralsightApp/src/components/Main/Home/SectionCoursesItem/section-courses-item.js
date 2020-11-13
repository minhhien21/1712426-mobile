import React, {useState} from 'react';
import {StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native';
const SectionCoursesItem = (props) => {
  return (
    <TouchableOpacity
      style={styles.item}
      onPress={() => {
        props.OnPressListenItem();
      }}>
      <Image source={props.item.link} style={styles.image} />
      <View>
        <Text style={styles.title}>{props.item.title}</Text>
        <Text style={styles.darktext}>{props.item.author}</Text>
        <Text
          style={
            styles.darktext
          }>{`${props.item.level} . ${props.item.released} . ${props.item.duration}`}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    marginRight: 15,
    width: 200,
    height: 200,
    backgroundColor: '#1f242a',
  },
  image: {
    width: 200,
    height: 100,
  },
  title: {
    padding: 5,
    color: 'white',
  },
  darktext: {
    padding: 5,
    color: 'darkgray',
  },
});
export default SectionCoursesItem;
