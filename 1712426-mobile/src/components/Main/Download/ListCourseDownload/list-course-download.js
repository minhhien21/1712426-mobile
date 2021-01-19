import React from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import { ScreenKey } from '../../../../globals/constants';
import ListCourseDownloadItem from '../ListCourseDownloadItem/list-course-download-item'
const ListCourseDownload = (props) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={props.data}
        renderItem={({item}) => (
          <ListCourseDownloadItem
            navigation={props.navigation}
            item={item}
            OnPressListenItem={() =>
              props.navigation.push(ScreenKey.CourseDetailDL, {item: item})
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
