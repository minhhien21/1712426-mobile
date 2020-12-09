import React, {useState} from 'react';
import {Button, TouchableOpacity, Image, View} from 'react-native';
import {createAppContainer, NavigationContainer} from 'react-navigation';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {ScreenKey} from '../../../globals/constants';
import ListCourses from '../../Courses/ListCourses/list-courses';
import ListPaths from '../../Paths/ListPaths/list-paths';
import ListAuthor from '../../Authors/ListAuthors/list-authors';
import Search from '../../Main/Search/search';
import Login from '../../Authentication/Login/login';
import Register from '../../Authentication/Register/register';
import Home from '../../Main/Home/home';
import Browse from '../../Main/Browse/browse';
import CourseDetail from '../../Courses/CourseDetail/course-detail';
import AuthorDetail from '../../Authors/AuthorDetail/author-detail';
import PathDetail from '../../Paths/PathDetail/path-detail';
import Icon from 'react-native-vector-icons/Ionicons';
import ListOfListPaths from '../../Paths/ListofListPaths/list-of-list-paths';
import AllListPaths from '../../Paths/AllListPaths/all-list-paths';
import PopularSkillsDetail from '../../Main/Browse/PopularSkillsDetail/popular-skills-detail';
import AccountManagement from '../../Account Management/account-management';
import SplashScreen from '../SplashScreen/splash-screen';
import Settings from '../../Account Management/Settings/settings';
import NewReleases from '../../Main/Browse/SectionImageButton/NewReleases/new-releases';
import UpdateInformation from '../../Account Management/UpdateInformation/update-information';
import ChangePassword from '../../Account Management/ChangePassword/change-password';
import ForgetPassword from '../../Authentication/ForgetPassword/forget-password';

const userToken = 1;
// const TabNavigator = createMaterialTopTabNavigator(
//   {
//     All: {
//       screen: ListCourses,
//     },
//     Courses: {
//       screen: ListCourses,
//     },
//     Paths: {
//       screen: ListPaths,
//     },
//     Authors: {
//       screen: ListAuthor,
//     },
//   },
//   {
//     tabBarComponent: Search,
//     tabBarOptions: {
//       activeTintColor: '#1BA1F3',
//       inactiveTintColor: '#000',
//     },
//     initialRouteName: 'All',
//   },
// );

