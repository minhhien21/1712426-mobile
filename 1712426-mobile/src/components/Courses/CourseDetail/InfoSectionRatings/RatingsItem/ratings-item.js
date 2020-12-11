import React, {useState} from 'react';
import {Rating} from 'react-native-elements';
import {StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native';
const RatingsItem = (props) => {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', marginTop: 10, marginHorizontal: 10}}>
        <Image
          source={{
            uri: props.item.user.avatar,
          }}
          style={styles.image}
        />
        <View>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.name}>{props.item.user.name}</Text>
            <Rating
              type="custom"
              ratingBackgroundColor="darkgray"
              tintColor="#0e0f13"
              imageSize={20}
              startingValue={props.item.averagePoint}
              style={{paddingLeft: 5}}
            />
          </View>
          <Text style={styles.darktext}>{props.item.createdAt}</Text>
          <Text style={styles.comment}>{props.item.content}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0e0f13',
  },
  image: {
    marginRight: 10,
    height: 60,
    width: 60,
    borderRadius: 30,
  },
  name: {
    fontSize: 15,
    color: 'white',
  },
  comment: {
    color: 'white',
  },
  darktext: {
    color: 'darkgray',
  },
});
export default RatingsItem;
