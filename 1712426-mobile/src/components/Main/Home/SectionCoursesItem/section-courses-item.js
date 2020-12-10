import React, {useState} from 'react';
import {StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native';
import { min } from 'react-native-reanimated';
const SectionCoursesItem = (props) => {
  const createdAt = String(props.item.createdAt).split('T');
  const totalHours = parseFloat(props.item.totalHours);
  const hour = parseInt(totalHours);
  const convertMinute = 60*(totalHours - hour);
  const minute = parseInt(convertMinute);
  return (
    <TouchableOpacity
      style={styles.item}
      onPress={() => {
        props.OnPressListenItem();
      }}>
      <Image
      source={{
        uri:props.item.imageUrl,
      }}
      style={styles.image} />
      <View>
        <Text style={styles.title}>{props.item.title}</Text>
        <Text style={styles.title}>{props.item['instructor.user.name']}</Text>
        <Text style={styles.darktext}>{props.item.price}</Text>
        <Text style={styles.darktext}>{props.item.status}</Text>
        <Text
          style={
            styles.darktext
          }>{`${createdAt[0]} . ${hour}${'h '}${minute}${'m'}`}</Text>
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
    paddingLeft: 5,
    color: 'white',
  },
  darktext: {
    paddingLeft: 5,
    color: 'darkgray',
  },
});
export default SectionCoursesItem;
