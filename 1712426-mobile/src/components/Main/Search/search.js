import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Text,
  RefreshControl,
  ScrollView
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Result from './Result/result';
const Search = (props) => {
  const [refreshing, setRefreshing] = useState(false);
  const [textSearch, setTextSearch] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const onPressSearch = () => {
    setIsSearching(false);
    setIsSearching(true);
    //viewSearch();
    //onRefresh();
  };
  const viewSearch = () => {
    if (isSearching == true) {
      return (
        <Result {...props} keyword={textSearch}/>
      );
    }
    else {
      return <View></View>
    }
  };
  const wait = (timeout) => {
    return new Promise((resolve) => {
      setTimeout(resolve, timeout);
    });
  };
  const onRefresh = () => {
    setRefreshing(true);
    setIsSearching(true);
    wait(1000).then(() => setRefreshing(false));
  };
  return (
    <View style={styles.container}>
      <View style={{backgroundColor: '#181b20'}}>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 20,
            marginHorizontal: 10,
            marginBottom: 10,
          }}>
          <TextInput
            style={styles.inputTextSearch}
            placeholder="Search..."
            placeholderTextColor="white"
            value={textSearch}
            onChangeText={(textSearch) => setTextSearch(textSearch)}
          />
          <TouchableOpacity style={styles.button} onPress={onPressSearch}>
            <Image
              source={require('../../../../assets/searchIcon.png')}
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      {viewSearch()}
      </ScrollView>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0e0f13',
  },
  inputTextSearch: {
    borderWidth: 2,
    borderBottomColor: '#1f242a',
    borderColor: '#181b20',
    color: 'white',
    paddingHorizontal: 10,
    paddingTop: 10,
    width: '85%',
  },
  button: {
    width: '15%',
    alignSelf: 'center',
  },
  icon: {
    alignSelf: 'center',
  },
});
export default Search;
