import React, {useState, useContext, useEffect} from 'react';
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
  const [checkGetList, setCheckGetList] = useState(false);
  useEffect(() => {
    AsyncStorage.getItem('listCourseDownload')
    .then((value) => {
      if (value == null) {
      } else {
        setListDownload(JSON.parse(value));
         setCheckGetList(true);
      }
    })
    .catch((error) => {
      console.log('error:', error);
    });
    
  }, [checkGetList])
  listDownload.forEach((element) => {
    if (count <= listDownload.length - 1) {
      AsyncStorage.getItem(`detailCourse=${element.id}`)
        .then((value) => {
          const detailCourseJson = JSON.parse(value);
           setDataCourse([...dataCourse, detailCourseJson]);
        })
        .catch((error) => {
          console.log('error:', error);
        });
        setCount(count + 1);
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
