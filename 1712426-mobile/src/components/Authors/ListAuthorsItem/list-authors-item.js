import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import { ScreenKey } from '../../../globals/constants';
const ListAuthorsItem = (props) => {
  return (
    <TouchableOpacity style={styles.item} onPress={() => {
      props.OnPressListenItem();
    }}>
      <TouchableOpacity style={styles.button}>
        <Image source={{uri:props.item.avatar}} style={styles.image} />
      </TouchableOpacity>
      <View style={styles.viewText}>
        <Text style={styles.title}>{props.item.name}</Text>
        <Text style={styles.darktext}>{`${props.item.numcourses}${' Courses'}`}</Text>
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
  button: {
    alignSelf: 'center',
    height: 70,
    width: 70,
    borderRadius: 35,
    marginLeft: 10,
  },
  image: {
    height: 70,
    width: 70,
    borderRadius: 35,
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
export default ListAuthorsItem;
