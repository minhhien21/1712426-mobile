import React, {useState} from 'react';
import {Rating} from 'react-native-elements';
import {StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native';
const SectionCoursesItem = (props) => {
  const createdAt = String(props.item.createdAt).split('T');
  const convertDate = String(createdAt[0]).split('-');
  const totalHours = parseFloat(props.item.totalHours);
  const hour = parseInt(totalHours);
  const convertMinute = 60 * (totalHours - hour);
  const minute = parseInt(convertMinute);

  const formalityPoint = parseInt(props.item.formalityPoint);
  const contentPoint = parseInt(props.item.contentPoint);
  const presentationPoint = parseInt(props.item.presentationPoint);
  const averagePoint = (formalityPoint + contentPoint + presentationPoint) / 3;
  return (
    <TouchableOpacity
      style={styles.item}
      onPress={() => {
        props.OnPressListenItem();
      }}>
      <Image
        source={{
          uri: props.item.imageUrl,
        }}
        style={styles.image}
      />
      <View>
        <Text style={styles.title}>{props.item.title}</Text>
        <Text style={styles.title}>{props.item['instructor.user.name']}</Text>
        <Text style={styles.darktext}>{props.item.price}</Text>
        <Text style={styles.darktext}>
          {`${convertDate[2]}-${convertDate[1]}-${convertDate[0]} . ${hour}${'h '}${minute}${'m'}`}</Text>
        <View style={{flexDirection:'row'}}> 
        <Rating
          type='custom'
          ratingBackgroundColor='darkgray'
          tintColor='#1f242a'
          imageSize={22}
          startingValue={averagePoint}
          style={{paddingLeft: 5}}
        />
        <Text style={styles.darktext}>({props.item.ratedNumber})</Text>
        </View>
        
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    marginRight: 15,
    width: 200,
    height: 200,
    backgroundColor: '#1f242a',
  },
  image: {
    width: 200,
    height: 100,
  },
  title: {
    paddingLeft: 5,
    color: 'white',
  },
  darktext: {
    paddingLeft: 5,
    color: 'darkgray',
  },
});
export default SectionCoursesItem;
