import React from 'react';
import 'react-native-gesture-handler';
import AppNavigation from './src/components/Others/Navigation';
import {AuthenticationProvider} from './src/provider/authentication-provider';
import {InstructorProvider} from './src/provider/instructor-provider';
import {ListCourseProvider} from './src/provider/listcourse-provider';

export default function App() {
  return (
    <AuthenticationProvider>
      <ListCourseProvider>
        <InstructorProvider>
          <AppNavigation />
        </InstructorProvider>
      </ListCourseProvider>
    </AuthenticationProvider>
  );
}
{
  /* <AuthenticationProvider>
      <AppNavigation />
    </AuthenticationProvider> */
}
