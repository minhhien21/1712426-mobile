import React, {useState, useContext} from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';
import {CourseContext} from '../../../../../provider/course-provider';
import SectionItem from '../SectionItem/section-item';
const Section = (props) => {
  const courseContext = useContext(CourseContext);
  const sections = courseContext.state.DetailCourse.payload.section;

  const renderListItems = (lessons) => {
    return lessons.map((item) => <SectionItem item={item} />);
  };
  return (
    <FlatList
      style={styles.container}
      data={sections}
      renderItem={({item}) => (
        <SectionItem
          item={item}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0e0f13',
  },
});
export default Section;
