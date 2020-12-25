import React, {useState, useContext, useEffect} from 'react';
import {
  RefreshControl,
  ScrollView,
  StyleSheet,
  View,
  ActivityIndicator,
  Alert,
} from 'react-native';
import { AuthenticationContext } from '../../../provider/authentication-provider';
import {CourseContext} from '../../../provider/course-provider';
import SectionCourses from './SectionCourses/section-courses';
import SectionCoursesFP from './SectionCoursesFP/section-courses-fp';
const Home = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const courseContext = useContext(CourseContext);
  const authContext = useContext(AuthenticationContext);
  const token = authContext.state.token;

  //const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImMxMDU0YTJiLTA3ODItNDc2OS04OWY5LTI5ZWE3YjMzMGI4OSIsImlhdCI6MTYwODYyMTc4NywiZXhwIjoxNjA4NjI4OTg3fQ.6kKLTg4QHxKaibYMj6Wl3ay2h4u4SCNcHW3BjzF01K0";

  // top sell course
  useEffect(() => {
    if (!courseContext.state.isRequestedTopSell) {
      courseContext.requestTopSellListCourse(10, 1);
    }
  }, [courseContext.state.isRequestedTopSell]);
  // top new course
  useEffect(() => {
    if (!courseContext.state.isRequestedTopNew) {
      courseContext.requestTopNewListCourse(20, 1);
    }
  }, [courseContext.state.isRequestedTopNew]);
  // top rate course
  useEffect(() => {
    if (!courseContext.state.isRequestedTopRate) {
      courseContext.requestTopRateListCourse(20, 1);
    }
  }, [courseContext.state.isRequestedTopRate]);
  // top favorite course
  useEffect(() => {
    if (!courseContext.state.isRequestedFavorite) {
      courseContext.requestFavoriteListCourse(20, 1);
    }
  }, [courseContext.state.isRequestedFavorite]);
  // user favorite course
  useEffect(() => {
    if (!courseContext.state.isRequestedUserFavoriteCourse) {
      courseContext.requestUserFavoriteCourse(token);
    }
  }, [courseContext.state.isRequestedUserFavoriteCourse]);
  // user process course
  useEffect(() => {
    if (!courseContext.state.isRequestedUserProcessCourse) {
      courseContext.requestUserProcessCourse(token);
    }
  }, [courseContext.state.isRequestedUserProcessCourse]);
  const wait = (timeout) => {
    return new Promise((resolve) => {
      setTimeout(resolve, timeout);
    });
  };
  const onRefresh = () => {
    setRefreshing(true);
    courseContext.requestTopSellListCourse(20, 1);
    courseContext.requestTopNewListCourse(20, 1);
    courseContext.requestTopRateListCourse(20, 1);
    courseContext.requestFavoriteListCourse(20, 1);
    courseContext.requestUserFavoriteCourse(token);
    courseContext.requestUserProcessCourse(token);
    wait(1000).then(() => setRefreshing(false));
  };
  //{isLoading && <ActivityIndicator size="large" color='#ff0000'/>}
  return (
    <ScrollView
      style={styles.container}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      <View style={styles.view}>
        <SectionCourses
          title="Top sell"
          {...props}
          data={courseContext.state.TopSellListCourse.payload}
        />
        <SectionCourses
          title="Top new"
          {...props}
          data={courseContext.state.TopNewListCourse.payload}
        />
        <SectionCourses
          title="Top rate"
          {...props}
          data={courseContext.state.TopRateListCourse.payload}
        />
        <SectionCourses
          title="Favorite"
          {...props}
          data={courseContext.state.FavoriteListCourse.payload}
        />
        <SectionCoursesFP
          title="User Favorite Course"
          {...props}
          data={courseContext.state.UserFavoriteCourse.payload}
        />
        <SectionCoursesFP
          title="User Process Course"
          {...props}
          data={courseContext.state.UserProcessCourse.payload}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0e0f13',
  },
  view: {
    marginLeft: 15,
  },
});
export default Home;
