import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';

const ChangePassword = (props) => {
  const [oldPW, setOldPW] = useState('1234567');
  const [newPW, setNewPW] = useState('');
  const [confirmPW, setConfirmPW] = useState('');
  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <View style={styles.view}>
          <Image
            source={require('../../../../assets/person.png')}
            style={styles.image}
          />
        </View>
        <View style={{marginTop: 30}}>
          <Text style={styles.boldtext}>Old password</Text>
          <TextInput
            value={oldPW}
            onChangeText={(oldPW) => setOldPW(oldPW)}
            style={styles.textinput}
            secureTextEntry={true}
          />
          <Text style={styles.boldtext}>New password</Text>
          <TextInput
            value={newPW}
            onChangeText={(newPW) => setNewPW(newPW)}
            style={styles.textinput}
            secureTextEntry={true}
          />
          <Text style={styles.boldtext}>Confirm password</Text>
          <TextInput
            value={confirmPW}
            onChangeText={(confirmPW) => setConfirmPW(confirmPW)}
            style={styles.textinput}
            secureTextEntry={true}
          />
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttontext}>CHANGE</Text>
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
  textinput: {
    height: 40,
    fontSize: 20,
    width: '100%',
    color: 'white',
    paddingLeft: 10,
    marginVertical: 10,
    paddingVertical: 5,
    backgroundColor: '#222327',
    borderWidth: 1,
  },
});
export default ChangePassword;
