import React, {useState, useContext} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import {apiUpdateProfile} from '../../../core/service/user-information';
import {AuthenticationContext} from '../../../provider/authentication-provider';

const UpdateInformation = (props) => {
  const authContext = useContext(AuthenticationContext);
  const data = authContext.state.userInfo;
  const [name, setName] = useState(data.name);
  const [email, setEmail] = useState(data.email);
  const [phone, setPhone] = useState(data.phone);
  const onPressUpdate = () => {
    if (name.trim() == '' || phone.trim() == '') {
      Alert.alert('Tên hoặc số điện thoại rỗng');
    } else {
      const res = apiUpdateProfile(
        authContext.state.token,
        name,
        data.avatar,
        phone,
      );
      res
        .then((response) => {
          Alert.alert(
            'Cập nhật thông tin thành công',
            '',
            [
              {
                text: 'OK',
                onPress: () => {
                  data.name = name;
                  data.phone = phone;
                  props.navigation.state.params.onGoBack();
                  props.navigation.goBack();
                },
              },
            ],
            {cancelable: false},
          );
        })
        .catch((error) => {
          Alert.alert(error.response.data.message);
          throw error;
        });
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <View style={styles.view}>
          <Image source={{uri: data.avatar}} style={styles.image} />
        </View>
        <View style={{marginTop: 30}}>
          <Text style={styles.boldtext}>Name</Text>
          <TextInput
            value={name}
            onChangeText={(name) => setName(name)}
            style={styles.textinput}
          />
          <Text style={styles.boldtext}>Email</Text>
          <TextInput
            value={email}
            onChangeText={(email) => setEmail(email)}
            style={styles.textinput}
          />
          <Text style={styles.boldtext}>Phone</Text>
          <TextInput
            value={phone}
            onChangeText={(phone) => setPhone(phone)}
            style={styles.textinput}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={onPressUpdate}>
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
export default UpdateInformation;
