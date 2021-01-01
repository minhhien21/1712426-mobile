import React,{useContext} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {ScreenKey} from '../../../globals/constants';
import {NavigationActions} from 'react-navigation';
import { AuthenticationContext } from '../../../provider/authentication-provider';
import {
  GoogleSigninButton,
  GoogleSignin,
  statusCodes
} from '@react-native-community/google-signin'
const Settings = (props) => {
  const authContext = useContext(AuthenticationContext);
    // const resetAction = NavigationActions.reset({
    //     index: 0,
    //     actions: [
    //       NavigationActions.navigate({ routeName: ScreenKey.Login})
    //     ] })
    const configureGoogleSign = () => {
      GoogleSignin.configure({
        webClientId: "434741299095-2gm96f8tr30gg58vkv950ueh4689fqh8.apps.googleusercontent.com",
        offlineAccess: true
      })
    };
    const signOut = async() => {
      try {
        await GoogleSignin.revokeAccess()
        await GoogleSignin.signOut()
        setIsLoggedIn(false)
      } catch (error) {
        Alert.alert('Something else went wrong... ', error.toString())
      }
    }
    const OnPressSignOut = () => {
      authContext.signout();
      signOut();
      props.navigation.navigate(ScreenKey.Login);
    }
  return (
    <ScrollView style={styles.container}>
      <View style={styles.container1}>
        <TouchableOpacity
          style={styles.view}
          onPress={() => props.navigation.push(ScreenKey.AccountManagement)}>
          <Image
            source={require('../../../../assets/power-button.png')}
            style={styles.image}
          />
          <View style={{marginLeft: 10}}>
            <Text style={styles.textHeader}>Minh Hien</Text>
            <Text style={styles.darktext}>minh-hien-f0</Text>
          </View>
        </TouchableOpacity>
        <View style={{marginTop: 15}}>
          <Text style={styles.text}>Account</Text>
          <Text style={styles.text}>Subscription</Text>
          <Text style={styles.darktext}>
            Free Pluralsight IQ (Limited Library) (Free)
          </Text>
          <Text style={styles.text}>Communication Preferences</Text>
        </View>
      </View>
      <View style={styles.viewRequired}>
        <View style={{marginLeft: 20, marginTop: 10, marginBottom: 20}}>
          <Text style={styles.text}>Default caption language</Text>
          <Text style={styles.darktext}>English</Text>
          <Text style={styles.text}>Captions</Text>
          <Text style={styles.text}>Notifications</Text>
          <Text style={styles.text}>Advanced Options</Text>
        </View>
      </View>
      <View style={styles.viewVersion}>
        <View style={{marginLeft: 20, marginTop: 10, marginBottom: 20}}>
          <Text style={styles.text}>App version</Text>
          <Text style={styles.text}>2.39.0</Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={OnPressSignOut}>
        <Text style={styles.textButton}>SIGN OUT</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0e0f13',
  },
  container1: {
    marginTop: 30,
    marginBottom: 20,
    marginHorizontal: 20,
  },
  view: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewRequired: {
    borderWidth: 3,
    borderColor: '#0e0f13',
    borderBottomColor: '#181b20',
    borderTopColor: '#181b20',
    marginRight: 20,
  },
  viewVersion: {
    borderWidth: 3,
    borderColor: '#0e0f13',
    borderBottomColor: '#181b20',
    marginRight: 20,
  },
  image: {
    height: 70,
    width: 70,
  },
  textHeader: {
    color: 'white',
    fontSize: 20,
  },
  text: {
    color: 'white',
    marginTop: 10,
  },
  darktext: {
    color: 'gray',
  },
  button: {
    margin: 20,
    borderWidth: 3,
    borderColor: '#026f9b',
  },
  textButton: {
    color: '#026f9b',
    paddingVertical: 10,
    textAlign: 'center',
  },
});
export default Settings;
