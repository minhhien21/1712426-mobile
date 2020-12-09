import React, {useState, useCallback, useContext, useEffect} from 'react';
import {RefreshControl, ScrollView, StyleSheet, View} from 'react-native';
import { ListCourseContext } from '../../../provider/listcourse-provider';
import SectionCourses from './SectionCourses/section-courses';
const Home = (props) => {
  const [refreshing, setRefreshing] = useState(false);

  const listCourseContext = useContext(ListCourseContext);
  useEffect(() => {
    if (!listCourseContext.state.isRequestedTopSell) {
      listCourseContext.requestTopSellListCourse(20, 1);
    }
  }, [listCourseContext.state.isRequestedTopSell]);
  const data = listCourseContext.state.TopSellListCourse.payload

  useEffect(() => {
    if (!listCourseContext.state.isRequestedTopNew) {
      listCourseContext.requestTopNewListCourse(20, 1);
    }
  }, [listCourseContext.state.isRequestedTopNew]);

  useEffect(() => {
    if (!listCourseContext.state.isRequestedTopRate) {
      listCourseContext.requestTopRateListCourse(20, 1);
    }
  }, [listCourseContext.state.isRequestedTopRate]);

  useEffect(() => {
    if (!listCourseContext.state.isRequestedFavorite) {
      listCourseContext.requestFavoriteListCourse(20, 1);
    }
  }, [listCourseContext.state.isRequestedFavorite]);

  const wait = (timeout) => {
    return new Promise(resolve => {
      setTimeout(resolve, timeout);
    });
  }
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    listCourseContext.state.isRequestedTopSell = false;
    listCourseContext.state.isRequestedTopNew = false;
    listCourseContext.state.isRequestedTopRate = false;
    listCourseContext.state.isRequestedFavorite = false;
    wait(2000).then(() => setRefreshing(false));
  }, []);
  return (
    <ScrollView style={styles.container} 
    refreshControl={
      <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
    }>
      <View style={styles.view}>
        <SectionCourses title="Top sell" {...props} data={listCourseContext.state.TopSellListCourse.payload}/>
        <SectionCourses title="Top new" {...props} data={listCourseContext.state.TopNewListCourse.payload}/>
        <SectionCourses title="Top rate" {...props} data={listCourseContext.state.TopRateListCourse.payload}/>
        <SectionCourses title="Favorite" {...props} data={listCourseContext.state.FavoriteListCourse.payload}/>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0e0f13',
  },
  view: {
    marginLeft: 15,
  },
});
export default Home;
