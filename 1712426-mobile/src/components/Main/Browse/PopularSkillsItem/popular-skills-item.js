import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import { apiGetListCourseWithCategoryId } from '../../../../core/service/category-service';
import { ScreenKey } from '../../../../globals/constants';
const PopularSkillsItem = (props) => {
  const [listCourse, setListCourse] = useState({
    message: null,
    payload: {
      rows:[],
      count: 0,
    },
  })
  // const res = apiGetListCourseWithCategoryId(props.item.id);
  //     res.then((response) => {
  //         setListCourse(response.data)
  //       })
  //       .catch((error) => {
  //         Alert.alert(error.response.data.message)
  //         throw error;
  //       });
  console.log("popular-skills.js", props.item.id)
  const OnPressListenItem = () => {
    const res = apiGetListCourseWithCategoryId(props.item.id);
      res.then((response) => {
          setListCourse(response.data)
        })
        .catch((error) => {
          Alert.alert(error.response.data.message)
          throw error;
        });

        
    // categoryContext.state.isRequestedGetListCourseCategory = false;
    // categoryContext.requestGetListCourseCategory(item.id);
    // console.log("popular-skills.js", listCourse.payload)
    props.navigation.push(ScreenKey.ViewListCourses, 
      {item: listCourse.payload.rows,
      title: props.item.name})
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
