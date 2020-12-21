import React, {useState, useContext, useEffect} from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import Result from './Result/result';
import {CourseContext} from '../../../provider/course-provider';
import NoResult from './Result/no-result';
import {
  apiDeleteSearchHistory,
  apiSearchV2,
} from '../../../core/service/search-service';
import SearchHistory from './SearchHistory/search-history';
import {AuthenticationContext} from '../../../provider/authentication-provider';
const Search = (props) => {
  const [textSearch, setTextSearch] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const authContext = useContext(AuthenticationContext);
  const token = authContext.state.token;
  const [responseReq, setResponseReq] = useState({
    courses: {
      data: [],
      totalInPage: 0,
      total: 0,
    },
    instructors: {
      data: [],
      totalInPage: 0,
      total: 0,
    },
  });
  const onPressSearchHistory = (keyword) => {
    const res = apiSearchV2(token, keyword);
    res
      .then((response) => {
        setResponseReq(response.data.payload);
      })
      .catch((error) => {
        Alert.alert(error.response.data.message);
        throw error;
      });
    setIsSearching(true);
    setTextSearch(keyword);
  };
  const onPressSearch = async () => {
    if (textSearch != '') {
      const res = apiSearchV2(token, textSearch);
      res
        .then((response) => {
          setResponseReq(response.data.payload);
        })
        .catch((error) => {
          Alert.alert(error.response.data.message);
          throw error;
        });
      setIsSearching(true);
    }
  };
  console.log('search.js', isSearching);
  const viewSearch = () => {
    if (textSearch == '') {
      return (
        <SearchHistory
          OnPressListenItem={(keyword) => onPressSearchHistory(keyword)}
          {...props}
        />
      );
    } else {
      if (
        isSearching == true &&
        responseReq.courses.total == 0 &&
        responseReq.instructors.total == 0
      ) {
        return <NoResult textSearch={textSearch} />;
      } else if (isSearching == true) {
        return <Result {...props} dataSearch={responseReq} />;
      } else {
        return <View />;
      }
    }
  };
  const onChangeTextFunc = (textSearch) => {
    setTextSearch(textSearch);
    setIsSearching(false);
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
            onChangeText={(textSearch) => onChangeTextFunc(textSearch)}
          />
          <TouchableOpacity style={styles.button} onPress={onPressSearch}>
            <Image
              source={require('../../../../assets/searchIcon.png')}
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
      </View>
      {viewSearch()}
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
