import React, {useState} from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import ListLessonsItem from '../ListLessonsItem/list-lessons-item';
const ListLessons = (props) => {
  const lessons = [
    {
      id: 1,
      nameLesson: 'Course OverView',
      totalTime: '2:04',
      detailLesson:[
        {
          name: 'Course OverView',
          time: '2:04',
        }
      ]
    },
    {
      id: 2,
      nameLesson: 'Getting Started with Angular',
      totalTime: '38:45',
      detailLesson:[
        {
          name: 'Introduction',
          time: '2:55',
        },
        {
          name: 'Practice Exercises',
          time: '2:25',
        },
        {
          name: 'Introduction to TypeScript',
          time: '7:09',
        },
        {
          name: 'Comparing Angular to Angular JS',
          time: '2:17',
        },
        {
          name: 'A Conceptual Overview of Angular',
          time: '3:02',
        },
        {
          name: "Here's What We'll Be Building",
          time: '1:13',
        },
        {
          name: 'Installing Git and Note',
          time: '2:04',
        },
        {
          name: 'Getting Started with the Angular CLI',
          time: '4:51',
        },
        {
          name: 'Bootstrapping an Angular App',
          time: '4:35',
        },
        {
          name: 'ABrief Look at the App Module',
          time: '1:44',
        },
        {
          name: 'Accessing Static Files',
          time: '5:48',
        },
        {
          name: 'Summary',
          time: '0:42',
        },
      ]
    },
    {
      id: 3,
      nameLesson: 'Creating and Communicating Between Angular Components',
      totalTime: '33:32',
      detailLesson:[
        {
          name: 'Introduction',
          time: '0:42',
        },
        {
          name: 'Creating Your First',
          time: '6:10',
        },
        {
          name: 'Using External Templates',
          time: '0:59',
        },
      ]
    },
    {
      id: 4,
      nameLesson: 'Exploring the Angular Template Syntax',
      totalTime: '32:06',
      detailLesson:[
        {
          name: 'Introduction',
          time: '0:42',
        },
        {
          name: 'Creating Your First',
          time: '6:10',
        },
        {
          name: 'Using External Templates',
          time: '0:59',
        },
      ]
    },
    {
      id: 5,
      nameLesson: 'Creatubg Reusable Angular Services',
      totalTime: '32:06',
      detailLesson:[
        {
          name: 'Introduction',
          time: '0:42',
        },
        {
          name: 'Creating Your First',
          time: '6:10',
        },
        {
          name: 'Using External Templates',
          time: '0:59',
        },
      ]
    },
    {
      id: 6,
      nameLesson: 'Creatubg Reusable Angular Services',
      totalTime: '32:06',
      detailLesson:[
        {
          name: 'Introduction',
          time: '0:42',
        },
        {
          name: 'Creating Your First',
          time: '6:10',
        },
        {
          name: 'Using External Templates',
          time: '0:59',
        },
      ]
    },
    {
      id: 7,
      nameLesson: 'Creatubg Reusable Angular Services',
      totalTime: '32:06',
      detailLesson:[
        {
          name: 'Introduction',
          time: '0:42',
        },
        {
          name: 'Creating Your First',
          time: '6:10',
        },
        {
          name: 'Using External Templates',
          time: '0:59',
        },
      ]
    },
  ];

  const renderListItems = (lessons) => {
    return lessons.map((item) => <ListLessonsItem item={item}/>);
  };
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>{renderListItems(lessons)}</ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#0e0f13',
  },
  scrollView:{
    marginHorizontal: 15,
  },
});
export default ListLessons;
