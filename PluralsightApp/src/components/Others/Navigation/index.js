import {createAppContainer, NavigationContainer} from 'react-navigation';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs'
//import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ListCourses from '../../Courses/ListCourses/list-courses';
import ListPaths from '../../Paths/ListPaths/list-paths';
import ListAuthor from '../../Authors/ListAuthors/list-authors';
import Search from '../../Main/Search/search';
import Login from '../../Authentication/Login/login';
import Register from '../../Authentication/Register/register'
import Home from '../../Main/Home/home';
import Browse from '../../Main/Browse/browse';
import CourseDetail from '../../Courses/CourseDetail/course-detail';
import AuthorDetail from '../../Authors/AuthorDetail/author-detail';
import PathDetail from '../../Paths/PathDetail/path-detail';

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

const createSearchStack = createStackNavigator(
  {
    Search:{
      screen: Search,
      navigationOptions:{
        header: null,
      }
    },
    CourseDetail:{
      screen: CourseDetail,
      navigationOptions:{
        header: null,
      }
    },
    AuthorDetail:{
      screen: AuthorDetail,
    },
    PathDetail:{
      screen: PathDetail,
    }
  },
);
const createHomeStack = createStackNavigator(
  {
    Home:{
      screen: Home,
      navigationOptions:{
        header: null,
      }
    },
    CourseDetail:{
      screen: CourseDetail,
      navigationOptions:{
        header: null,
      }
    }
  },

);
const createBrowseStack = createStackNavigator(
  {
    Browse:{
      screen: Browse,
      navigationOptions:{
        header: null,
      }
    },
    PathDetail:{
      screen: PathDetail,
    },
    AuthorDetail:{
      screen: AuthorDetail,
    }
  }
);
const HomeStack = createBottomTabNavigator(
  {
    Home:{
      screen: createHomeStack,
      navigationOptions:{
        header: null,
      }
    },
    Browse:{
      screen: createBrowseStack,
      navigationOptions:{
        header: null,
      }
    },
    Search:{
      screen: createSearchStack,
      navigationOptions:{
        header: null,
      }
    },
  }
);
const AppNavigator = createStackNavigator(
  {
    Login:{
      screen: Login,
      navigationOptions:{
        header: null,
      }
    },
    Register:{
      screen: Register,
      navigationOptions:{
        header: null,
      }
    },
    HomeScreen:{
      screen: HomeStack,
      navigationOptions:{
        header: null,
      }
    },
  },
  {
    initialRouteName: 'Login',
  },
);

//const CustomTabNavigator = createAppContainer(TabNavigator);
//const AppNavigation = createAppContainer(AppNavigator);
const AppNavigation = createAppContainer(HomeStack);
export default AppNavigation;
