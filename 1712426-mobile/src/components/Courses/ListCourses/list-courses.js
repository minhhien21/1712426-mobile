import React from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import {ScreenKey} from '../../../globals/constants';
import ListCoursesItem from '../ListCoursesItem/list-courses-item';
const ListCourses = (props) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={props.data}
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
});
export default ListCourses;
