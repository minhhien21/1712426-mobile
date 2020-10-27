import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Alert} from 'react-native';
import {HelperText, TextInput} from 'react-native-paper';

const Login = (props) => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const hasErrorEmail = () => {
    return userName.includes('@');
  };
  const hasErrorPassword = () => {
    return password.trim() == '';
  };
  const onPressButton = () => {
    if (hasErrorEmail() || hasErrorPassword()) {
        Alert.alert("Fail")
    }else{
        Alert.alert("Success")
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        label="Usernam (or Email)"
        value={userName}
        onChangeText={userName => setUserName(userName)}
        style={[styles.textinput, styles.inputUs]}
      />
      <HelperText type="error" visible={hasErrorEmail()}>
        Email address is invalid!
      </HelperText>
      <TextInput
        label="Password"
        value={password}
        onChangeText={password => setPassword(password)}
        style={styles.textinput}
        secureTextEntry={true}/>
      <HelperText type="error" visible={hasErrorPassword()}>
        Password is empty!
      </HelperText>
      <TouchableOpacity
      style={styles.button}>
        <Text style={styles.buttontext} onPress={onPressButton}>SIGN IN</Text>
      </TouchableOpacity>
      <Text style={styles.text} onPress={() => console.log('1st')}>
        FORGOT PASSWORD?
      </Text>
      <Text style={[styles.text,styles.text1]} onPress={() => console.log('1st')}>
        USE SINGLE SIGN-ON (SSO)
      </Text>
      <Text style={styles.text} onPress={() => console.log('1st')}>
        SIGN UP FREE
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 30,
    marginRight: 30,
  },
  inputUs: {
    marginTop: 40,
  },
  textinput:{
    height: 60,
    textAlign: 'center',
    width: '98%',
    borderColor: 'gray',
    borderWidth: 1,
  },
  button: {  
    height: 40,
    marginTop: 20,
    width: '98%',
    backgroundColor: 'gray',
    borderRadius: 10,
  },
  buttontext:{
    fontSize: 18,
    textAlign: 'center',
    color: 'white',
  },
  text:{
    fontSize: 18,
    marginTop: 20,
    color:'blue',
    textAlign:'center',
  },
  text1: {
    width: '98%',
    borderColor: 'blue',
    borderWidth: 1,
    borderRadius: 6,
  }
});
export default Login;
