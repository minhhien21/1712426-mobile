import React from 'react';
import 'react-native-gesture-handler';
import AppNavigation from './src/components/Others/Navigation';
import {AuthenticationProvider} from './src/provider/authentication-provider';
import {InstructorProvider} from './src/provider/instructor-provider';
import {CourseProvider} from './src/provider/course-provider';
import VideoPlayer from './src/components/Courses/CourseDetail/VideoPlayer/video-player';

export default function App() {
  return (
    <AuthenticationProvider>
      <CourseProvider>
        <InstructorProvider>
          <AppNavigation />
        </InstructorProvider>
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
