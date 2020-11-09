import React, {useState} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import ListPathsItem from '../ListPathsItem/list-paths-item';

const ListPaths = (props) => {
  const paths = [
    {
      id: 1,
      link: require('../../../../assets/google-cloud.png'),
      title: 'Google Cloud Certified Associate Cloud Engineer',
      total: '6 courses',
    },
    {
      id: 2,
      link: require('../../../../assets/google-cloud.png'),
      title: 'Google Cloud Certified Associate Cloud Engineer',
      total: '6 courses',
    },
    {
      id: 3,
      link: require('../../../../assets/google-cloud.png'),
      title: 'Google Cloud Certified Associate Cloud Engineer',
      total: '6 courses',
    },
    {
      id: 4,
      link: require('../../../../assets/google-cloud.png'),
      title: 'Google Cloud Certified Associate Cloud Engineer',
      total: '6 courses',
    },
  ];
  return (
    <View>
      <Text style={styles.text}>Courses</Text>
      <FlatList
        data={paths}
        renderItem={({item}) => (
          <ListPathsItem navigation={props.navigation} item={item}/>
        )}
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
    marginTop: 10,
    marginLeft: 10,
    marginBottom: 10,
  },
});
export default ListPaths;
