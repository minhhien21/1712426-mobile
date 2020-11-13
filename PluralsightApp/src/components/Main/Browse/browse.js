import React, {useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import ImageButton from '../../Common/image-button';
import SectionCourses from '../Home/SectionCourses/section-courses';
import PopularSkills from './PopularSkills/popular-skills';
import SectionImageButton from './SectionImageButton/section-image-button';
import Paths from './Paths/paths';
import TopAuthors from './TopAuthors/top-authors';
import {ScreenKey} from '../../../globals/constants';

const Browse = (props) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.view}>
        <View style={styles.imagebutton}>
          <ImageButton title={`${'NEW\nRELEASES'}`} />
        </View>
        <View style={styles.imagebutton}>
          <ImageButton
            title={`${'RECOMMENDED\nFOR YOU'}`}
            style={styles.imagebutton}
          />
        </View>
        <SectionImageButton />
        <PopularSkills {...props} />
        <Paths
          title="Paths"
          {...props}
          OnPress={() => props.navigation.push(ScreenKey.ListOfListPaths)}
        />
        <TopAuthors title="Top Authors" {...props} />
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
  imagebutton: {
    marginBottom: 15,
    marginRight: 15,
  },
});
export default Browse;
