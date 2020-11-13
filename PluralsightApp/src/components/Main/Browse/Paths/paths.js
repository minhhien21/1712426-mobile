import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import { ScreenKey } from '../../../../globals/constants';
import FlatListPaths from '../../../Common/flatlist-paths';
import PathsItem from '../PathsItem/paths-item';
const Paths = (props) => {
  const paths = [
    {
      id: 1,
      link: require('../../../../../assets/google-cloud.png'),
      title: 'Google Cloud Certified Associate Cloud Engineer',
      total: '6 courses',
    },
    {
      id: 2,
      link: require('../../../../../assets/google-cloud.png'),
      title: 'Google Cloud Certified Associate Cloud Engineer',
      total: '6 courses',
    },
    {
      id: 3,
      link: require('../../../../../assets/google-cloud.png'),
      title: 'Google Cloud Certified Associate Cloud Engineer',
      total: '6 courses',
    },
    {
      id: 4,
      link: require('../../../../../assets/google-cloud.png'),
      title: 'Google Cloud Certified Associate Cloud Engineer',
      total: '6 courses',
    },
    {
      id: 5,
      link: require('../../../../../assets/google-cloud.png'),
      title: 'Google Cloud Certified Associate Cloud Engineer',
      total: '6 courses',
    },
    {
      id: 6,
      link: require('../../../../../assets/google-cloud.png'),
      title: 'Google Cloud Certified Associate Cloud Engineer',
      total: '6 courses',
    },
  ];
  const onPress = () =>{
    props.OnPress();
  };
  return (
    <View style={styles.container}>
      <View style={styles.view}>
        <Text style={styles.text}>{props.title}</Text>
        <TouchableOpacity onPress={onPress}>
          <Text style={styles.textDark}>See all{'>'}</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={paths}
        horizontal={true}
        renderItem={({item}) => (
          <PathsItem
            navigation={props.navigation}
            item={item}
            OnPressListenItem={() =>
              props.navigation.push(ScreenKey.PathDetail, {item: item})
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
  view: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 25,
    marginBottom: 10,
    marginRight: 15,
},
  text: {
    color: 'white',
    fontSize: 20,
  },
  textDark: {
    color: 'darkgray',
    alignSelf: 'center',
    marginRight: 10,
  },
});
export default Paths;
