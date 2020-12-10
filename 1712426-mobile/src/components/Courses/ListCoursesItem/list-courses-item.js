import React from 'react';
import {StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native';
const ListCoursesItem = (props) => {
  const createdAt = String(props.item.createdAt).split('T');
  const totalHours = parseFloat(props.item.totalHours);
  const hour = parseInt(totalHours);
  const convertMinute = 60 * (totalHours - hour);
  const minute = parseInt(convertMinute);
  return (
    <TouchableOpacity
      style={styles.item}
      onPress={() => {
        props.OnPressListenItem();
      }}>
      <Image source={{uri: props.item.imageUrl}} style={styles.image} />
      <View style={styles.viewText}>
        <Text style={styles.title}>{props.item.title}</Text>
        <Text style={styles.title}>{props.item['instructor.user.name']}</Text>
        <Text style={styles.darktext}>{props.item.price}</Text>
        <Text style={styles.darktext}>{props.item.status}</Text>
        <Text style={[styles.darktext, ]}>{`${
          createdAt[0]
        } . ${hour}${'h '}${minute}${'m'}`}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    marginHorizontal: 15,
    height: 105,
    flexDirection: 'row',
    borderWidth: 3,
    borderBottomColor: '#1f242a',
  },
  image: {
    width: '25%',
    height: '90%',
    alignSelf: 'center',
    marginLeft: 10,
  },
  viewText: {
    width: '75%',
    padding: 15,
    alignSelf: 'center',
  },
  title: {
    color: 'white',
  },
  darktext: {
    color: 'darkgray',
  },
});
export default ListCoursesItem;
