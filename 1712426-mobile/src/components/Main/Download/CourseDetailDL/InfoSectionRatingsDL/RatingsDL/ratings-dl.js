import React from 'react';
import {Rating} from 'react-native-elements';
import {
  StyleSheet,
  View,
  FlatList,
} from 'react-native';
import RatingsItemDL from '../RatingsItemDL/ratings-item-dl';
const RatingsDL = (props) => {
  return (
    <View style={styles.container} >
      <FlatList
        data={props.dataRatings}
        renderItem={({item}) => <RatingsItemDL item={item} />}
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
    fontWeight: 'bold',
  },
  textinput: {
    height: 60,
    width: '100%',
    borderColor: '#676a6f',
    backgroundColor: '#1f242a',
    borderWidth: 1,
    color: 'white',
    paddingLeft: 15,
  },
  button: {
    marginTop: 10,
    marginRight: 10,
    backgroundColor: '#026f9b',
    borderRadius: 10,
  },
  buttontext: {
    paddingHorizontal: 10,
    margin: 10,
    textAlign: 'center',
    color: 'white',
  },
});
export default RatingsDL;
