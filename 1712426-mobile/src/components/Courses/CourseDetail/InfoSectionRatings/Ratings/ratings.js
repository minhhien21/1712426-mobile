import React, {useState, useContext, useCallback,useEffect} from 'react';
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
  ScrollView
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
  const courseContext = useContext(CourseContext);
  const listRatings =
    courseContext.state.DetailCourse.payload.ratings.ratingList;
  const courseId = courseContext.state.DetailCourse.payload.id;

  const onPressButtonRating = () => {
    if (comment.trim() == '') {
      Alert.alert('Bạn chưa viết bất kì bình luận nào');
    } else {
      const res = apiRatingCourse(
        authContext.state.token,
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
        });
    }
  };
  const wait = (timeout) => {
    return new Promise((resolve) => {
      setTimeout(resolve, timeout);
    });
  };
  const onRefresh = () => {
    setRefreshing(true);
    courseContext.requestDetailCourse(courseId, authContext.state.userInfo.id);
    setComment('');
    setPointRating(3);
    wait(500).then(() => setRefreshing(false));
  };

  return (
    <ScrollView style={styles.container} 
    refreshControl={
      <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
    }>
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
        data={listRatings}
        renderItem={({item}) => <RatingsItem item={item} />}
      />
    </ScrollView>
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
