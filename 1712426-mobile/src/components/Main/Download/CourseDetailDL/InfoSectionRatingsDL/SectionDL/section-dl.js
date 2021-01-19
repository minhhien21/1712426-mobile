import React from 'react';
import {StyleSheet, FlatList} from 'react-native';
import SectionItemDL from '../SectionItemDL/section-item-dl';
const SectionDL = (props) => {
  return (
    <FlatList
      style={styles.container}
      data={props.dataSection}
      renderItem={({item}) => (
        <SectionItemDL
          itemList={item}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0e0f13',
  },
});
export default SectionDL;
