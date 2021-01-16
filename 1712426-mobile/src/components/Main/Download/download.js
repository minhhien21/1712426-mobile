import React, {useState, useContext, useEffect, useLayoutEffect} from 'react';
import {
  StyleSheet,
  View,
  RefreshControl,
  TouchableOpacity,
  Text,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import ListCourses from '../../Courses/ListCourses/list-courses';
import RNFetchBlob from 'rn-fetch-blob';
import ListCourseDownload from './ListCourseDownload/list-course-download';
import AsyncStorage from '@react-native-community/async-storage';
const Download = (props) => {
  // RNFetchBlob.fs.readFile("/data/user/0/com.pluralsightapp/files/IdCourse1=", 'utf8')
  // .then(data => {
  //   console.log("data:",data);
  // })
  // .catch(error => {
  //   console.log("error:",error);
  // })
  const [refreshing, setRefreshing] = useState(false);
  const [listDownload, setListDownload] = useState([]);
  const [dataCourse, setDataCourse] = useState([]);
  const [count, setCount] = useState(0);
  AsyncStorage.getItem('listCourseDownload')
    .then((value) => {
      if(value == null){
      }else{
        setListDownload(JSON.parse(value));
        
      }
    })
    .catch((error) => {
      console.log("error:",error);
    });
  console.log('listDownload', listDownload.length);
  listDownload.forEach((element) => {
    console.log('element.id', element.id)
    if(count <= listDownload.length - 1){
    AsyncStorage.getItem(`detailCourse=${element.id}`)
    .then(async(value) => {
      const detailCourseJson = await JSON.parse(value);
      // await setDataCourse(prevItems => [...prevItems, {
      //   course: detailCourseJson
      // }])
      await setDataCourse([...dataCourse, {course: detailCourseJson}]);
      await setCount(count + 1);
    })
    .catch((error) => {
      console.log("error:",error);
    });
    console.log('dataCourse', dataCourse.length);
  }
  });
  const wait = (timeout) => {
    return new Promise((resolve) => {
      setTimeout(resolve, timeout);
    });
  };
  const onRefresh = () => {
    setRefreshing(true);
    wait(1000).then(() => setRefreshing(false));
  };
  return (
    <View style={styles.container}>
      <View style={styles.viewHeader}>
        <Text style={styles.text}>{listDownload.length} courses</Text>
        <TouchableOpacity>
          <Text style={styles.textButton}>REMOVE ALL</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <ListCourseDownload {...props} data={dataCourse} />
      </ScrollView>
    </View>
  );
};
{
  /* <ScrollView
refreshControl={
  <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
}>
<ListCourseDownload {...props} data={dataCourse} />
</ScrollView> */
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0e0f13',
  },
  viewHeader: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginHorizontal: 20,
    marginTop: 30,
  },
  view: {
    marginLeft: 15,
  },
  text: {
    color: 'white',
    alignSelf: 'center',
    fontSize: 20,
  },
  textButton: {
    color: '#026f9b',
    fontSize: 20,
  },
});
export default Download;
