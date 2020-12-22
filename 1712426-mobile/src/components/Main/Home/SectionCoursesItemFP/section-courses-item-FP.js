import React, {useState} from 'react';
import {Rating} from 'react-native-elements';
import {StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native';
const SectionCoursesItemFP = (props) => {
  let titleName = "";
  if(String(props.item.courseTitle).length < 29){
    titleName = props.item.courseTitle;
  }else{
    titleName = String(props.item.courseTitle).substring(0,26);
    titleName += "...";
  }
  return (
    <TouchableOpacity
      style={styles.item}
      onPress={() => {
        props.OnPressListenItem();
      }}>
      <Image
        source={{
          uri: props.item.courseImage,
        }}
        style={styles.image}
      />
      <View>
        <Text style={styles.title}>{titleName}</Text>
        <Text style={styles.title}>{props.item.instructorName}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    marginRight: 15,
    width: 200,
    height: 150,
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
});
export default SectionCoursesItemFP;
