import React, {useState, useCallback, useContext, useEffect} from 'react';
import {
  RefreshControl,
  ScrollView,
  StyleSheet,
  View,
  ActivityIndicator,
} from 'react-native';
import {CourseContext} from '../../../provider/course-provider';
import Result from '../Search/Result/result';
import SectionCourses from './SectionCourses/section-courses';
const Home = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const courseContext = useContext(CourseContext);
  useEffect(() => {
    if (!courseContext.state.isRequestedTopSell) {
      courseContext.requestTopSellListCourse(20, 1);
    }
  }, [courseContext.state.isRequestedTopSell]);

  useEffect(() => {
    if (!courseContext.state.isRequestedTopNew) {
      courseContext.requestTopNewListCourse(20, 1);
    }
  }, [courseContext.state.isRequestedTopNew]);

  useEffect(() => {
    if (!courseContext.state.isRequestedTopRate) {
      courseContext.requestTopRateListCourse(20, 1);
    }
  }, [courseContext.state.isRequestedTopRate]);

  useEffect(() => {
    if (!courseContext.state.isRequestedFavorite) {
      courseContext.requestFavoriteListCourse(20, 1);
    }
  }, [courseContext.state.isRequestedFavorite]);

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
