import React, {useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {ScreenKey} from '../../../../globals/constants';
import SectionCourses from '../../Home/SectionCourses/section-courses';
import Paths from '../Paths/paths';
import TopAuthors from '../TopAuthors/top-authors';
const PopularSkillsDetail = (props) => {
  console.log(props.navigation.state.params.item, 'popular-skills-detail.js');
  return (
    <ScrollView style={styles.container}>
      <View style={styles.view}>
        <Paths
          title={`${'Path in '} ${props.navigation.state.params.item}`}
          {...props}
          OnPress={() =>
            props.navigation.push(ScreenKey.AllListPaths, {
              title: 'Path in' + props.navigation.state.params.item,
            })
          }
        />
        <SectionCourses
          title={`${'New in '} ${props.navigation.state.params.item}`}
          {...props}
          OnPress={() => props.navigation.push(ScreenKey.CourseDetail)}
        />
        <SectionCourses
          title={`${'Trending in '} ${props.navigation.state.params.item}`}
          {...props}
          OnPress={() => props.navigation.push(ScreenKey.CourseDetail)}
        />
        <TopAuthors title="Top authors in Software Development" {...props} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0e0f13',
  },
  view: {
    marginTop: 15,
    marginLeft: 15,
  },
});
export default PopularSkillsDetail;
