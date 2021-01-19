import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import ListCourseLikeCategoryItem from '../ListCourseLikeCategoryItem/list-course-like-category-item';
const ListCourseLikeCategory = (props) => {
  const onPressListCourses = () => {
    // props.navigation.push(ScreenKey.ViewListCourses, {
    //   title: props.title,
    //   item: props.data
    // });
  };
  return (
    <View style={styles.container}>
      <View style={styles.view}>
        <Text style={styles.textHeader}>{props.title}</Text>
        <TouchableOpacity onPress={onPressListCourses}>
          <Text style={styles.text}>See all{'>'}</Text>
        </TouchableOpacity>
      </View>
      <FlatList data={props.dataCourse} horizontal={true}
      renderItem={({item}) => (
        <ListCourseLikeCategoryItem
          item={item}
        />
      )}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0e0f13',
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
export default ListCourseLikeCategory;
