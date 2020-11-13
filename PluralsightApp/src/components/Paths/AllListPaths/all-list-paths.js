import React, {useState} from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import ListPaths from '../ListPaths/list-paths';
const AllListPaths = (props) => {
  //props.navigation.state.params.title
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.navigation.state.params.title}</Text>
      <ListPaths {...props} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0e0f13',
    flex: 1,
  },
  text: {
    color: 'white',
    fontSize: 20,
    marginTop: 10,
    marginLeft: 10,
    marginBottom: 10,
  },
});
export default AllListPaths;
