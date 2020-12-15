import React, {useState, useContext} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {apiGetSearchHistory} from '../../../../core/service/search-service';
import { AuthenticationContext } from '../../../../provider/authentication-provider';
const SearchHistory = (props) => {
  const [responseReq, setResponseReq] = useState({
    data: [],
  });
  const authContext = useContext(AuthenticationContext);
  //const token = authContext.state.token;
  const res = apiGetSearchHistory("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImMxMDU0YTJiLTA3ODItNDc2OS04OWY5LTI5ZWE3YjMzMGI4OSIsImlhdCI6MTYwODA2MDEzNCwiZXhwIjoxNjA4MDY3MzM0fQ.cPG2TcYFbzMRAS9ETlymlXgaIewG7Gje1Dx2vPm7qZs");
  res
    .then((response) => {
      setResponseReq(response.data.payload);
    })
    .catch((error) => {
      Alert.alert(error.response.data.message);
      throw error;
    });
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 10,
          marginTop: 10,
        }}>
            <Text style={styles.text}>Recent searches</Text>
            <TouchableOpacity>
                <Text style={styles.textButton}>CLEAR ALL</Text>
            </TouchableOpacity>
        </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0e0f13',
  },
  text: {
    color: 'white',
  },
  textButton: {
    color: '#026f9b',
  },
});
export default SearchHistory;
