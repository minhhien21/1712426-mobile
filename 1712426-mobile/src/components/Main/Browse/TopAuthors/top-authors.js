import React, {useContext, useEffect} from 'react';
import {ScrollView, StyleSheet, View, Text, FlatList} from 'react-native';
import {ScreenKey} from '../../../../globals/constants';
import { InstructorContext } from '../../../../provider/instructor-provider';
import TopAuthorsItem from '../TopAuthorsItem/top-authors-item';

const TopAuthors = (props) => {
  const instructorContext = useContext(InstructorContext);
  useEffect(() => {
    if (!instructorContext.state.isRequestedListInstructor) {
      instructorContext.requestListInstructor();
    }
  }, [instructorContext.state.isRequestedListInstructor]);
  const data = instructorContext.state.ListInstructor.payload;

  return (
    <View style={styles.layoutHome}>
      <Text style={styles.text}>{props.title}</Text>
      <FlatList
        data={data}
        horizontal={true}
        renderItem={({item}) => (
          <TopAuthorsItem
            navigation={props.navigation}
            item={item}
            OnPressListenItem={() =>
              props.navigation.push(ScreenKey.AuthorDetail, {id: item.id})
            }
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  layoutHome: {
    backgroundColor: '#0e0f13',
    marginRight: 15,
  },
  text: {
    color: 'white',
    fontSize: 20,
    marginTop: 10,
    marginBottom: 10,
  },
});
export default TopAuthors;
