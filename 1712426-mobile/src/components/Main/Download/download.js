import React, {useState, useContext, useEffect, useLayoutEffect} from 'react';
import {
  StyleSheet,
  View,
  AsyncStorage,
  RefreshControl,
  TouchableOpacity,
  Text,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import ListCourses from '../../Courses/ListCourses/list-courses';
import RNFetchBlob from 'rn-fetch-blob';
import ListCourseDownload from './ListCourseDownload/list-course-download';
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
  // useLayoutEffect(async () => {
  //   const listCourseDL = await AsyncStorage.getItem('listCourseDownload');
  //   setListDownload(JSON.parse(listCourseDL));
  // }, []);
  console.log('listDownload', listDownload);
  // listDownload.forEach(async (element) => {
  //   // RNFetchBlob.fs
  //   //   .readFile('/data/user/0/com.pluralsightapp/files/IdCourse=' + element.id, 'utf8')
  //   //   .then((data) => {
  //   //     console.log('data:', data);
  //   //     const JsonData = JSON.parse(data);
  //   //     console.log('data.payload:', JsonData.payload);
  //   //     const newDataCourse = dataCourse.push({course:JsonData.payload});
  //   //     setDataCourse(newDataCourse);
  //   //   })
  //   //   .catch(error => {
  //   //      console.log("error:",error);
  //   //     });

  //   // console.log("element.id:",element.id);
  //   // const data = await AsyncStorage.getItem('detailCourse=' + element.id);
  //   // console.log('data:', data);
  //   // setDataCourse(dataCourse.push(data));
  //   const detailCourse = await AsyncStorage.getItem(`detailCourse=${element.id}`);
  //   const detailCourseJson = await JSON.parse(detailCourse);
  //   const newDataCourse = dataCourse.push(detailCourseJson);
  //   setDataCourse(dataCourse.push({course:detailCourseJson}));
  //   console.log('dataCourse', dataCourse);
  // });
  console.log('dataCourse1', dataCourse);
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

    </View>
  );
};
{/* <ScrollView
refreshControl={
  <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
}>
<ListCourseDownload {...props} data={dataCourse} />
</ScrollView> */}
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
