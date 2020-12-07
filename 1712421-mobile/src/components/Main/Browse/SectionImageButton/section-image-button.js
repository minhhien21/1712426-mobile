import React, {useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import ImageButton from '../../../Common/image-button';

const SectionImageButton = (props) => {
  return (
    <ScrollView style={styles.layoutHome} horizontal={true}>
      <View style={styles.imagebutton}>
        <ImageButton title={`${'NEW\nRELEASES'}`} />
      </View>
      <View style={styles.imagebutton}>
        <ImageButton title={`${'NEW\nRELEASES'}`} />
      </View>
      <View style={styles.imagebutton}>
        <ImageButton title={`${'NEW\nRELEASES'}`} />
      </View>
      <View style={styles.imagebutton}>
        <ImageButton title={`${'NEW\nRELEASES'}`} />
      </View>
      <View style={styles.imagebutton}>
        <ImageButton title={`${'NEW\nRELEASES'}`} />
      </View>
      <View style={styles.imagebutton}>
        <ImageButton title={`${'NEW\nRELEASES'}`} />
      </View>
      <View style={styles.imagebutton}>
        <ImageButton title={`${'NEW\nRELEASES'}`} />
      </View>
      <View style={styles.imagebutton}>
        <ImageButton title={`${'NEW\nRELEASES'}`} />
      </View>
      <View style={styles.imagebutton}>
        <ImageButton title={`${'NEW\nRELEASES'}`} />
      </View>
      <View style={styles.imagebutton}>
        <ImageButton title={`${'NEW\nRELEASES'}`} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  layoutHome: {
    backgroundColor: '#0e0f13',
  },
  imagebutton: {
    marginRight: 8,
  },
});
export default SectionImageButton;
