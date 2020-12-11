import React, {useState, useContext, useCallback} from 'react';
import {Rating} from 'react-native-elements';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
  Alert,
  RefreshControl,
} from 'react-native';
import {CourseContext} from '../../../../../provider/course-provider';
import RatingsItem from '../RatingsItem/ratings-item';
import {apiRatingCourse} from '../../../../../core/service/course-service';
import { AuthenticationContext } from '../../../../../provider/authentication-provider';
const Ratings = (props) => {
  const [pointRating, setPointRating] = useState(3);
  const [comment, setComment] = useState('');
  const [refreshing, setRefreshing] = useState(false);

  const authContext = useContext(AuthenticationContext);
  //authContext.state.token
  //authContext.state.userInfo.id
  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImMxMDU0YTJiLTA3ODItNDc2OS04OWY5LTI5ZWE3YjMzMGI4OSIsImlhdCI6MTYwNzcxNzI0NCwiZXhwIjoxNjA3NzI0NDQ0fQ.ZQUdn3mrb_7QEX6oyUNuyvsBOKrNU77jnzNYo8AkO18';
  const courseContext = useContext(CourseContext);
  const listRatings =
    courseContext.state.DetailCourse.payload.ratings.ratingList;
  const courseId = courseContext.state.DetailCourse.payload.id;
  const onPressButtonRating = () => {
    if (comment.trim() == '') {
      Alert.alert('Bạn chưa viết bất kì bình luận nào');
    } else {
      const res = apiRatingCourse(
        token,
        courseId,
        pointRating,
        pointRating,
        pointRating,
        comment,
      );
      res
        .then((response) => {
          Alert.alert(
            'Đánh giá thành công',
            '',
            [{text: 'OK', onPress: () => onRefresh()}],
            {cancelable: false},
          );
        })
        .catch((error) => {
          Alert.alert(error.response.data.message);
          throw error;
        });
    }
  };

  const wait = (timeout) => {
    return new Promise((resolve) => {
      setTimeout(resolve, timeout);
    });
  };
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    courseContext.state.isRequestedDetail = false;
    useEffect(() => {
      if (!courseContext.state.isRequestedDetail) {
        courseContext.requestDetailCourse(
          courseId,
          'c1054a2b-0782-4769-89f9-29ea7b330b89',
        );
      }
    }, [courseContext.state.isRequestedDetail]);
    wait(1000).then(() => setRefreshing(false));
  }, []);

  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', marginTop: 20, marginHorizontal: 10, alignItems:'center'}}>
        <Text style={styles.text} multiline={true}>
          Rating:
        </Text>
        <Rating
          type="custom"
          ratingBackgroundColor="darkgray"
          tintColor="#0e0f13"
          imageSize={20}
          startingValue={pointRating}
          onFinishRating={(pointRating) => setPointRating(pointRating)}
          style={{paddingLeft: 5}}
        />
      </View>
      <View style={{marginTop: 10, marginHorizontal: 10}}>
        <TextInput
          value={comment}
          onChangeText={(comment) => setComment(comment)}
          style={styles.textinput}
          placeholder="Comment here"
          placeholderTextColor="white"
          multiline={true}
        />
      </View>

      <TouchableOpacity style={[styles.button, {alignSelf: 'flex-end'}]}>
        <Text style={styles.buttontext} onPress={onPressButtonRating}>
          Comment
        </Text>
      </TouchableOpacity>

      <FlatList
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        data={listRatings}
        renderItem={({item}) => <RatingsItem item={item} />}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0e0f13',
  },
  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  textinput: {
    height: 60,
    width: '100%',
    borderColor: '#676a6f',
    backgroundColor: '#1f242a',
    borderWidth: 1,
    color: 'white',
    paddingLeft: 15,
  },
  button: {
    marginTop: 10,
    marginRight: 10,
    backgroundColor: '#026f9b',
    borderRadius: 10,
  },
  buttontext: {
    paddingHorizontal: 10,
    margin: 10,
    textAlign: 'center',
    color: 'white',
  },
});
export default Ratings;
