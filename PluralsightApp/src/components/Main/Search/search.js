import React, {useState} from 'react';
import {ScrollView, SectionList, StyleSheet, View, TextInput} from 'react-native';

import ListCourses from '../../Courses/ListCourses/list-courses';
import ListPaths from '../../Paths/ListPaths/list-paths';
import ListAuthor from '../../Authors/ListAuthors/list-authors'
const Search = (props) => {
  return (
    <ScrollView style={styles.container}>
      <View style={{backgroundColor: '#181b20'}}>
        <TextInput style={styles.inputText} placeholder="Search..." placeholderTextColor='white'/>
      </View>
      <ListCourses {...props}/> 
      <ListPaths />
      <ListAuthor {...props}/>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0e0f13',
  },
  inputText: {
    borderWidth: 1,
    borderBottomColor: '#1f242a',
    borderColor: '#181b20',
    color: 'white',
    margin: 10,
    padding: 5
  },
});
export default Search;
