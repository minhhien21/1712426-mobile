import React, {useState, useContext} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Alert,
  Image,
} from 'react-native';
import {
  apiDeleteSearchHistory,
  apiGetSearchHistory,
} from '../../../../core/service/search-service';
import {AuthenticationContext} from '../../../../provider/authentication-provider';
const SearchHistory = (props) => {
  const [responseReq, setResponseReq] = useState({
    data: [],
  });
  const authContext = useContext(AuthenticationContext);
  const token = authContext.state.token;
  const res = apiGetSearchHistory(token);
  res
    .then((response) => {
      setResponseReq(response.data.payload);
    })
    .catch((error) => {
      Alert.alert(error.response.data.message);
      throw error;
    });
  let dataHistory = [];
  if (responseReq.data.length <= 3) {
    dataHistory = responseReq.data;
  } else {
    dataHistory.push(responseReq.data[0]);
    dataHistory.push(responseReq.data[1]);
    dataHistory.push(responseReq.data[2]);
  }
  const onPressDeleteSearchHistory = () => {
    for (let i = 0; i < responseReq.data.length; i++) {
      const res = apiDeleteSearchHistory(token, responseReq.data[i].id);
      res
        .then((response) => {})
        .catch((error) => {
          Alert.alert(error.response.data.message);
          throw error;
        });
    }
  };
  const viewSearch = () => {
    if (responseReq.data.length == 0) {
      return <View />;
    } else {
      return (
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 10,
            marginTop: 10,
          }}>
          <Text style={styles.text}>Recent searches</Text>
          <TouchableOpacity onPress={onPressDeleteSearchHistory}>
            <Text style={styles.textButton}>CLEAR ALL</Text>
          </TouchableOpacity>
        </View>
      );
    }
  };
  return (
    <View style={styles.container}>
      {viewSearch()}
      <View
        style={{
          marginHorizontal: 10,
          marginTop: 10,
        }}>
        {dataHistory.map((item) => (
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              marginTop: 5,
            }}
            onPress={() => {
              props.OnPressListenItem(item.content);
            }}>
            <Image
              source={require('../../../../../assets/refresh.png')}
              style={styles.icon}
            />
            <Text style={styles.text}>{item.content}</Text>
          </TouchableOpacity>
        ))}
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
    alignSelf: 'center',
    fontSize: 20,
  },
  textButton: {
    color: '#026f9b',
    fontSize: 20,
  },
  icon: {
    alignSelf: 'center',
    marginRight: 10,
  },
});
export default SearchHistory;
