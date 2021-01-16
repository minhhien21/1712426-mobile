import React, {useState, useEffect, useContext, useLayoutEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Alert,
  Image,
  ScrollView,
  AsyncStorage,
} from 'react-native';
import {TextInput} from 'react-native-paper';
import {ScreenKey} from '../../../globals/constants';
import {AuthenticationContext} from '../../../provider/authentication-provider';
import {
  GoogleSigninButton,
  GoogleSignin,
  statusCodes,
} from '@react-native-community/google-signin';
import {apiGetUserMe} from '../../../core/service/user-service';
const Login = (props) => {
  const authContext = useContext(AuthenticationContext);
  // useLayoutEffect(async() => {
  //   const tokenLocal = await AsyncStorage.getItem('token');
  //   console.log("tokenLocal:",tokenLocal);
  //   if (tokenLocal !== null) {
  //     const res = apiGetUserMe(tokenLocal);
  //     res
  //       .then((response) => {
  //         authContext.state.isAuthenticated = true;
  //         authContext.state.userInfo = response.data.payload;
  //         authContext.state.token = tokenLocal;
  //         props.navigation.navigate(ScreenKey.HomeScreen);
  //       })
  //       .catch((error) => {
  //         console.log("error:",error.response.data.message);
  //         throw error;
  //       });
  //   }
  // }, []);
//
  authContext.getToken();
  const tokenLocal = authContext.state.token;
  if(tokenLocal !== null){
  const res = apiGetUserMe(tokenLocal);
      res.then((response) => {
        authContext.state.isAuthenticated = true;
        authContext.state.userInfo = response.data.payload;
        authContext.state.token = tokenLocal;
        props.navigation.navigate(ScreenKey.HomeScreen);
        })
        .catch((error) => {
          console.log(error.response.data.message)
          throw error;
        });
      }
  //
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const [userInfo, setUserInfo] = useState(null);
  const [error, setError] = useState(null);

  const configureGoogleSign = () => {
    GoogleSignin.configure({
      webClientId:
        '434741299095-2gm96f8tr30gg58vkv950ueh4689fqh8.apps.googleusercontent.com',
      offlineAccess: true,
    });
  };
  useEffect(() => {
    configureGoogleSign();
  }, []);
  const signInWithGoogle = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      setUserInfo(userInfo);
      setError(null);
      setIsLoggedIn(true);
      await authContext.loginGoogle(userInfo.user.email, userInfo.user.id);
      await setDataToken();
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // when user cancels sign in process,
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // when in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // when play services not available
      } else {
        // some other error
        Alert.alert('Something else went wrong... ', error.toString());
        console.log(error.code);
        setError(error);
      }
    }
  };
  const getCurrentUserInfo = async () => {
    try {
      const userInfo = await GoogleSignin.signInSilently();
      setUserInfo(userInfo);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_REQUIRED) {
        // when user hasn't signed in yet
        Alert.alert('Please Sign in');
        setIsLoggedIn(false);
      } else {
        Alert.alert('Something else went wrong... ', error.toString());
        setIsLoggedIn(false);
      }
    }
  };
  const signOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      setIsLoggedIn(false);
    } catch (error) {
      Alert.alert('Something else went wrong... ', error.toString());
    }
  };
  const setDataToken = async () => {
    try {
      await AsyncStorage.setItem('token', authContext.state.token);
    } catch (error) {
      console.log('error:', error);
    }
  };
  useEffect(() => {
    if (authContext.state.isAuthenticated) {
      setDataToken();
      props.navigation.navigate(ScreenKey.HomeScreen);
    }
  }, [authContext.state.isAuthenticated]);
  useEffect(() => {
    if (authContext.state.errorMessage != null) {
      Alert.alert(authContext.state.errorMessage);
    }
  }, [authContext.state.errorMessage]);
  const hasErrorEmail = () => {
    return userName.trim() == '';
  };
  const hasErrorPassword = () => {
    return password.trim() == '';
  };
  const onPressButtonLogin = async () => {
    if (hasErrorEmail() || hasErrorPassword()) {
      Alert.alert('Vui lòng điền đầy đủ thông tin');
    } else {
      authContext.login(userName, password);
      //await setDataToken();
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.view}>
        <Image
          source={require('../../../../assets/iconapp.png')}
          style={styles.image}
        />
        <Text style={styles.textAppName}>IT EDU</Text>
      </View>
      <View style={styles.container1}>
        <TextInput
          label="Username"
          value={userName}
          onChangeText={(userName) => setUserName(userName)}
          style={[styles.textInput, styles.inputUs]}
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
          style={styles.textInput}
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
          <Text style={styles.buttonText} onPress={onPressButtonLogin}>
            SIGN IN
          </Text>
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 18,
            marginTop: 10,
            color: '#09577b',
            textAlign: 'center',
          }}>
          OR
        </Text>
        <GoogleSigninButton
          style={styles.buttonGoogle}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Dark}
          onPress={() => signInWithGoogle()}
        />
        <Text
          style={styles.text}
          onPress={() => props.navigation.navigate(ScreenKey.ForgetPassword)}>
          FORGOT PASSWORD?
        </Text>
        <Text
          style={[styles.text, styles.text1]}
          onPress={() => console.log('1st')}>
          USE SINGLE SIGN-ON (SSO)
        </Text>
        <Text
          style={styles.text}
          onPress={() => props.navigation.navigate(ScreenKey.Register)}>
          SIGN UP FREE
        </Text>
      </View>
    </ScrollView>
  );
};
/* <GoogleSigninButton
          style={styles.buttonGoogle}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Dark}
          onPress={signInWithGoogle}
        /> */
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
  textInput: {
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
  buttonGoogle: {
    marginTop: 10,
    alignSelf: 'center',
    width: 192,
    height: 58,
  },
  buttonText: {
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
    color: 'white',
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
