import React, {useState} from 'react';
import {
    ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import SectionCourses from './SectionCourses/section-courses';
const Home = (props) => {
  return( 
      <ScrollView style={styles.layoutHome}>
          <SectionCourses title='Software Development'/>
          <SectionCourses title='IT Operations'/>
          <SectionCourses title='Data Professional'/>
          <SectionCourses title='Security Professional'/>
      </ScrollView>
  );
};

const styles = StyleSheet.create({
    layoutHome:{
        backgroundColor: '#0e0f13',
    }
  });
export default Home;
