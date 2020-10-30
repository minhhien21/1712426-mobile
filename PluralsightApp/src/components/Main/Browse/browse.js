import React, {useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import ImageButton from '../../Common/image-button';
import SectionCourses from '../Home/SectionCourses/section-courses';
import PopularSkills from './PopularSkills/popular-skills';
import SectionImageButton from './SectionImageButton/section-image-button';
import Paths from './Paths/paths';
import TopAuthors from './TopAuthors/top-authors';


const Browse = (props) => {
  return (
    <ScrollView style={styles.container}>
      <ImageButton title={`${'NEW\nRELEASES'}`}/>
      <ImageButton title={`${'RECOMMENDED\nFOR YOU'}`}/>
      <SectionImageButton/>
      <PopularSkills/>
      <Paths/>
      <TopAuthors/>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0e0f13',
  },
});
export default Browse;
