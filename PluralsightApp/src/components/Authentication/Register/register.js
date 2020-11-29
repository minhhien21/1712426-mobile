import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, CheckBox, Alert, TextInput} from 'react-native';

const Register = (props) => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  const [isSelected, setSelection] = useState(false);
  const [errorEmail, setErrorEmail] = useState('Email address is empty!');

  const hasErrorsEmail = () => {
    if (email.trim() === '') {
      setErrorEmail('Email address is empty!');
      return true;
    } 
    if (email.includes('@')) {
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
      <View style={styles.container1}>
      <Text style={styles.texttitle}>Create your free account</Text>
      <Text style={styles.text}>Email *</Text>
      <TextInput
        value={email}
        onChangeText={(email) => setEmail(email)}
        style={[styles.textinput, styles.inputUs]}
      />

      <Text style={styles.text}>First name *</Text>
      <TextInput
        value={firstName}
        onChangeText={(firstName) => setFirstName(firstName)}
        style={[styles.textinput, styles.inputUs]}
      />

      <Text style={styles.text}>LastName *</Text>
      <TextInput
        value={lastName}
        onChangeText={(lastName) => setLastName(lastName)}
        style={[styles.textinput, styles.inputUs]}
      />

      <Text style={styles.text}>Company *</Text>
      <TextInput
        value={company}
        onChangeText={(company) => setCompany(company)}
        style={[styles.textinput, styles.inputUs]}
      />

      <Text style={styles.text}>Phone</Text>
      <TextInput
        value={phone}
        onChangeText={(phone) => setPhone(phone)}
        style={[styles.textinput, styles.inputUs]}
      />

      <Text style={styles.text}>* Required field</Text>
      <CheckBox value={isSelected} onValueChange={setSelection} backgroundColor='#222327' color='white'/>
      <Text style={styles.text}>
        By activating this benefit, you agree to abide bv Pluralsight's terms of
        use and privacy
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
  container1:{
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
