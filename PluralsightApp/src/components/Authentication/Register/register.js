import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, CheckBox, Alert} from 'react-native';
import {HelperText, TextInput} from 'react-native-paper';

const Register = (props) => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  const [isSelected, setSelection] = useState(false);
  const [errorEmail, setErrorEmail] = useState('Email address is empty!');

  const hasErrorsEmail = () => {
    if (email.trim() == '') {
      setErrorEmail('Email address is empty!');
      return true;
    } else if (email.includes('@')) {
      setErrorEmail('Email address is invalid!');
      return true;
    }
    return false;
  };
  const hasEmptyEmail = () => {
    return email.trim() == '';
  };
  const hasEmptyFN = () => {
    return firstName.trim() == '';
  };
  const hasEmptysLN = () => {
    return lastName.trim() == '';
  };
  const hasEmptyCompany = () => {
    return company.trim() == '';
  };

  const onPressButton = () => {
    if (hasEmptyEmail() || hasEmptyFN() || hasEmptysLN() || hasEmptyCompany() || isSelected == false) {
        Alert.alert("Fail")
    }else{
        Alert.alert("Success")
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.texttitle}>Create your free account</Text>
      <Text style={styles.text}>Email *</Text>
      <TextInput
        value={email}
        onChangeText={(email) => setEmail(email)}
        style={[styles.textinput, styles.inputUs]}
      />
      <HelperText type="error" visible={hasEmptyEmail()} value={errorEmail}>
        Addredd email is empty!
      </HelperText>

      <Text style={styles.text}>First name *</Text>
      <TextInput
        value={firstName}
        onChangeText={(firstName) => setFirstName(firstName)}
        style={[styles.textinput, styles.inputUs]}
      />
      <HelperText type="error" visible={hasEmptyFN()}>
        First name is empty!
      </HelperText>

      <Text style={styles.text}>LastName *</Text>
      <TextInput
        value={lastName}
        onChangeText={(lastName) => setLastName(lastName)}
        style={[styles.textinput, styles.inputUs]}
      />
      <HelperText type="error" visible={hasEmptysLN()}>
        Last name is empty!
      </HelperText>

      <Text style={styles.text}>Company *</Text>
      <TextInput
        value={company}
        onChangeText={(company) => setCompany(company)}
        style={[styles.textinput, styles.inputUs]}
      />
      <HelperText type="error" visible={hasEmptyCompany()}>
        Company name is empty!
      </HelperText>

      <Text style={styles.text}>Phone</Text>
      <TextInput
        value={phone}
        onChangeText={(phone) => setPhone(phone)}
        style={[styles.textinput, styles.inputUs]}
      />

      <Text style={styles.text}>* Required field</Text>
      <CheckBox value={isSelected} onValueChange={setSelection} />
      <Text style={styles.text}>
        By activating this benefit, you agree to abide bv Pluralsight's terms of
        use and privacy
      </Text>

      <TouchableOpacity style={styles.button} onPress={onPressButton}>
        <Text style={styles.buttontext}>REGISTER</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 15,
    marginRight: 15,
  },
  textinput: {
    height: 40,
    textAlign: 'center',
    width: '98%',
    backgroundColor: 'gray',
    borderWidth: 1,
  },
  button: {
    height: 40,
    marginTop: 20,
    width: '98%',
    backgroundColor: 'gray',
    borderRadius: 10,
  },
  buttontext: {
    textAlign: 'center',
    color: 'white',
  },
  text: {
    color: 'black',
  },
  texttitle: {
    color: 'black',
    fontSize: 22,
    marginTop: 20,
    marginBottom: 20,
    textAlign: 'center',
  },
});
export default Register;
