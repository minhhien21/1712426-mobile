import React from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  Text,
} from 'react-native';
import ListAuthors from '../../../Authors/ListAuthors/list-authors';
import ListCourses from '../../../Courses/ListCourses/list-courses';
import { TabActions } from '@react-navigation/native';
const AllCoursesAuthors = (props) => {
  let dataCourse = [];
  if (props.dataSearch.courses.data.length <= 3) {
    dataCourse = props.dataSearch.courses.data;
  } else {
    dataCourse.push(props.dataSearch.courses.data[0]);
    dataCourse.push(props.dataSearch.courses.data[1]);
    dataCourse.push(props.dataSearch.courses.data[2]);
  }

  let dataInstructor = [];
  if (props.dataSearch.instructors.data.length <= 3) {
    dataInstructor = props.dataSearch.instructors.data;
  } else {
    dataInstructor.push(props.dataSearch.instructors.data[0]);
    dataInstructor.push(props.dataSearch.instructors.data[1]);
    dataInstructor.push(props.dataSearch.instructors.data[2]);
  }

  const onPressChangeTabCourse = () => {
    const jumpToAction = TabActions.jumpTo('COURSES');
    props.navigation.dispatch(jumpToAction);
  };
  return (
    <ScrollView style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 20,
          marginTop: 20,
        }}>
        <Text style={styles.text}>Courses</Text>
        <TouchableOpacity onPress={onPressChangeTabCourse}>
          <Text style={styles.darktext}>
            {`${props.dataSearch.courses.total} Results>`}
          </Text>
        </TouchableOpacity>
      </View>
      <ListCourses data={dataCourse} {...props} />

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 20,
          marginTop: 20,
        }}>
        <Text style={styles.text}>Authors</Text>
        <TouchableOpacity>
          <Text style={styles.darktext}>
            {`${props.dataSearch.instructors.total} Results>`}
          </Text>
        </TouchableOpacity>
      </View>
      <ListAuthors data={dataInstructor} {...props} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0e0f13',
    flex: 1,
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
  darktext: {
    color: 'darkgray',
  },
});
export default AllCoursesAuthors;
