import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
} from 'react-native';
import Login from './src/components/Authentication/Login/login';
import Register from './src/components/Authentication/Register/register';

export default function App() {
  return (
    <Login></Login>
  );
};

const styles = StyleSheet.create({
  sizebutton: {
    height: 40,
    width: 40,
    marginLeft: 10,
  },
  boderbutton: {
    borderColor: "black",
    borderWidth: 2,
    backgroundColor: "white",
    textAlign: "center"
  },
  square: {
    borderColor: "black",
    borderWidth: 2,
    height: 120,
    width: 120
  }
});
