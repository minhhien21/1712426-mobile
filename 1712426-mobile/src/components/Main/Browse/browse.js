import React, {useState,useContext, useEffect} from 'react';
import {ScrollView, StyleSheet, View, Alert} from 'react-native';
import ImageButton from '../../Common/image-button';
import PopularSkills from './PopularSkills/popular-skills';
import SectionImageButton from './SectionImageButton/section-image-button';
import Paths from './Paths/paths';
import TopAuthors from './TopAuthors/top-authors';
import {ScreenKey} from '../../../globals/constants';
import { CategoryContext } from '../../../provider/category-provider';
import { apiGetListCourseWithCategoryId } from '../../../core/service/category-service';

const Browse = (props) => {
  const categoryContext = useContext(CategoryContext);
  // get all category
  useEffect(() => {
    if (!categoryContext.state.isRequestedGetAllCategory) {
      categoryContext.requestGetAllCategory();
    }
  }, [categoryContext.state.isRequestedGetAllCategory]);
  return (
    <ScrollView style={styles.container}>
      <View style={styles.view}>
        <View style={styles.imagebutton}>
          <ImageButton
            title={`${'NEW\nRELEASES'}`}
            OnPressListenItem={() =>
              props.navigation.push(ScreenKey.NewReleases)
            }
          />
        </View>
        <View style={styles.imagebutton}>
          <ImageButton
            title={`${'RECOMMENDED\nFOR YOU'}`}
            style={styles.imagebutton}
            OnPressListenItem={() =>
              props.navigation.push(ScreenKey.NewReleases)
            }
          />
        </View>
        <SectionImageButton />
        <PopularSkills {...props} data={categoryContext.state.ListCategory.payload}/>
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
    flex: 1,
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
