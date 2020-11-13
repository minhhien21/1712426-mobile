import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
const SplashScreen = (props) => {
  const [loading, setLoading] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      var randomNumber = Math.floor(Math.random() * 5) + 1;
      var newLoadingValue = loading + randomNumber;
      if (newLoadingValue > 100) {
        newLoadingValue = 100;
      }
      setLoading(newLoadingValue);
    }, 100);
    if (loading == 100) {
      clearInterval(timer);
      props.navigation.navigate('Login');
    }
    return () => {
      clearInterval(timer);
    };
  });
  return (
    <View style={styles.container}>
      <View style={styles.view}>
        <Image
          source={require('../../../../assets/iconapp.png')}
          style={styles.image}
        />
        <Text style={styles.text}>Pluralsight</Text>
        <Text style={styles.textLoading}>Loading.... {loading}%</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0e0f13',
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
  },
  textLoading: {
    fontWeight: 'bold',
    color: 'white',
  },
  image: {
    width: 100,
    height: 100,
  },
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
  },
});
export default SplashScreen;
