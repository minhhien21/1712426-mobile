import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  CheckBox,
  Alert,
  TextInput,
} from 'react-native';
import {apiRegister} from '../../../core/service/authentication-service';

const Register = (props) => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [isSelected, setSelection] = useState(false);
  const hasEmptyEmail = () => {
    return email.trim() == '';
  };
  const hasEmptyUsername = () => {
    return username.trim() == '';
  };
  const hasEmptyPhone = () => {
    return phone.trim() == '';
  };
  const hasEmptyPassword = () => {
    return password.trim() == '';
  };

  const onPressButton = () => {
    if (
      hasEmptyEmail() ||
      hasEmptyUsername() ||
      hasEmptyPhone() ||
      hasEmptyPassword() ||
      isSelected == false
    ) {
      Alert.alert('Vui lòng điền đầy đủ thông tin');
    } else {
      const res = apiRegister(username, email, phone, password);
      res.then((response) => {
          Alert.alert(
            'Đăng ký thành công',
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
    <View style={styles.container}>
      <View style={styles.container1}>
        <Text style={styles.texttitle}>Create your free account</Text>

        <Text style={styles.text}>Username *</Text>
        <TextInput
          value={username}
          onChangeText={(username) => setUsername(username)}
          style={styles.textinput}
        />

        <Text style={styles.text}>Email *</Text>
        <TextInput
          value={email}
          onChangeText={(email) => setEmail(email)}
          style={styles.textinput}
        />

        <Text style={styles.text}>Phone *</Text>
        <TextInput
          value={phone}
          onChangeText={(phone) => setPhone(phone)}
          style={styles.textinput}
        />
        <Text style={styles.text}>Password *</Text>
        <TextInput
          value={password}
          onChangeText={(password) => setPassword(password)}
          style={styles.textinput}
          secureTextEntry={true}
        />
        <Text style={styles.text}>* Required field</Text>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          backgroundColor="#222327"
          color="white"
        />
        <Text style={styles.text}>
          By activating this benefit, you agree to abide bv Pluralsight's terms
          of use and privacy
        </Text>

        <TouchableOpacity style={styles.button} onPress={onPressButton}>
          <Text style={styles.buttontext}>REGISTER</Text>
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
    marginLeft: 15,
    marginRight: 15,
  },
  textinput: {
    height: 40,
    width: '98%',
    color: 'white',
    paddingLeft: 15,
    backgroundColor: '#222327',
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
    color: 'white',
    marginTop: 10,
  },
  texttitle: {
    color: 'white',
    fontSize: 22,
    marginTop: 20,
    marginBottom: 20,
    textAlign: 'center',
  },
});
export default Register;
