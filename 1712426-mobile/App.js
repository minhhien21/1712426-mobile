import React from 'react';
import 'react-native-gesture-handler';
import AppNavigation from './src/components/Others/Navigation';
import {AuthenticationProvider} from './src/provider/authentication-provider';
import {InstructorProvider} from './src/provider/instructor-provider';
import {CourseProvider} from './src/provider/course-provider';
import {CategoryProvider} from './src/provider/category-provider';

export default function App() {
  return (
    <AuthenticationProvider>
      <CourseProvider>
        <CategoryProvider>
          <InstructorProvider>
            <AppNavigation />
          </InstructorProvider>
        </CategoryProvider>
      </CourseProvider>
    </AuthenticationProvider>
  );
}
{
  /* <AuthenticationProvider>
      <CourseProvider>
        <InstructorProvider>
          <AppNavigation />
        </InstructorProvider>
      </CourseProvider>
    </AuthenticationProvider> */
}
