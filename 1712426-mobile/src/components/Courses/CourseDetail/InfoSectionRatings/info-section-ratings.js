import React, {useContext, useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {ScreenKey} from '../../../../globals/constants';
import Section from './Section/section';
import Ratings from './Ratings/ratings';
import { CourseContext } from '../../../../provider/course-provider';
import { AuthenticationContext } from '../../../../provider/authentication-provider';

const InfoSectionRatings = (props) => {
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
        <Tab.Screen name={ScreenKey.Section} component={Section} {...props}/>
        <Tab.Screen name={ScreenKey.Ratings} component={Ratings} {...props}/>
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
export default InfoSectionRatings;
