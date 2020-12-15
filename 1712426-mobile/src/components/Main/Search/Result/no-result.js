import React, {useContext,useEffect} from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';
const NoResult = (props) => {
  return (
    <View style={styles.container}>
        <Image
              source={require('../../../../../assets/searchIcon.png')}
              style={styles.icon}
        />
        <Text style={styles.text}>Sorry, we couldn't find any matches for "{props.textSearch}"</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0e0f13',
    justifyContent: 'center',
    alignItems: 'center'
  },icon:{
    width: 100,
    height: 100,
    marginTop:100
  },text:{
    color: 'white'
  }
});
export default NoResult;