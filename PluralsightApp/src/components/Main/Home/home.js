import React, {useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import SectionCourses from './SectionCourses/section-courses';
const Home = (props) => {
  return (
    <ScrollView style={styles.container}>
      <SectionCourses title="Software Development" />
      <SectionCourses title="IT Operations" />
      <SectionCourses title="Data Professional" />
      <SectionCourses title="Security Professional" />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0e0f13',
  },
});
export default Home;
