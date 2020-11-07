import {
    createAppContainer,
    NavigationContainer,
  } from 'react-navigation';
  import {
    createStackNavigator,
  } from 'react-navigation-stack';
import CourseDetail from '../../Courses/CourseDetail/course-detail';
import ListCourses from '../../Courses/ListCourses/list-courses';
  
  const CourseDetailNavigator: NavigationContainer = createStackNavigator(
    {
      ['ListCourses']:ListCourses,
      ['CourseDetail']: CourseDetail,
    },
    {
      defaultNavigationOptions: {
        header: null,
      },
    },
  );
  
  export default Router;
  