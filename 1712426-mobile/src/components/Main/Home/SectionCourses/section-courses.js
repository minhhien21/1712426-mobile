import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {ScreenKey} from '../../../../globals/constants';
import FlatListCourses from '../../../Common/flatlist-courses';
const SectionCourses = (props) => {
  const onPressListCourses = () => {
    props.navigation.push(ScreenKey.ViewListCourses, {
      title: props.title,
      item: props.data
    });
  };
  return (
    <View style={styles.container}>
      <View style={styles.view}>
        <Text style={styles.textHeader}>{props.title}</Text>
        <TouchableOpacity onPress={onPressListCourses}>
          <Text style={styles.text}>See all{'>'}</Text>
        </TouchableOpacity>
      </View>
      <FlatListCourses data={props.data} {...props} />
    </View>
  );
};

  /* <FlatList data={courses} horizontal={true}
      renderItem={({item}) => (
        <SectionCoursesItem
          navigation={props.navigation}
          item={item}
          OnPressListenItem={() =>
            props.navigation.push(ScreenKey.CourseDetail, {item: item})
          }
        />
      )}/> */

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  view: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 25,
    marginBottom: 10,
  },
  textHeader: {
    color: 'white',
    fontSize: 20,
  },
  text: {
    color: 'darkgray',
    alignSelf: 'center',
  },
});
export default SectionCourses;
