import React, {useState} from 'react';
import {StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native';
const ListCoursesItem = (props) => {
  const OnPressListenItem = () => {
    props.navigation.navigate('CourseDetail', {item: props.item});
  };
  return (
    <TouchableOpacity style={styles.item} onPress={OnPressListenItem}>
      <Image source={props.item.link} style={styles.image} />
      <View style={styles.viewText}>
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
    marginHorizontal: 15,
    height: 90,
    flexDirection: 'row',
    borderWidth: 1,
    borderBottomColor: '#1f242a',
  },
  image: {
    width: '25%',
    height: 70,
    alignSelf: 'center',
    marginLeft: 10,
  },
  viewText: {
    width: '75%',
    padding: 15,
    alignSelf: 'center',
  },
  title: {
    color: 'white',
  },
  darktext: {
    color: 'darkgray',
  },
});
export default ListCoursesItem;
