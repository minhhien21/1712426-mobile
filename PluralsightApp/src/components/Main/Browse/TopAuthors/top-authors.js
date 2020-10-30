import React, {useState} from 'react';
import {ScrollView, StyleSheet, View, Text} from 'react-native';
import TopAuthorsItem from '../TopAuthorsItem/top-authors-item';

const TopAuthors = (props) => {
  const topauthors = [
      {
          id: 1,
          link:require('../../../../../assets/ScottAllen.jpg'),
          name: `${'Deborah\nKurata'}`,
      },
      {
        id: 2,
        link:require('../../../../../assets/ScottAllen.jpg'),
        name: `${'Scott\nAllen'}`,
    },
    {
        id: 3,
        link:require('../../../../../assets/ScottAllen.jpg'),
        name: `${'Simon\nAllardice'}`,
    },
    {
        id: 4,
        link:require('../../../../../assets/ScottAllen.jpg'),
        name: `${'Austin\nBingham'}`,
    },
    {
        id: 5,
        link:require('../../../../../assets/ScottAllen.jpg'),
        name: `${'Robert\nSmallshire'}`,
    },
    {
        id: 6,
        link:require('../../../../../assets/ScottAllen.jpg'),
        name: `${'Matt\nMilner'}`,
    },
    {
        id: 7,
        link:require('../../../../../assets/ScottAllen.jpg'),
        name: `${'Samer\nBuna'}`,
    },
    {
        id: 8,
        link:require('../../../../../assets/ScottAllen.jpg'),
        name: `${'Joe\nEames'}`,
    },
    {
        id: 9,
        link:require('../../../../../assets/ScottAllen.jpg'),
        name: `${'Jim\nCooper'}`,
    },
    {
        id: 10,
        link:require('../../../../../assets/ScottAllen.jpg'),
        name: `${'Mark\nZamoyta'}`,
    },
    {
        id: 11,
        link:require('../../../../../assets/ScottAllen.jpg'),
        name: `${'Howard\nDierking'}`,
    },
    {
        id: 12,
        link:require('../../../../../assets/ScottAllen.jpg'),
        name: `${'Ryan\nLewis'}`,
    },
    {
        id: 13,
        link:require('../../../../../assets/ScottAllen.jpg'),
        name: `${'Ross\nBagurdes'}`,
    },
    {
        id: 14,
        link:require('../../../../../assets/ScottAllen.jpg'),
        name: `${'Chuck\nCobb'}`,
    },
    {
        id: 15,
        link:require('../../../../../assets/ScottAllen.jpg'),
        name: `${'Richard\nSeroter'}`,
    },
    {
        id: 16,
        link:require('../../../../../assets/ScottAllen.jpg'),
        name: `${'Cory\nHouse'}`,
    },  
    {
        id: 17,
        link:require('../../../../../assets/ScottAllen.jpg'),
        name: `${'Shawn\nWildermuth'}`,
    }, 
    {
        id: 18,
        link:require('../../../../../assets/ScottAllen.jpg'),
        name: `${'Matthew\nRenze'}`,
    },  
  ];
  const renderListItems = (topauthors) => {
    return topauthors.map((item) => <TopAuthorsItem item={item} />);
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
