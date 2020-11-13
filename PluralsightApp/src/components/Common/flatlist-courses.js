import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { ScreenKey } from '../../globals/constants';
import SectionCoursesItem from '../Main/Home/SectionCoursesItem/section-courses-item';
const FlatListCourses = (props) => {
    //console.log(props.data,"flatlist-courses.js")
  return (
    <View style={styles.container}>   
      <FlatList data={props.data} horizontal={true}
      renderItem={({item}) => (
        <SectionCoursesItem
          navigation={props.navigation}
          item={item}
          OnPressListenItem={() =>
            props.navigation.push(ScreenKey.CourseDetail, {item: item})
          }
        />
      )}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 10,
  },
  textHeader: {
    color: 'white',
    fontSize: 20,
  },
  text: {
    color: 'darkgray',
    alignSelf: 'center'
  },
});
export default FlatListCourses;
