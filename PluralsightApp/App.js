import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

export default function App() {
  var ListColor = ["white"];
  const [ColorState, setColorState] = useState(ListColor);
  const [styleColor, setStyleColor] = useState({});
  const [Index, setIndex] = useState(0);
 
  return (
    <View style={{flex:1}}>
      <Text>123</Text>
    </View>
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
