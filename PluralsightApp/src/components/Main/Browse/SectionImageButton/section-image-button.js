import React, {useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import ImageButton from '../../../Common/image-button';

const SectionImageButton = (props) => {
  return (
    <ScrollView style={styles.layoutHome} horizontal={true}>
      <ImageButton title={`${'NEW\nRELEASES'}`}/>
      <ImageButton title={`${'NEW\nRELEASES'}`}/>
      <ImageButton title={`${'NEW\nRELEASES'}`}/>
      <ImageButton title={`${'NEW\nRELEASES'}`}/>
      <ImageButton title={`${'NEW\nRELEASES'}`}/>
      <ImageButton title={`${'NEW\nRELEASES'}`}/>
      <ImageButton title={`${'NEW\nRELEASES'}`}/>
      <ImageButton title={`${'NEW\nRELEASES'}`}/>
      <ImageButton title={`${'NEW\nRELEASES'}`}/>
      <ImageButton title={`${'NEW\nRELEASES'}`}/>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  layoutHome: {
    backgroundColor: '#0e0f13',
  },
});
export default SectionImageButton;
