import React, {useState} from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';
const SectionCoursesItem = (props) => {
  return (
    <View style={styles.item}>
      <Image
        source={props.item.link}
        style={styles.image}
      />
      <View>
        <Text style={styles.title}>{props.item.title}</Text>
        <Text style={styles.darktext}>{props.item.author}</Text>
        <Text
          style={
            styles.darktext
          }>{`${props.item.level} . ${props.item.released} . ${props.item.duration}`}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    margin: 5,
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
