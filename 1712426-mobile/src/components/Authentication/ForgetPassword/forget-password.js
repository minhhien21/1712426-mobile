import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Alert} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {TextInput} from 'react-native-paper';
import { apiForgetPassword } from '../../../core/service/authentication-service';
const ForgetPassword = (props) => {
  const [email, setEmail] = useState('');
  const hasErrorEmail = () => {
    return email.trim() == '';
  };
  const onPressButtonSend = () => {
    if (hasErrorEmail()) {
      Alert.alert('Email rỗng');
    } else {
        const res = apiForgetPassword(email);
        res.then((response) => {
            Alert.alert(
              'Gửi thành công. Vui lòng kiểm trả email của bạn',
              '',
              [
                { text: 'OK', onPress: () => props.navigation.goBack()}
              ],
              { cancelable: false }
            );
          })
          .catch((error) => {
            Alert.alert(error.response.data.message)
            throw error;
          });
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.container1}>
        <TextInput
          label="Email"
          value={email}
          onChangeText={(email) => setEmail(email)}
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
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttontext} onPress={onPressButtonSend}>
            SEND
          </Text>
        </TouchableOpacity>
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
    marginTop: 100,
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
});
export default ForgetPassword;
