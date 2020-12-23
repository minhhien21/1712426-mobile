import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  FlatList
} from 'react-native';
import LessonItem from './LessonItem/lesson-item';
const SectionItem = (props) => {
  const lessons = props.itemList.lesson;
  
  const hour = parseInt(props.itemList.sumHours);
  const convertMinute = 60 * (props.itemList.sumHours - hour);
  const minute = parseInt(convertMinute);
  const convertSecond = 60 * (convertMinute - minute);
  const second = parseInt(convertSecond);
  const viewToTalTime = () => {
    if (hour == 0) {
      if (minute < 10 && second < 10) {
        return <Text style={styles.darktext}>{`0${minute}:0${second}`}</Text>;
      } else if (minute < 10) {
        return <Text style={styles.darktext}>{`0${minute}:${second}`}</Text>;
      } else if (second < 10) {
        return <Text style={styles.darktext}>{`${minute}:0${second}`}</Text>;
      } else {
        return <Text style={styles.darktext}>{`${minute}:${second}`}</Text>;
      }
    } else if (hour < 10 && hour != 0) {
      if (minute < 10 && second < 10) {
        return <Text style={styles.darktext}>{`0${hour}:0${minute}:0${second}`}</Text>;
      } else if (minute < 10) {
        return <Text style={styles.darktext}>{`0${hour}:0${minute}:${second}`}</Text>;
      } else if (second < 10) {
        return <Text style={styles.darktext}>{`0${hour}:${minute}:0${second}`}</Text>;
      } else {
        return <Text style={styles.darktext}>{`0${hour}:${minute}:${second}`}</Text>;
      }
    } else {
      if (minute < 10 && second < 10) {
        return <Text style={styles.darktext}>{`${hour}:0${minute}:0${second}`}</Text>;
      } else if (minute < 10) {
        return <Text style={styles.darktext}>{`${hour}:0${minute}:${second}`}</Text>;
      } else if (second < 10) {
        return <Text style={styles.darktext}>{`${hour}:${minute}:0${second}`}</Text>;
      } else {
        return <Text style={styles.darktext}>{`${hour}:${minute}:${second}`}</Text>;
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.viewText}>{props.itemList.numberOrder}</Text>
        <View style={{marginLeft: 15}}>
          <Text style={styles.viewText}>{props.itemList.name}</Text>
          {viewToTalTime()}
        </View>
      </View>
      <FlatList
      data={lessons}
      renderItem={({item}) => (
        <LessonItem
          itemList={item}
        />
      )}
    />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginHorizontal: 15,
  },
  viewText: {
    color: 'white',
  },
  darktext: {
    color: 'darkgray',
  },
  text: {
    borderWidth: 1,
    borderBottomColor: '#1f242a',
  },
});
export default SectionItem;
