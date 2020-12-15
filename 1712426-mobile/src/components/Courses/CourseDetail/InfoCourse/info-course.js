import React, {useContext, useState, useEffect} from 'react';
import {Rating} from 'react-native-elements';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {ScreenKey} from '../../../../globals/constants';
import {InstructorContext} from '../../../../provider/instructor-provider';
import {
  apiGetCourseLikeStatus,
  apiLikeCourse,
} from '../../../../core/service/user-service';
import {AuthenticationContext} from '../../../../provider/authentication-provider';
import {CourseContext} from '../../../../provider/course-provider';
const InfoCourse = (props) => {
  
  
  const courseContext = useContext(CourseContext);
  const data = courseContext.state.DetailCourse.payload;
  
  const instructorContext = useContext(InstructorContext);
  // instructorContext.state.isRequestedDetailInstructor = false;
  // useEffect(() => {
  //   if (!instructorContext.state.isRequestedDetailInstructor) {
  //     instructorContext.requestDetailInstructor(data.instructorId);
  //   }
  // }, [instructorContext.state.isRequestedDetailInstructor]);
  instructorContext.state.isRequestedDetailInstructor = false;
  instructorContext.requestDetailInstructor(data.instructorId);

  const dataInstructor = instructorContext.state.DetailInstructor.payload;

  const [colorLike, setColorLike] = useState('white');
  const [statusLike, setStatusLike] = useState('Like');
  const authContext = useContext(AuthenticationContext);
  const res = apiGetCourseLikeStatus(authContext.state.token, data.id);
  res
    .then((response) => {
      if (response.data.likeStatus == true) {
        setColorLike('red');
        setStatusLike('UnLike');
      }
    })
    .catch((error) => {
      Alert.alert(error.response.data.message);
      throw error;
    });

  const createdAt = String(data.createdAt).split('T');
  const convertDate = String(createdAt[0]).split('-');
  const totalHours = parseFloat(data.totalHours);
  const hour = parseInt(totalHours);
  const convertMinute = 60 * (totalHours - hour);
  const minute = parseInt(convertMinute);

  const formalityPoint = parseInt(data.formalityPoint);
  const contentPoint = parseInt(data.contentPoint);
  const presentationPoint = parseInt(data.presentationPoint);
  const averagePoint = (formalityPoint + contentPoint + presentationPoint) / 3;

  

  const OnPressAuthorDetail = () => {
    props.navigation.push(ScreenKey.AuthorDetail, {id: data['instructorId']});
  };

  const onPressLikeUnLike = () => {
    const callApi = apiLikeCourse(authContext.state.token, data.id);
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

  const viewRequirement = () => {
    if (data.requirement === null) {
      return <Text style={styles.itemContent}>Null</Text>;
    } else {
      return(
      <View>
        {data.requirement.map((item) => (
          <Text style={styles.itemContent}>{`${'+ '}${item}`}</Text>
        ))}
      </View>);
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
                  uri: dataInstructor.avatar,
                }}
                style={styles.image}
              />
              <Text style={styles.textImage}>{dataInstructor.name}</Text>
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
          <TouchableOpacity>
            <View>
              <View style={styles.viewImage}>
                <Image
                  source={require('../../../../../assets/channel.png')}
                  style={styles.icon}
                />
              </View>
              <Text style={styles.textIcon}>Add to Channel</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View>
              <View style={styles.viewImage}>
                <Image
                  source={require('../../../../../assets/download.png')}
                  style={styles.icon}
                />
              </View>
              <Text style={styles.textIcon}>Download</Text>
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
    marginTop: 200,
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
