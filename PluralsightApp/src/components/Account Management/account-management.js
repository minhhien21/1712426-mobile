import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import {ScreenKey} from '../../globals/constants';

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
          <Text style={styles.boldtext}>Email</Text>
          <Text style={styles.text}>minhhien21@gmail.com</Text>
          <Text style={styles.boldtext}>Phone</Text>
          <Text style={styles.text}>0787559267</Text>
          <Text style={styles.boldtext}>Password</Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text style={styles.text}>********</Text>

            <TouchableOpacity
              style={{backgroundColor: '#026f9b', borderRadius: 10}}
              onPress={() => props.navigation.push(ScreenKey.ChangePassword)}>
              <Text style={styles.buttontext}>CHANGE</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => props.navigation.push(ScreenKey.UpdateInformation)}>
          <Text style={styles.buttontext}>UPDATE</Text>
        </TouchableOpacity>
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
    marginHorizontal: 20,
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
    marginTop: 5,
    fontSize: 20,
  },
  boldtext: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
  },
  button: {
    marginTop: 30,
    width: '100%',
    backgroundColor: '#026f9b',
    borderRadius: 10,
  },
  buttontext: {
    fontSize: 18,
    margin: 10,
    textAlign: 'center',
    color: 'white',
  },
});
export default AccountManagement;
