import React, {useState, useContext, useEffect} from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Text,
  ScrollView,
} from 'react-native';
import Result from './Result/result';
import {CourseContext} from '../../../provider/course-provider';
import NoResult from './Result/no-result';
import {apiSearchV2} from '../../../core/service/search-service';
import SearchHistory from './SearchHistory/search-history';
const Search = (props) => {
  const [textSearch, setTextSearch] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [result, setResult] = useState(false);
  const courseContext = useContext(CourseContext);

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

  // const onPressSearch = async () => {
  //   if (textSearch != '') {
  //     const res = await courseContext.requestSearchCourse(textSearch);
  //     if (
  //       courseContext.state.ResultCourse.payload.courses.total == 0 &&
  //       courseContext.state.ResultCourse.payload.instructors.total == 0
  //     ) {
  //       setResult(false);
  //     } else {
  //       setResult(true);
  //     }
  //     setIsSearching(true);
  //   }
  // };
  // const viewSearch = () => {
  //   if (textSearch == '') {
  //     return <Text style={{color: 'red'}}>123123123</Text>;
  //   } else {
  //     if (
  //       isSearching == true &&
  //       courseContext.state.ResultCourse.payload.courses.total == 0 &&
  //       courseContext.state.ResultCourse.payload.instructors.total == 0
  //     ) {
  //       return <NoResult textSearch={textSearch} />;
  //     } else if (isSearching == true) {
  //       return <Result {...props} />;
  //     } else {
  //       return <View />;
  //     }
  //   }
  // };

  const onPressSearch = async () => {
    if (textSearch != '') {
      const res = apiSearchV2(textSearch);
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
  const viewSearch = () => {
    if (textSearch == '') {
      return <SearchHistory/>;
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
