import React, {useState} from 'react';
import {ScrollView, StyleSheet, View, Text} from 'react-native';
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
      <ScrollView horizontal={true}>
        {renderListItems(popularskills)}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0e0f13',
  },
  text: {
    color: 'white',
    fontSize: 20,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
  },
});
export default PopularSkills;
