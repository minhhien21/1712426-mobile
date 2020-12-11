import React, {useState} from 'react';
import {StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native';
const LessonItem = (props) => {
  return (
    <TouchableOpacity style={styles.item}>
      <Text style={styles.text}>{props.item.name}</Text>
      <Text style={styles.darktext}>{props.item.time}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    justifyContent: "space-between"
  },
  text: {
    color:'white',
  },
  darktext: {
    color: 'darkgray',
  },
});
export default LessonItem;
