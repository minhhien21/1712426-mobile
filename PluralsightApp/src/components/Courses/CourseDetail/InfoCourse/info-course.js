import React, {useState} from 'react';
import {StyleSheet, View, Image, Text, TouchableOpacity, ScrollView} from 'react-native';
import {round} from 'react-native-reanimated';
const InfoCourse = (props) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.item}>
        <Text style={styles.textHeader}>{props.title}</Text>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity styles={styles.imageButton}>
            <View style={styles.imageButton}>
              <Image
                source={require('../../../../../assets/ScottAllen.jpg')}
                style={styles.image}
              />
              <Text style={styles.textImage}>{props.author}</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity styles={styles.imageButton}>
            <View style={styles.imageButton}>
              <Image
                source={require('../../../../../assets/ScottAllen.jpg')}
                style={styles.image}
              />
              <Text style={styles.textImage}>{props.author}</Text>
            </View>
          </TouchableOpacity>
        </View>
        <Text style={styles.darktext}>
          {`${props.level} . ${props.released} . ${props.duration}`}
        </Text>

        <View style={styles.iconView}>
          <View>
            <TouchableOpacity styles={styles.iconButton}>
              <Image
                source={require('../../../../../assets/ScottAllen.jpg')}
                style={styles.icon}
              />
            </TouchableOpacity>
            <Text style={styles.textIcon}>Bookmark</Text>
          </View>
          <View>
            <TouchableOpacity styles={styles.iconButton}>
              <Image
                source={require('../../../../../assets/ScottAllen.jpg')}
                style={styles.icon}
              />
            </TouchableOpacity>
            <Text style={styles.textIcon}>Add to Channel</Text>
          </View>
          <View>
            <TouchableOpacity styles={styles.iconButton}>
              <Image
                source={require('../../../../../assets/ScottAllen.jpg')}
                style={styles.icon}
              />
            </TouchableOpacity>
            <Text style={styles.textIcon}>Download</Text>
          </View>
        </View>

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
          <TouchableOpacity style={styles.button}>
            <Text style={styles.textButton}>Take a learning check</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.textButton}>View related paths & courses</Text>
          </TouchableOpacity>
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
  },
  textHeader: {
    color: 'white',
    fontSize: 25,
  },
  button: {
    marginTop: 15,
    backgroundColor: '#3a434a',
    width: '100%',
  },
  textButton:{
    color: 'white',
    textAlign:'center',
    paddingVertical: 10,
  },
  imageButton: {
    marginTop: 15,
    backgroundColor: '#3a434a',
    marginRight: 10,
    height: 30,
    width: 120,
    borderRadius: 15,
    flexDirection: 'row',
  },
  image: {
    height: 30,
    width: 30,
    borderRadius: 15,
  },
  textImage: {
    color: 'white',
    alignSelf: 'center',
  },
  iconView: {
    flexDirection: 'row',
    marginTop: 15,
    marginHorizontal: 30,
    justifyContent: 'space-around',
  },
  iconButton: {
    backgroundColor: '#3a434a',
    marginRight: 10,
    height: 50,
    width: 50,
    borderRadius: 25,
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
  },
  viewText: {
    width: '75%',
    padding: 15,
  },
  title: {
    color: 'white',
  },
  darktext: {
    marginTop: 10,
    color: 'darkgray',
  },
});
export default InfoCourse;
