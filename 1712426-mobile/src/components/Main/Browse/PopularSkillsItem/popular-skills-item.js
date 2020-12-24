import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import { apiGetListCourseWithCategoryId } from '../../../../core/service/category-service';
import { ScreenKey } from '../../../../globals/constants';
const PopularSkillsItem = (props) => {
  const OnPressListenItem = () => {
    const res = apiGetListCourseWithCategoryId(props.item.id);
      res.then((response) => {
          props.navigation.push(ScreenKey.ViewListCourses, 
            {item: response.data.payload.rows,
            title: props.item.name})
        })
        .catch((error) => {
          Alert.alert(error.response.data.message)
          throw error;
        });
  }
  return (
    <View>
      <TouchableOpacity style={styles.button} 
      onPress={OnPressListenItem}>
          <Text style={styles.text}>{props.item.name}</Text>
      </TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create({
    button: {
        backgroundColor: '#353a3e',
        borderRadius: 15,
        marginRight: 5,
        marginTop: 5,
    },
    text:{
        fontSize: 20,
        color: 'white',
        paddingVertical: 5,
        paddingHorizontal: 10,
    }
});
export default PopularSkillsItem;
