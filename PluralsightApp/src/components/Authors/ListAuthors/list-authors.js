import React, {useState} from 'react';
import {ScrollView, StyleSheet, View, Text} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {ScreenKey} from '../../../globals/constants';
import ListAuthorsItem from '../ListAuthorsItem/list-authors-item';

const ListAuthors = (props) => {
  const authors = [
    {
      id: 1,
      link: require('../../../../assets/ScottAllen.jpg'),
      name: 'Deborah Kurata',
      courses: '25 courses',
    },
    {
      id: 2,
      link: require('../../../../assets/ScottAllen.jpg'),
      name: 'Scott Allen',
      courses: '2 courses',
    },
    {
      id: 3,
      link: require('../../../../assets/ScottAllen.jpg'),
      name: 'Simon Allardice',
      courses: '17 courses',
    },
    {
      id: 4,
      link: require('../../../../assets/ScottAllen.jpg'),
      name: 'Austin Bingham',
      courses: '26 courses',
    },
  ];
  return (
    <View>
      <FlatList
        data={authors}
        renderItem={({item}) => (
          <ListAuthorsItem
            navigation={props.navigation}
            item={item}
            OnPressListenItem={() =>
              props.navigation.push(ScreenKey.AuthorDetail, {item: item})
            }
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  layoutHome: {
    backgroundColor: '#0e0f13',
  },
});
export default ListAuthors;
