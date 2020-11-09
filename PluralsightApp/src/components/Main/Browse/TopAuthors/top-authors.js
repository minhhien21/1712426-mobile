import React, {useState} from 'react';
import {ScrollView, StyleSheet, View, Text} from 'react-native';
import TopAuthorsItem from '../TopAuthorsItem/top-authors-item';

const TopAuthors = (props) => {
  const topauthors = [
      {
          id: 1,
          link:require('../../../../../assets/ScottAllen.jpg'),
          name: 'Deborah Kurata',
      },
      {
        id: 2,
        link:require('../../../../../assets/ScottAllen.jpg'),
        name: 'Scott Allen',
    },
    {
        id: 3,
        link:require('../../../../../assets/ScottAllen.jpg'),
        name: 'Simon Allardice',
    },
    {
        id: 4,
        link:require('../../../../../assets/ScottAllen.jpg'),
        name: 'Austin Bingham',
    },
    {
        id: 5,
        link:require('../../../../../assets/ScottAllen.jpg'),
        name: 'Robert Smallshire',
    },
    {
        id: 6,
        link:require('../../../../../assets/ScottAllen.jpg'),
        name: 'Matt Milner',
    },
    {
        id: 7,
        link:require('../../../../../assets/ScottAllen.jpg'),
        name: 'Samer Buna',
    },
    {
        id: 8,
        link:require('../../../../../assets/ScottAllen.jpg'),
        name: 'Joe Eames',
    },
    {
        id: 9,
        link:require('../../../../../assets/ScottAllen.jpg'),
        name: 'Jim Cooper',
    },
    {
        id: 10,
        link:require('../../../../../assets/ScottAllen.jpg'),
        name: 'Mark Zamoyta',
    },
    {
        id: 11,
        link:require('../../../../../assets/ScottAllen.jpg'),
        name: 'Howard Dierking',
    },
    {
        id: 12,
        link:require('../../../../../assets/ScottAllen.jpg'),
        name: 'Ryan Lewis',
    },
    {
        id: 13,
        link:require('../../../../../assets/ScottAllen.jpg'),
        name: 'Ross Bagurdes',
    },
    {
        id: 14,
        link:require('../../../../../assets/ScottAllen.jpg'),
        name: 'Chuck Cobb',
    },
    {
        id: 15,
        link:require('../../../../../assets/ScottAllen.jpg'),
        name: 'Richard Seroter',
    },
    {
        id: 16,
        link:require('../../../../../assets/ScottAllen.jpg'),
        name: 'Cory House',
    },  
    {
        id: 17,
        link:require('../../../../../assets/ScottAllen.jpg'),
        name: 'Shawn Wildermuth',
    }, 
    {
        id: 18,
        link:require('../../../../../assets/ScottAllen.jpg'),
        name: 'Matthew Renze',
    },  
  ];
  const renderListItems = (topauthors) => {
    return topauthors.map((item) => <TopAuthorsItem navigation={props.navigation} item={item} />);
  };
  return (
    <View style={styles.layoutHome}>
      <Text style={styles.text}>Top Authors</Text>
      <ScrollView  horizontal={true}>
        {renderListItems(topauthors)}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  layoutHome: {
    backgroundColor: '#0e0f13',
  },
  text: {
    color: 'white',
    fontSize: 20,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
  },
});
export default TopAuthors;
