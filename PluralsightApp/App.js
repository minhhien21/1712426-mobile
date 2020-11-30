import React, {useEffect, useState} from 'react';
import { View } from 'react-native';
import 'react-native-gesture-handler';
import AccountManagement from './src/components/Account Management/account-management';
import ChangePassword from './src/components/Account Management/ChangePassword/change-password';
import Settings from './src/components/Account Management/Settings/settings';
import UpdateInformation from './src/components/Account Management/UpdateInformation/update-information';
import AppNavigation from './src/components/Others/Navigation';

export default function App() {
  return( 
      <AppNavigation/>
  );
}
//<AppNavigation/>

