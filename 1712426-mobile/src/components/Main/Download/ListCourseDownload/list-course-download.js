import React from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import ListCourseDownloadItem from '../ListCourseDownloadItem/list-course-download-item'
const ListCourseDownload = (props) => {
    console.log("list-course-download.js:", props.data);
  return (
    <View style={styles.container}>
      <FlatList
        data={props.data}
        renderItem={({item}) => (
          <ListCourseDownloadItem
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
export default ListCourseDownload;
