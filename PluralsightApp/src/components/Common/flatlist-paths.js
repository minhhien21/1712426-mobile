import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {ScreenKey} from '../../globals/constants';
import PathsItem from '../Main/Browse/PathsItem/paths-item';
const FlatListPaths = (props) => {
  //console.log(props.data,"flatlist-courses.js")
  return (
    <View style={styles.container}>
      <FlatList
        data={props.data}
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
export default FlatListPaths;
