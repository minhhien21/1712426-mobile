import React, {useContext, useState, useEffect, useLayoutEffect} from 'react';
import {Rating} from 'react-native-elements';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
  Share,
  Alert,
} from 'react-native';
import {ScreenKey} from '../../../../globals/constants';
import {InstructorContext} from '../../../../provider/instructor-provider';
import {
  apiGetCourseLikeStatus,
  apiLikeCourse,
} from '../../../../core/service/user-service';
import {AuthenticationContext} from '../../../../provider/authentication-provider';
import {CourseContext} from '../../../../provider/course-provider';
import RNFetchBlob from 'rn-fetch-blob';
import AsyncStorage from '@react-native-community/async-storage';
import {apiLessonDetail} from '../../../../core/service/lesson-service';
const InfoCourse = (props) => {
  const [listDownload, setListDownload] = useState([]);
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
  }, [checkGetList]);

  const courseContext = useContext(CourseContext);
  const data = courseContext.state.DetailCourse.payload;
  const listSection = data.section;
  const instructorContext = useContext(InstructorContext);
  const dataInstructor = instructorContext.state.DetailInstructor.payload;

  const [colorLike, setColorLike] = useState('white');
  const [statusLike, setStatusLike] = useState('Like');
  const [downloadProgress, setDownloadProgress] = useState('Download');
  const [statusDownload, setStatusDownload] = useState(false);
  const authContext = useContext(AuthenticationContext);
  const res = apiGetCourseLikeStatus(
    authContext.state.token,
    props.navigation.state.params.item.id,
  );
  res
    .then((response) => {
      if (response.data.likeStatus == true) {
        setColorLike('red');
        setStatusLike('UnLike');
      }
    })
    .catch((error) => {
      console.log('error:', error.response.data.message);
      throw error;
    });

  const createdAt = String(data.createdAt).split('T');
  const convertDate = String(createdAt[0]).split('-');
  const totalHours = parseFloat(data.totalHours);
  const hour = parseInt(totalHours);
  const convertMinute = 60 * (totalHours - hour);
  const minute = parseInt(convertMinute);

  let formalityPoint = 0;
  let contentPoint = 0;
  let presentationPoint = 0;
  if (data.formalityPoint != null) {
    formalityPoint = parseFloat(data.formalityPoint);
  }
  if (data.contentPoint != null) {
    contentPoint = parseFloat(data.contentPoint);
  }
  if (data.presentationPoint != null) {
    presentationPoint = parseFloat(data.presentationPoint);
  }
  const averagePoint = (formalityPoint + contentPoint + presentationPoint) / 3;

  const OnPressAuthorDetail = () => {
    props.navigation.push(ScreenKey.AuthorDetail, {id: data['instructorId']});
  };

  // like or unlike course
  const onPressLikeUnLike = () => {
    const callApi = apiLikeCourse(
      authContext.state.token,
      props.navigation.state.params.item.id,
    );
    callApi
      .then((response) => {
        if (response.data.likeStatus == true) {
          setColorLike('red');
          setStatusLike('UnLike');
        } else {
          setColorLike('white');
          setStatusLike('Like');
        }
      })
      .catch((error) => {
        Alert.alert(error.response.data.message);
        throw error;
      });
  };
  // share
  const onShare = async () => {
    //await AsyncStorage.setItem("listCourseDownload",JSON.stringify([]));

    try {
      const result = await Share.share({
        message: data.title,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };
  //download
  const handleDownload = async () => {
    if (String(data.promoVidUrl).indexOf('youtube.com') == -1) {
      if (String(data.promoVidUrl).indexOf('.mp4') != -1) {
        let dirs = RNFetchBlob.fs.dirs;
        await RNFetchBlob.config({
          path: dirs.DocumentDir + '/IdCourse=' + data.id + '/PromoVidUrl',
          fileCache: true,
          appendExt: 'mp4',
        })
          .fetch(
            'GET',
            data.promoVidUrl,
          )
          .then(async (response) => {
            console.log('The file saved to ', response.path());
            console.log('download success');
          })
          .catch((error) => {
            console.log("download:", error);
            setStatusDownload(true);
          });
      }
    }
    console.log('download');
    listSection.map((itemSection) => {
      const listLesson = itemSection.lesson;
      listLesson.map(async (lesson) => {
        const res = apiLessonDetail(
          authContext.state.token,
          data.id,
          lesson.id,
        );
        res
          .then(async(response) => {
            const videoUrl = response.data.payload.videoUrl;
            if (String(videoUrl).indexOf('youtube.com') == -1) {
              if (String(videoUrl).indexOf('.mp4') != -1) {
                let dirs = RNFetchBlob.fs.dirs;
                await RNFetchBlob.config({
                  path: dirs.DocumentDir + '/IdCourse=' + data.id + '/IdLesson=' + lesson.id,
                  fileCache: true,
                  appendExt: 'mp4',
                })
                  .fetch(
                    'GET',
                    videoUrl,
                  )
                  .then(async (response) => {
                    console.log('The file saved to ', response.path());
                    console.log('download success');
                  })
                  .catch((error) => {
                    console.log("download:", error);
                    setStatusDownload(true);
                  });
              }
            }
          })
          .catch((error) => {
            console.log("get lesson detail:", error);
            setStatusDownload(true);
            throw error;
          });
      });
    });

    if(statusDownload == true){
      Alert.alert(
        'Download failed',
        '',
        [
          { text: 'OK'}
        ],
        { cancelable: false }
      );
    }else{
      setListDownload(listDownload.push({course: data}));
      await AsyncStorage.setItem("listCourseDownload",JSON.stringify(listDownload));
      setDownloadProgress("Success");
      Alert.alert(
        'Download Success',
        '',
        [
          { text: 'OK'}
        ],
        { cancelable: false }
      );
    }
    //await AsyncStorage.setItem(`detailCourse=${data.id}`,JSON.stringify(data));
    // let dirs = RNFetchBlob.fs.dirs;
    // await RNFetchBlob.config({
    //   path: dirs.DocumentDir + '/IdCourse=' + data.id,
    //   fileCache: true,
    // })
    // .fetch('GET', `http://api.dev.letstudy.org/course/get-course-detail/${data.id}/${authContext.state.userInfo.id}`)
    // .progress({count: 10}, (received, total)=> {
    //   const downloadTime = Math.floor(received/total*100);
    //   setDownloadProgress(downloadTime);
    // })
    // .then(async response => {
    //   console.log('The file saved to ', response.path());
    //   console.log('download success');
    //   setListDownload(listDownload.push({id:data.id}));
    //   console.log("listDownload:",listDownload);
    //   await AsyncStorage.setItem("listCourseDownload",JSON.stringify(listDownload));
    // })
    // .catch(error => {
    //   Alert.alert(
    //     'Download course  ',
    //     'Failed to download' + error,
    //     [
    //       { text: 'OK'}
    //     ],
    //     { cancelable: false }
    //   );
    // })
  };
  const viewRequirement = () => {
    if (data.requirement === null) {
      return <Text style={styles.itemContent}>Null</Text>;
    } else {
      return (
        <View>
          {data.requirement.map((item) => (
            <Text style={styles.itemContent}>{`${'+ '}${item}`}</Text>
          ))}
        </View>
      );
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.item}>
        <Text style={styles.textHeader}>{data.title}</Text>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            styles={styles.imageButton}
            onPress={OnPressAuthorDetail}>
            <View style={styles.imageButton}>
              <Image
                source={{
                  uri: data.instructor['avatar'],
                }}
                style={styles.image}
              />
              <Text style={styles.textImage}>{data.instructor['name']}</Text>
            </View>
          </TouchableOpacity>
        </View>
        <Text style={styles.darktext}>{`${'Giá: '}${data.price}`}</Text>
        <Text style={styles.darktext}>{`${'Trạng thái: '}${data.status}`}</Text>
        <View
          style={{flexDirection: 'row', marginTop: 10, alignItems: 'center'}}>
          <Text style={{color: 'darkgray'}}>
            {`${convertDate[2]}-${convertDate[1]}-${
              convertDate[0]
            } . ${hour}${'h '}${minute}${'m'}`}
          </Text>
          <Rating
            type="custom"
            ratingBackgroundColor="darkgray"
            tintColor="#1f242a"
            imageSize={22}
            startingValue={averagePoint}
            style={{marginLeft: 10}}
          />
          <Text style={{color: 'darkgray', marginLeft: 5}}>
            ({data.ratedNumber})
          </Text>
        </View>

        <View style={styles.iconView}>
          <TouchableOpacity onPress={onPressLikeUnLike}>
            <View>
              <View style={styles.viewImage}>
                <Image
                  source={require('../../../../../assets/like.png')}
                  style={styles.icon}
                  tintColor={colorLike}
                />
              </View>
              <Text style={styles.textIcon}>{statusLike}</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleDownload}>
            <View>
              <View style={styles.viewImage}>
                <Image
                  source={require('../../../../../assets/download.png')}
                  style={styles.icon}
                />
              </View>
              <Text style={styles.textIcon}>{downloadProgress}</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={onShare}>
            <View>
              <View style={styles.viewImage}>
                <Image
                  source={require('../../../../../assets/share.png')}
                  style={styles.icon}
                />
              </View>
              <Text style={styles.textIcon}>Share</Text>
            </View>
          </TouchableOpacity>
        </View>
        <Text style={[styles.content, {marginTop: 25}]}>
          - subtitle: {data.subtitle}
        </Text>
        <Text style={styles.content}>- description: {data.description}</Text>
        <Text style={styles.content}>- requirement:</Text>
        {viewRequirement()}
        <Text style={styles.content}>- learnWhat:</Text>
        {data.learnWhat.map((item) => (
          <Text style={styles.itemContent}>{`${'+ '}${item}`}</Text>
        ))}
        <TouchableOpacity style={styles.button}>
          <View style={{flexDirection: 'row', alignSelf: 'center'}}>
            <Image
              source={require('../../../../../assets/check.png')}
              style={styles.icon}
            />
            <Text style={styles.textButton}>Take a learning check</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <View style={{flexDirection: 'row', alignSelf: 'center'}}>
            <Image
              source={require('../../../../../assets/view-list.png')}
              style={styles.icon}
            />
            <Text style={styles.textButton}>View related paths & courses</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1f242a',
  },
  item: {
    marginHorizontal: 15,
  },
  textHeader: {
    color: 'white',
    fontSize: 25,
  },
  button: {
    marginTop: 15,
    backgroundColor: '#3a434a',
    width: '100%',
  },
  textButton: {
    color: 'white',
    textAlign: 'center',
    paddingVertical: 10,
    marginLeft: 10,
  },
  imageButton: {
    marginTop: 15,
    backgroundColor: '#394249',
    marginRight: 10,
    height: 30,
    borderRadius: 15,
    flexDirection: 'row',
  },
  image: {
    height: 30,
    width: 30,
    borderRadius: 15,
  },
  textImage: {
    color: 'white',
    alignSelf: 'center',
    padding: 5,
    justifyContent: 'center',
  },
  iconView: {
    flexDirection: 'row',
    marginTop: 15,
    marginHorizontal: 30,
    justifyContent: 'space-around',
  },
  view: {
    borderWidth: 1,
    borderColor: 'white',
  },
  viewImage: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: '#394249',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  icon: {
    height: 30,
    width: 30,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  textIcon: {
    color: 'white',
    textAlign: 'center',
  },
  viewText: {
    width: '75%',
    padding: 15,
  },
  title: {
    color: 'white',
  },
  darktext: {
    marginTop: 10,
    color: 'darkgray',
  },
  content: {
    color: 'white',
  },
  itemContent: {
    color: 'white',
    marginLeft: 20,
  },
});
export default InfoCourse;
