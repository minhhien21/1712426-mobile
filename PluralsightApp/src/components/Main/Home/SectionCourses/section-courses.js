import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
} from 'react-native';
import SectionCoursesItem from '../SectionCoursesItem/section-courses-item';
const SectionCourses = (props) => {
    const courses = [
        {
            id: 1,
            link: require('../../../../../assets/angular-fundamentals.jpg'),
            title: 'Angular Fundamentals',
            author: 'Joe Eames',
            level: 'Intermediate',
            released: 'Fed 01 2019',
            duration: '9h 35m'
        },
        {
            id: 2,
            link: require('../../../../../assets/angular-fundamentals.jpg'),
            title: 'C# Fundamentals',
            author: 'Scott Allen',
            level: 'Beginner',
            released: 'Apr 16 2019',
            duration: '6h 5m'
        },
        {
            id: 3,
            link: require('../../../../../assets/angular-fundamentals.jpg'),
            title: 'Managing AWS Operations',
            author: 'Andru Estes',
            level: 'Intermediate',
            released: 'May 15 2020',
            duration: '3h 50m'
        },
        {
            id: 4,
            link: require('../../../../../assets/angular-fundamentals.jpg'),
            title: 'Spring Framework: Spring MVC Fundamentals',
            author: 'Bryan Hansen',
            level: 'Beginner',
            released: 'Fed 12 2020',
            duration: '2h 32m'
        },
        {
            id: 5,
            link: require('../../../../../assets/angular-fundamentals.jpg'),
            title: 'Spring: The Big Picture',
            author: 'Dustin Schultz',
            level: 'Beginner',
            released: 'May 15 2018',
            duration: '1h 15m'
        },
    ]

    const renderListItems = (courses) => {
        return courses.map(item => <SectionCoursesItem item={item}/>);
    }
  return( 
      <View>
          <Text style={styles.text}>{props.title}</Text>
          <ScrollView horizontal={true}>
              {renderListItems(courses)}
          </ScrollView>
      </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    text:{
        margin: 5,
        color: 'white',
        fontSize: 20,
    }
  });
export default SectionCourses;
