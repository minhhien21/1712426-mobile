import React, {useState} from 'react';
import {ScrollView, StyleSheet, View, Text,FlatList} from 'react-native';
import { ScreenKey } from '../../../../globals/constants';
import PopularSkillsItem from '../PopularSkillsItem/popular-skills-item';

const PopularSkills = (props) => {
  const popularskills = [
    'Angular',
    'JavaScript',
    'C#',
    'Java',
    'Data Analysis',
    'ASP.NET',
    'Node.js',
    'Design Patterns',
    'Python',
    'React',
    '.NET',
    'SQL Server',
    'Database Administration',
    'Part Modeling',
    'Informationi Security',
    'Java Script',
    'ASP.NET Core',
    'TypeScript',
    'Machine Learning',
    'Android',
  ];
  const renderListItems = (popularskills) => {
    return popularskills.map((item) => <PopularSkillsItem item={item} />);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Popular Skills</Text>
      <FlatList
        data={popularskills}
        horizontal={true}
        renderItem={({item}) => (
          <PopularSkillsItem
            navigation={props.navigation}
            item={item}
            OnPressListenItem={() =>
              props.navigation.push(ScreenKey.PopularSkillsDetail, {item: item})
            }
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
