import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Alert, Image} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {HelperText, TextInput} from 'react-native-paper';
import { ScreenKey } from '../../../globals/constants';
import {NavigationActions} from 'react-navigation';

const Login = (props) => {

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState(null);
  useEffect(() => {
    if(status && status === 200){
      props.navigation.navigate(ScreenKey.HomeScreen);
     
      // const resetAction = () => NavigationActions.reset({
      //   index: 0,
      //   actions: [
      //     NavigationActions.navigate({ routeName: ScreenKey.HomeScreen})
      //   ] })
      // props.navigation.dispatch(resetAction);
      
    }
  },[status]);
  const hasErrorEmail = () => {
    return userName.trim() == '';
  };
  const hasErrorPassword = () => {
    return password.trim() == '';
  };
  const onPressButtonLogin = () => {
    if (hasErrorEmail() || hasErrorPassword()) {
      Alert.alert('Fail');
    } else {
      setStatus(200);
    }
  };
  const onPressButtonRegister = () => {
    props.navigation.navigate(ScreenKey.Register);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.view}>
          <Image
            source={require('../../../../assets/iconapp.png')}
            style={styles.image}
          />
          <Text style={styles.textAppName}>Pluralsight</Text>
        </View>
      <View style={styles.container1}>
        <TextInput
          label="Usernam (or Email)"
          value={userName}
          onChangeText={(userName) => setUserName(userName)}
          style={[styles.textinput, styles.inputUs]}
          theme={{
            colors: {
              placeholder: 'white',
              text: 'white',
              primary: '#237194',
              underlineColor: 'transparent',
              background: '#003489',
            },
          }}
        />
        <TextInput
          label="Password"
          value={password}
          onChangeText={(password) => setPassword(password)}
          style={styles.textinput}
          secureTextEntry={true}
          theme={{
            colors: {
              placeholder: 'white',
              text: 'white',
              primary: '#237194',
              underlineColor: 'transparent',
              background: '#003489',
            },
          }}
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttontext} onPress={onPressButtonLogin}>
            SIGN IN
          </Text>
        </TouchableOpacity>
        <Text style={styles.text} onPress={() => console.log('1st')}>
          FORGOT PASSWORD?
        </Text>
        <Text
          style={[styles.text, styles.text1]}
          onPress={() => console.log('1st')}>
          USE SINGLE SIGN-ON (SSO)
        </Text>
        <Text style={styles.text} onPress={onPressButtonRegister}>
          SIGN UP FREE
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0e0f13',
  },
  container1: {
    marginLeft: 30,
    marginRight: 30,
  },
  inputUs: {
    marginTop: 40,
  },
  textinput: {
    height: 60,
    width: '98%',
    borderBottomColor: '#676a6f',
    backgroundColor: '#1f242a',
    borderWidth: 1,
  },
  button: {
    marginTop: 20,
    width: '98%',
    backgroundColor: '#2b2c30',
    borderRadius: 10,
  },
  buttontext: {
    fontSize: 18,
    margin: 10,
    textAlign: 'center',
    color: 'white',
  },
  text: {
    fontSize: 18,
    marginTop: 20,
    color: '#09577b',
    textAlign: 'center',
  },
  text1: {
    width: '98%',
    borderColor: '#09577b',
    borderWidth: 1,
    borderRadius: 6,
  },
  textAppName: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white'
  },
  image: {
    width: 100,
    height: 100,
  },
  view: {
    flex: 1,
    alignItems: 'center',
    marginTop: 10,
  },
});
export default Login;
