import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {ScreenKey} from '../../../globals/constants';
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
      <FlatList
        data={paths}
        renderItem={({item}) => (
          <ListPathsItem
            navigation={props.navigation}
            item={item}
            OnPressListenItem={() =>
              props.navigation.navigate(ScreenKey.PathDetail, {item: item})
            }
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0e0f13',
  },
});
export default ListPaths;
