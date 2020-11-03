import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
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
  const renderListItems = (paths) => {
    return paths.map((item) => <ListPathsItem item={item}/>);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Paths</Text>
      <ScrollView>{renderListItems(paths)}</ScrollView>
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
