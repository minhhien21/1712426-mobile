import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList
} from 'react-native';
import {ScreenKey} from '../../../../globals/constants';
import SectionCoursesItemFP from '../SectionCoursesItemFP/section-courses-item-FP';
const SectionCoursesFP = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.view}>
        <Text style={styles.textHeader}>{props.title}</Text>
      </View>
      <FlatList data={props.data} horizontal={true}
      renderItem={({item}) => (
        <SectionCoursesItemFP
          navigation={props.navigation}
          item={item}
          OnPressListenItem={() =>
            props.navigation.push(ScreenKey.CourseDetail, {item: item})
          }
        />
      )}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  view: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 25,
    marginBottom: 10,
  },
  textHeader: {
    color: 'white',
    fontSize: 20,
  },
  text: {
    color: 'darkgray',
    alignSelf: 'center',
  },
});
export default SectionCoursesFP;
