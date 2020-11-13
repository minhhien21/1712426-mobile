import React, {useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import SectionCourses from './SectionCourses/section-courses';
const Home = (props) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.view}>
        <SectionCourses title="Software Development" {...props} />
        <SectionCourses title="IT Operations" {...props} />
        <SectionCourses title="Data Professional" {...props} />
        <SectionCourses title="Security Professional" {...props} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0e0f13',
  },
  view: {
    marginTop: 20,
    marginLeft: 15,
  },
});
export default Home;
