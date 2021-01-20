import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
const ListExerciseLessonItem = (props) => {
  return (
    <TouchableOpacity style={styles.item}>
      <View>
        <Text style={styles.title}>{props.item.title}</Text>
        <Text style={styles.title}>{props.item.numberQuestion}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    marginRight: 15,
    width: 200,
    height: 200,
    backgroundColor: '#1f242a',
  },
  title: {
    paddingLeft: 5,
    color: 'white',
  },
});
export default ListExerciseLessonItem;
