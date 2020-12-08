import React, {useState, useEffect, useContext, useReducer} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Alert, Image} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {TextInput} from 'react-native-paper';
import { ScreenKey } from '../../../globals/constants';
import { AuthenticationContext } from '../../../provider/authentication-provider';
const Login = (props) => {
  const [status, setStatus] = useState(false);
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const authContext = useContext(AuthenticationContext);
  useEffect(() => {
    if(authContext.state.isAuthenticated){
      props.navigation.navigate(ScreenKey.HomeScreen);
    }
  },[authContext.state.isAuthenticated]);
  useEffect(() => {
    if(authContext.state.errorMessage != null){
      Alert.alert(authContext.state.errorMessage);
    }
  },[authContext.state.errorMessage]);
  const hasErrorEmail = () => {
    return userName.trim() == '';
  };
  const hasErrorPassword = () => {
    return password.trim() == '';
  };
  const onPressButtonLogin = () => {
    if (hasErrorEmail() || hasErrorPassword()) {
      Alert.alert('Vui lòng điền đầy đủ thông tin');
    } else {
      authContext.login(userName,password);
      setStatus(true);
    }
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
          label="Email"
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
        <Text style={styles.text} onPress={() => props.navigation.navigate(ScreenKey.ForgetPassword)}>
          FORGOT PASSWORD?
        </Text>
        <Text
          style={[styles.text, styles.text1]}
          onPress={() => console.log('1st')}>
          USE SINGLE SIGN-ON (SSO)
        </Text>
        <Text style={styles.text} onPress={()=> props.navigation.navigate(ScreenKey.Register)}>
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
