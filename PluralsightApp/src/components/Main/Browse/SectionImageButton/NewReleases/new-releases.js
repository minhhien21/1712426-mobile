import React, {useState} from 'react';
import {ImageBackground, ScrollView, StyleSheet, View, Text} from 'react-native';
import ListCourses from '../../../../Courses/ListCourses/list-courses';
const NewReleases = (props) => {
  return (
    <ScrollView style={styles.layoutHome}>
      <ImageBackground
        style={styles.button}
        source={{
          uri:
            'https://www.itl.cat/pngfile/big/0-7755_nature-pier-bridge-d-river-water-sunset-night.jpg',
        }}>
        <Text style={styles.text}>{props.title}</Text>
      </ImageBackground>
      <ListCourses {...props}/>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  layoutHome: {
    backgroundColor: '#0e0f13',
  },
  imagebutton: {
    marginRight: 8,
  },
  button: {
    height: 100,
  },
  touch: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    padding: 5,
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
export default NewReleases;
