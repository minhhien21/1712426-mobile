import React, {useState} from 'react';
import {
  ScrollView,
  SectionList,
  StyleSheet,
  View,
  TextInput,
  Text,
} from 'react-native';

import ListCourses from '../../Courses/ListCourses/list-courses';
import ListPaths from '../../Paths/ListPaths/list-paths';
import ListAuthors from '../../Authors/ListAuthors/list-authors';
const Search = (props) => {
  return (
    <ScrollView style={styles.container}>
      <View style={{backgroundColor: '#181b20'}}>
        <TextInput
          style={styles.inputText}
          placeholder="Search..."
          placeholderTextColor="white"
        />
      </View>
      <View style={styles.tabContainer}>
        <View>
          <Text>All</Text>
        </View>
        <View>
          <Text>Courses</Text>
        </View>
        <View>
          <Text>Paths</Text>
        </View>
        <View>
          <Text>Authors</Text>
        </View>
      </View>
      <Text style={styles.text}>Courses</Text>
      <ListCourses {...props} />
      <Text style={styles.text}>Paths</Text>
      <ListPaths {...props} />
      <Text style={styles.text}>Authors</Text>
      <ListAuthors {...props} />
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
    padding: 5,
  },
  tabContainer: {
    backgroundColor: 'white',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    height: '20%',
    alignItems: 'center',
    marginTop: 10,
    height: 40,
  },
  text: {
    color: 'white',
    fontSize: 20,
    marginTop: 10,
    marginLeft: 10,
    marginBottom: 10,
  },
});
export default Search;
