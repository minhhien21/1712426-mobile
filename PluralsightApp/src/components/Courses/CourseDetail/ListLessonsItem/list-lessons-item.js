import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import ListContentLessonItem from './ListContentLessonItem/list-content-lesson-item';
const ListLessonsItem = (props) => {
  var lesson = props.item.detailLesson;
  console.log(lesson, 'minhhien');
  const renderListItems = (lesson) => {
    return lesson.map((item) => <ListContentLessonItem item={item} />);
  };
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.viewText}>{props.item.id}</Text>
        <View style={{marginLeft: 15}}>
          <Text style={styles.viewText}>{props.item.nameLesson}</Text>
          <Text style={styles.darktext}>{props.item.totalTime}</Text>
        </View>
      </View>
      <ScrollView>{renderListItems(lesson)}</ScrollView>
      <Text style={styles.text}></Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  viewText: {
    color: 'white',
  },
  darktext: {
    color: 'darkgray',
  },
  text: {
    borderWidth: 1,
    borderBottomColor: '#1f242a',
  },
});
export default ListLessonsItem;
