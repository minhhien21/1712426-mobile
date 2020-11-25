import React, {useState} from 'react';
import {StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native';

const PathsItem = (props) => {
  return (
    <TouchableOpacity
      style={styles.item}
      onPress={() => {
        props.OnPressListenItem();
      }}>
      <Image
        source={{
          uri: props.item.link,
        }}
        style={styles.image}
      />
      <View>
        <Text style={styles.title}>{props.item.title}</Text>
        <Text style={styles.darktext}>{props.item.total}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    marginRight: 15,
    width: 180,
    height: 180,
    backgroundColor: '#1f242a',
  },
  image: {
    width: 180,
    height: 90,
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
export default PathsItem;
