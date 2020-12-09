import React, {useState} from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {ScreenKey} from '../../../globals/constants';
import ListCoursesItem from '../ListCoursesItem/list-courses-item';
const ListCourses = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.navigation.state.params.title}</Text>
      <FlatList
        data={props.navigation.state.params.data}
        renderItem={({item}) => (
          <ListCoursesItem
            navigation={props.navigation}
            item={item}
            OnPressListenItem={() =>
              props.navigation.push(ScreenKey.CourseDetail, {item: item})
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
    flex: 1,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
    marginTop: 15,
    marginLeft: 25,
    marginBottom: 25,
  },
});
export default ListCourses;
