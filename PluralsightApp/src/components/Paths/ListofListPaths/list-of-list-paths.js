import React, {useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {ScreenKey} from '../../../globals/constants';
import Paths from '../../Main/Browse/Paths/paths';
const ListOfListPaths = (props) => {
  const OnPress = (title) => {
    props.navigation.push(ScreenKey.AllListPaths, {
      title: title,
    });
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.view}>
        <Paths
          title="Conferences"
          {...props}
          OnPress={() =>
            props.navigation.push(ScreenKey.AllListPaths, {
              title: 'Conferences',
            })
          }
        />
        <Paths
          title="Certifications"
          {...props}
          OnPress={() =>
            props.navigation.push(ScreenKey.AllListPaths, {
              title: 'Certifications',
            })
          }
        />
        <Paths
          title="Software Development"
          {...props}
          OnPress={() =>
            props.navigation.push(ScreenKey.AllListPaths, {
              title: 'Software Development',
            })
          }
        />
        <Paths
          title="IT Ops"
          {...props}
          OnPress={() =>
            props.navigation.push(ScreenKey.AllListPaths, {title: 'IT Ops'})
          }
        />
        <Paths
          title="Infomation Security"
          {...props}
          OnPress={() =>
            props.navigation.push(ScreenKey.AllListPaths, {
              title: 'Infomation Security',
            })
          }
        />
        <Paths
          title="Data Professional"
          {...props}
          OnPress={() =>
            props.navigation.push(ScreenKey.AllListPaths, {
              title: 'Data Professional',
            })
          }
        />
        <Paths
          title="Business Professional"
          {...props}
          OnPress={() =>
            props.navigation.push(ScreenKey.AllListPaths, {
              title: 'Business Professional',
            })
          }
        />
        <Paths
          title="Creative Professional"
          {...props}
          OnPress={() =>
            props.navigation.push(ScreenKey.AllListPaths, {
              title: 'Creative Professional',
            })
          }
        />
        <Paths
          title="Manufacturing and Design"
          {...props}
          OnPress={() =>
            props.navigation.push(ScreenKey.AllListPaths, {
              title: 'Manufacturing and Design',
            })
          }
        />
        <Paths
          title="Architecture & Construction"
          {...props}
          OnPress={() =>
            props.navigation.push(ScreenKey.AllListPaths, {
              title: 'Architecture & Construction',
            })
          }
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0e0f13',
  },
  view: {
    marginTop: 15,
    marginLeft: 15,
  },
});
export default ListOfListPaths;
