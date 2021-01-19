import React from 'react';
import {StyleSheet} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {NavigationContainer} from '@react-navigation/native';
import SectionDL from './SectionDL/section-dl';
import RatingsDL from './RatingsDL/ratings-dl';
import { ScreenKey } from '../../../../../globals/constants';

const InfoSectionRatingsDL = (props) => {
 
  const Tab = createMaterialTopTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator 
            tabBarOptions={{
                activeTintColor: '#026f9b',
                inactiveTintColor: 'white',
                style: {
                    backgroundColor: '#1f242a',
                    borderTopColor: 'transparent',
                  },
                  tabStyle:{
                    tabBarBackgroundColor: 'white',
                    tabBarButtonColor: 'white',
                    tabBarSelectedButtonColor: 'white',
                    flexDirection: 'column',
                  }
            }}
        >
        <Tab.Screen
          name={ScreenKey.Section}
          children={()=><SectionDL dataSection={props.dataCourse.section} {...props} idCourse={props.dataCourse.id}/>}
        />
        <Tab.Screen
          name={ScreenKey.Ratings}
          children={()=><RatingsDL dataRatings={props.dataCourse.ratings.ratingList} {...props}/>}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0e0f13',
  },
  scrollView: {
    marginHorizontal: 15,
  },
});
export default InfoSectionRatingsDL;
