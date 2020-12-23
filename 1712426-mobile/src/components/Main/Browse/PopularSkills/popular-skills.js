import React, {useState, useContext} from 'react';
import {ScrollView, StyleSheet, View, Text,FlatList} from 'react-native';
import { apiGetListCourseWithCategoryId } from '../../../../core/service/category-service';
import { ScreenKey } from '../../../../globals/constants';
import { CategoryContext } from '../../../../provider/category-provider';
import PopularSkillsItem from '../PopularSkillsItem/popular-skills-item';

const PopularSkills = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Popular Skills</Text>
      <FlatList
        data={props.data}
        horizontal={true}
        renderItem={({item}) => (
          <PopularSkillsItem
            navigation={props.navigation}
            item={item}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0e0f13',
    marginRight: 15,
  },
  text: {
    color: 'white',
    fontSize: 20,
    marginTop: 10,
    marginBottom: 10,
  },
});
export default PopularSkills;
