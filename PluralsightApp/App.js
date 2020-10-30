import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
} from 'react-native';
import Login from './src/components/Authentication/Login/login';
import Register from './src/components/Authentication/Register/register';
import Browse from './src/components/Main/Browse/browse';
import Home from './src/components/Main/Home/home';

export default function App() {
  return (
    <Browse></Browse>
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
