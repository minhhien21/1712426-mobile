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
const InfoPath = (props) => {
  var itemProps= props.navigation.state.params.item;
  return (
    <ScrollView style={styles.container}>
      <View style={styles.item}>
        <View style={styles.pathItem}>
          <Image
            source={{uri:itemProps.link}}
            style={styles.image}
          />
          <View style={styles.viewText}>
            <Text style={styles.title}>{itemProps.title}</Text>
            <Text style={styles.darktext}>{itemProps.total}</Text>
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
  pathItem: {
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
    marginTop: 10,
    color: 'darkgray',
  },
});
export default InfoPath;
