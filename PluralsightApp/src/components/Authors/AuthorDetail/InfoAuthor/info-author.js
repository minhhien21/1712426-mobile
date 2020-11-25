import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {round} from 'react-native-reanimated';
const InfoAuthor = (props) => {
  var itemProps= props.navigation.state.params.item;
  return (
    <ScrollView style={styles.container}>
      <View style={styles.item}>
        <TouchableOpacity styles={styles.iconButton}>
          <Image
            source={{uri:itemProps.link}}
            style={styles.icon}
          />
        </TouchableOpacity>
        <Text style={styles.textIcon}>{itemProps.name}</Text>
        <Text style={styles.textIcon}>Pluralsight Author</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textbutton}>FOLLOW</Text>
        </TouchableOpacity>

        <Text style={{color: 'white'}}>
          Angular has become one of the most widely used web development
          franeworks. This courses, Angular Fundamentals, will teach you the
          fundamentals of writing applications with Angular-whether or not
          you've had past experience with Angular 1. You will learn how to
          bootstrap an application and how to build pages and reusable elements
          using Angular Components and the new Angular syntax. You'll also learn
          the fundamentals of: routing, creating reusable services and
          dependency injection, building forms with validation, and
          communicating with the server using HTTP and observables. You'll even
          learn how to test all of this using unit tests and end-to-end UI
          tests. When you finish this course, you will have the fundamental
          knowledge necessary to create professional and personal websites using
          Angular
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0e0f13',
  },
  item: {
    marginHorizontal: 15,
    marginTop: 20,
  },
  iconView: {
    marginTop: 15,
    marginHorizontal: 30,
    justifyContent: 'center',
  },
  iconButton: {
    backgroundColor: '#3a434a',
    marginRight: 10,
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  button: {
    backgroundColor: '#0084bd',
  },
  textbutton: {
    color: 'white',
    textAlign: 'center',
    paddingVertical: 10,
  },
  icon: {
    height: 50,
    width: 50,
    borderRadius: 25,
    alignSelf: 'center',
  },
  textIcon: {
    color: 'white',
    textAlign: 'center',
    marginTop: 10,
  },

  darktext: {
    marginTop: 10,
    color: 'darkgray',
  },
});
export default InfoAuthor;
