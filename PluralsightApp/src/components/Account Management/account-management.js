import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

const AccountManagement = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <View style={styles.view}>
          <Image
            source={require('../../../assets/person.png')}
            style={styles.image}
          />
          <Text style={styles.textHeader}>Minh Hien</Text>
        </View>
        <View style={{marginTop: 30}}>
          <Text style={styles.text}>Activity insights (last 30days)</Text>
          <Text style={styles.darktext}>MOST ACTIVE TIME OF DAY</Text>
          <Text style={styles.boldtext}>10:00 PM</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0e0f13',
  },
  container1: {
    marginTop: 30,
    marginLeft: 30,
  },
  view: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    height: 80,
    width: 80,
  },
  textHeader: {
    color: 'white',
    marginLeft: 10,
    fontSize: 25,
    fontWeight: 'bold',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    marginTop: 20
  },
  darktext:{
    color: 'gray',
    marginTop: 20
  },
  boldtext:{
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
  }
});
export default AccountManagement;