const createHomeStack = createStackNavigator({
  [ScreenKey.Home]: {
    screen: Home,
    navigationOptions: ({navigation}) => ({
      title: 'Home',
      headerStyle: {
        backgroundColor: '#181b20',
      },
      headerTintColor: 'white',
      headerLeft: null,
      headerRight: () => (
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            onPress={() => navigation.push(ScreenKey.AccountManagement)}>
            <Image
              source={require('../../../../assets/person.png')}
              style={{height: 30, width: 30, marginRight: 15}}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{alignSelf: 'center'}}
            onPress={() => navigation.push(ScreenKey.Settings)}>
            <Image
              source={require('../../../../assets/more.png')}
              style={{height: 25, width: 25, marginRight: 5}}
            />
          </TouchableOpacity>
        </View>
      ),
    }),
  },

  [ScreenKey.AccountManagement]: {
    screen: AccountManagement,
    navigationOptions: {
      title: 'Profile',
      headerStyle: {
        backgroundColor: '#181b20',
      },
      headerTintColor: 'white',
    },
  },
  [ScreenKey.Settings]: {
    screen: Settings,
    navigationOptions: {
      title: 'Settings',
      headerStyle: {
        backgroundColor: '#181b20',
      },
      headerTintColor: 'white',
    },
  },
  [ScreenKey.UpdateInformation]: {
    screen: UpdateInformation,
    navigationOptions: {
      title: 'Update Information',
      headerStyle: {
        backgroundColor: '#181b20',
      },
      headerTintColor: 'white',
    },
  },
  [ScreenKey.ChangePassword]: {
    screen: ChangePassword,
    navigationOptions: {
      title: 'Change Password',
      headerStyle: {
        backgroundColor: '#181b20',
      },
      headerTintColor: 'white',
    },
  },
  [ScreenKey.CourseDetail]: {
    screen: CourseDetail,
    navigationOptions: {
      headerShown: false,
    },
  },
  [ScreenKey.ListCourses]: {
    screen: ListCourses,
    navigationOptions: {
      headerShown: false,
    },
  },
  [ScreenKey.AuthorDetail]: {
    screen: AuthorDetail,
    navigationOptions: {
      title: 'Author',
      headerStyle: {
        backgroundColor: '#181b20',
      },
      headerTintColor: 'white',
    },
  },
});
const createBrowseStack = createStackNavigator({
  [ScreenKey.Browse]: {
    screen: Browse,
    navigationOptions: ({navigation}) => ({
      title: 'Browse',
      headerStyle: {
        backgroundColor: '#181b20',
      },
      headerTintColor: 'white',
      headerLeft: null,
      headerRight: () => (
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            onPress={() => navigation.push(ScreenKey.AccountManagement)}>
            <Image
              source={require('../../../../assets/person.png')}
              style={{height: 30, width: 30, marginRight: 15}}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{alignSelf: 'center'}}
            onPress={() => navigation.push(ScreenKey.Settings)}>
            <Image
              source={require('../../../../assets/more.png')}
              style={{height: 25, width: 25, marginRight: 5}}
            />
          </TouchableOpacity>
        </View>
      ),
    }),
  },
  [ScreenKey.AccountManagement]: {
    screen: AccountManagement,
    navigationOptions: {
      title: 'Profile',
      headerStyle: {
        backgroundColor: '#181b20',
      },
      headerTintColor: 'white',
    },
  },
  [ScreenKey.Settings]: {
    screen: Settings,
    navigationOptions: {
      title: 'Settings',
      headerStyle: {
        backgroundColor: '#181b20',
      },
      headerTintColor: 'white',
    },
  },
  [ScreenKey.UpdateInformation]: {
    screen: UpdateInformation,
    navigationOptions: {
      title: 'Update Information',
      headerStyle: {
        backgroundColor: '#181b20',
      },
      headerTintColor: 'white',
    },
  },
  [ScreenKey.ChangePassword]: {
    screen: ChangePassword,
    navigationOptions: {
      title: 'Change Password',
      headerStyle: {
        backgroundColor: '#181b20',
      },
      headerTintColor: 'white',
    },
  },
  [ScreenKey.PathDetail]: {
    screen: PathDetail,
    navigationOptions: {
      title: '',
      headerStyle: {
        backgroundColor: '#181b20',
      },
      headerTintColor: 'white',
    },
  },
  [ScreenKey.AuthorDetail]: {
    screen: AuthorDetail,
    navigationOptions: {
      title: 'Author',
      headerStyle: {
        backgroundColor: '#181b20',
      },
      headerTintColor: 'white',
    },
  },
  [ScreenKey.CourseDetail]: {
    screen: CourseDetail,
    navigationOptions: {
      headerShown: false,
    },
  },
  [ScreenKey.ListOfListPaths]: {
    screen: ListOfListPaths,
    navigationOptions: {
      title: 'Paths',
      headerStyle: {
        backgroundColor: '#181b20',
      },
      headerTintColor: 'white',
    },
  },
  [ScreenKey.AllListPaths]: {
    screen: AllListPaths,
    navigationOptions: {
      headerShown: false,
    },
  },
  [ScreenKey.PopularSkillsDetail]: {
    screen: PopularSkillsDetail,
    navigationOptions: {
      headerShown: false,
    },
  },
  [ScreenKey.NewReleases]: {
    screen: NewReleases,
    navigationOptions: {
      headerShown: false,
    },
  },
});
const createSearchStack = createStackNavigator({
  [ScreenKey.Search]: {
    screen: Search,
    navigationOptions: {
      headerShown: false,
    },
  },
  [ScreenKey.CourseDetail]: {
    screen: CourseDetail,
    navigationOptions: {
      headerShown: false,
    },
  },
  [ScreenKey.AuthorDetail]: {
    screen: AuthorDetail,
    navigationOptions: {
      title: 'Author',
      headerStyle: {
        backgroundColor: '#181b20',
      },
      headerTintColor: 'white',
    },
  },
  [ScreenKey.PathDetail]: {
    screen: PathDetail,
    navigationOptions: {
      title: '',
      headerStyle: {
        backgroundColor: '#181b20',
      },
      headerTintColor: 'white',
    },
  },
});

