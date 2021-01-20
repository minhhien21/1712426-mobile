import React, {useContext} from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';
import {CourseContext} from '../../../../provider/course-provider';
import ListExerciseLessonItem from './ListExerciseLessonItem/list-exercise-lesson-item';
const ListExerciseLesson = (props) => {
  const courseContext = useContext(CourseContext);
  const data = courseContext.state.listExerciseLesson.payload.exercises;
  console.log('dataExercises:', data);
  return (
    <View style={styles.container}>
      <Text style={styles.textHeader}>List Exercise</Text>
      <FlatList
        data={data}
        horizontal={true}
        renderItem={({item}) => (
          <ListExerciseLessonItem navigation={props.navigation} item={item} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0e0f13',
  },
  textHeader: {
    marginTop: 25,
    marginBottom: 10,
    color: 'white',
    fontSize: 20,
  },
});
export default ListExerciseLesson;
