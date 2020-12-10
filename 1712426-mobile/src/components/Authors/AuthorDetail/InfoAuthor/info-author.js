import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
const InfoAuthor = (props) => {
  var itemProps = props.navigation.state.params.item;
  return (
    <ScrollView style={styles.container}>
      <View style={styles.item}>
        <TouchableOpacity styles={styles.iconButton}>
          <Image source={{uri: itemProps.avatar}} style={styles.icon} />
        </TouchableOpacity>
        <Text style={styles.textIcon}>{itemProps.name}</Text>
        <Text style={styles.textIcon}>ITEDU Author</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textbutton}>FOLLOW</Text>
        </TouchableOpacity>

        <Text style={styles.content}>{itemProps.intro}</Text>
        <Text style={styles.content}>{`${'Email: '}${itemProps.email}`}</Text>
        <Text style={styles.content}>{`${'Major: '}${itemProps.major}`}</Text>
        <Text style={styles.content}>{`${'TotalCourse: '}${
          itemProps.totalCourse
        }`}</Text>
        <Text style={styles.content}>Skills:</Text>
        {itemProps.skills.map((item) => (
          <Text style={styles.itemContent}>{`${'- '}${item}`}</Text>
        ))}
        <Text style={styles.courses}>Courses</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0e0f13',
  },
  item: {
    marginHorizontal: 15,
    marginTop: 20,
  },
  iconView: {
    marginTop: 15,
    marginHorizontal: 30,
    justifyContent: 'center',
  },
  iconButton: {
    backgroundColor: '#3a434a',
    marginRight: 10,
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  button: {
    backgroundColor: '#0084bd',
  },
  textbutton: {
    color: 'white',
    textAlign: 'center',
    paddingVertical: 10,
  },
  icon: {
    height: 50,
    width: 50,
    borderRadius: 25,
    alignSelf: 'center',
  },
  textIcon: {
    color: 'white',
    textAlign: 'center',
    marginTop: 10,
  },

  darktext: {
    marginTop: 10,
    color: 'darkgray',
  },
  content: {
    color: 'white',
  },
  itemContent: {
    color: 'white',
    marginLeft: 20,
  },
  courses: {
    color: 'white',
    marginTop: 25,
    fontSize: 20
  },
});
export default InfoAuthor;