const HomeStack = createBottomTabNavigator(
  {
    [ScreenKey.HomeStack]: {
      screen: createHomeStack,
      navigationOptions: {
        title: 'Home',
        headerStyle: {
          backgroundColor: '#181b20',
        },
        headerTintColor: 'white',
        tabBarIcon: ({tintColor}) => (
          <Icon name="home" color={tintColor} size={25} />
        ),
      },
    },
    [ScreenKey.DownloadStack]: {
      screen: createHomeStack,
      navigationOptions: {
        title: 'Download',
        tabBarIcon: ({tintColor}) => (
          <Icon name="arrow-down-circle" color={tintColor} size={25} />
        ),
      },
    },
    [ScreenKey.BrowseStack]: {
      screen: createBrowseStack,
      navigationOptions: {
        title: 'Browse',
        headerStyle: {
          backgroundColor: '#181b20',
        },
        headerTintColor: 'white',
        tabBarIcon: ({tintColor}) => (
          <Icon name="grid" color={tintColor} size={25} />
        ),
      },
    },
    [ScreenKey.SearchStack]: {
      screen: createSearchStack,
      navigationOptions: {
        headerShown: false,
        tabBarIcon: ({tintColor}) => (
          <Icon name="search" color={tintColor} size={25} />
        ),
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: '#026f9b',
      inactiveTintColor: 'white',
      style: {
        backgroundColor: '#181b20',
        borderTopColor: 'transparent',
      },
      tabStyle: {
        tabBarBackgroundColor: 'white',
        tabBarButtonColor: 'white',
        tabBarSelectedButtonColor: 'white',
        flexDirection: 'column',
      },
    },
  },
);

var AppNavigator;
if (userToken == null) {
  AppNavigator = createStackNavigator(
    {
      [ScreenKey.SplashScreen]: {
        screen: SplashScreen,
        navigationOptions: {
          headerShown: false,
        },
      },
      [ScreenKey.Login]: {
        screen: Login,
        navigationOptions: {
          headerShown: false,
        },
      },
      [ScreenKey.Register]: {
        screen: Register,
        navigationOptions: {
          title: 'Register',
          headerStyle: {
            backgroundColor: '#181b20',
          },
          headerTintColor: 'white',
        },
      },
      [ScreenKey.ForgetPassword]: {
        screen: ForgetPassword,
        navigationOptions: {
          title: 'Forget Password',
          headerStyle: {
            backgroundColor: '#181b20',
          },
          headerTintColor: 'white',
        },
      },
      [ScreenKey.HomeScreen]: {
        screen: HomeStack,
        navigationOptions: {
          headerShown: false,
        },
      },
    },
    {
      initialRouteName: ScreenKey.Login,
    },
  );
} else {
  AppNavigator = createStackNavigator(
    {
      [ScreenKey.SplashScreen]: {
        screen: SplashScreen,
        navigationOptions: {
          headerShown: false,
        },
      },
      [ScreenKey.Login]: {
        screen: Login,
        navigationOptions: {
          headerShown: false,
        },
      },
      [ScreenKey.Register]: {
        screen: Register,
        navigationOptions: {
          title: 'Register',
          headerStyle: {
            backgroundColor: '#181b20',
          },
          headerTintColor: 'white',
        },
      },
      [ScreenKey.ForgetPassword]: {
        screen: ForgetPassword,
        navigationOptions: {
          title: 'Forget Password',
          headerStyle: {
            backgroundColor: '#181b20',
          },
          headerTintColor: 'white',
        },
      },
      [ScreenKey.HomeScreen]: {
        screen: HomeStack,
        navigationOptions: {
          headerShown: false,
        },
      },
    },
    {
      initialRouteName: ScreenKey.HomeScreen,
    },
  );
}

// const AppNavigator = createStackNavigator(
//   {
//     [ScreenKey.SplashScreen]: {
//       screen: SplashScreen,
//       navigationOptions: {
//         headerShown: false,
//       },
//     },
//     [ScreenKey.Login]: {
//       screen: Login,
//       navigationOptions: {
//         headerShown: false,
//       },
//     },
//     [ScreenKey.Register]: {
//       screen: Register,
//       navigationOptions: {
//         headerShown: false,
//       },
//     },
//     [ScreenKey.HomeScreen]: {
//       screen: HomeStack,
//       navigationOptions: {
//         headerShown: false,
//       },
//     },
//   },
//   {
//     initialRouteName: ScreenKey.Login,
//   },
// );

//const CustomTabNavigator = createAppContainer(TabNavigator);
const AppNavigation = createAppContainer(AppNavigator);
//const AppNavigation = createAppContainer(HomeStack);
export default AppNavigation;
