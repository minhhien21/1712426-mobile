import React, {useState} from 'react';
import {ScrollView, StyleSheet, View, Text, FlatList} from 'react-native';
import {ScreenKey} from '../../../../globals/constants';
import TopAuthorsItem from '../TopAuthorsItem/top-authors-item';

const TopAuthors = (props) => {
  const topauthors = [
    {
      id: 1,
      link: 'https://avatars3.githubusercontent.com/u/137119?s=400&v=4',
      name: 'Deborah Kurata',
    },
    {
      id: 2,
      link: 'https://avatars3.githubusercontent.com/u/137119?s=400&v=4',
      name: 'Scott Allen',
    },
    {
      id: 3,
      link: 'https://avatars3.githubusercontent.com/u/137119?s=400&v=4',
      name: 'Simon Allardice',
    },
    {
      id: 4,
      link: 'https://avatars3.githubusercontent.com/u/137119?s=400&v=4',
      name: 'Austin Bingham',
    },
    {
      id: 5,
      link: 'https://avatars3.githubusercontent.com/u/137119?s=400&v=4',
      name: 'Robert Smallshire',
    },
    {
      id: 6,
      link: 'https://avatars3.githubusercontent.com/u/137119?s=400&v=4',
      name: 'Matt Milner',
    },
    {
      id: 7,
      link: 'https://avatars3.githubusercontent.com/u/137119?s=400&v=4',
      name: 'Samer Buna',
    },
    {
      id: 8,
      link: 'https://avatars3.githubusercontent.com/u/137119?s=400&v=4',
      name: 'Joe Eames',
    },
    {
      id: 9,
      link: 'https://avatars3.githubusercontent.com/u/137119?s=400&v=4',
      name: 'Jim Cooper',
    },
    {
      id: 10,
      link: 'https://avatars3.githubusercontent.com/u/137119?s=400&v=4',
      name: 'Mark Zamoyta',
    },
    {
      id: 11,
      link: 'https://avatars3.githubusercontent.com/u/137119?s=400&v=4',
      name: 'Howard Dierking',
    },
    {
      id: 12,
      link: 'https://avatars3.githubusercontent.com/u/137119?s=400&v=4',
      name: 'Ryan Lewis',
    },
    {
      id: 13,
      link: 'https://avatars3.githubusercontent.com/u/137119?s=400&v=4',
      name: 'Ross Bagurdes',
    },
    {
      id: 14,
      link: 'https://avatars3.githubusercontent.com/u/137119?s=400&v=4',
      name: 'Chuck Cobb',
    },
    {
      id: 15,
      link: 'https://avatars3.githubusercontent.com/u/137119?s=400&v=4',
      name: 'Richard Seroter',
    },
    {
      id: 16,
      link: 'https://avatars3.githubusercontent.com/u/137119?s=400&v=4',
      name: 'Cory House',
    },
    {
      id: 17,
      link: 'https://avatars3.githubusercontent.com/u/137119?s=400&v=4',
      name: 'Shawn Wildermuth',
    },
    {
      id: 18,
      link: 'https://avatars3.githubusercontent.com/u/137119?s=400&v=4',
      name: 'Matthew Renze',
    },
  ];
  return (
    <View style={styles.layoutHome}>
      <Text style={styles.text}>{props.title}</Text>
      <FlatList
        data={topauthors}
        horizontal={true}
        renderItem={({item}) => (
          <TopAuthorsItem
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
    marginRight: 15,
  },
  text: {
    color: 'white',
    fontSize: 20,
    marginTop: 10,
    marginBottom: 10,
  },
});
export default TopAuthors;
