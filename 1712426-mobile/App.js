import React, {useEffect, useState, useReducer} from 'react';
import {View} from 'react-native';
import 'react-native-gesture-handler';
import AppNavigation from './src/components/Others/Navigation';
import {AuthenticationProvider} from './src/provider/authentication-provider';

export default function App() {
  return (
    <AuthenticationProvider>
      <AppNavigation />
    </AuthenticationProvider>
  );
}
{/* <AuthenticationProvider>
      <AppNavigation />
    </AuthenticationProvider> */}
