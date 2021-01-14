import React from 'react';
import {Rating} from 'react-native-elements';
import {StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native';
const ListCourseDownloadItem = (props) => {
  const updatedAt = String(props.item.updatedAt).split('T');
  const convertDate = String(updatedAt[0]).split('-');
  const totalHours = parseFloat(props.item.totalHours);
  const hour = parseInt(totalHours);
  const convertMinute = 60 * (totalHours - hour);
  const minute = parseInt(convertMinute);

  let formalityPoint = 0;
  let contentPoint = 0;
  let presentationPoint = 0;
  if(props.item.formalityPoint != null){
    formalityPoint = parseFloat(props.item.formalityPoint);
  }
  if(props.item.contentPoint != null){
    contentPoint = parseFloat(props.item.contentPoint);
  }
  if(props.item.presentationPoint != null){
    presentationPoint = parseFloat(props.item.presentationPoint);
  }
  const averagePoint = (formalityPoint + contentPoint + presentationPoint) / 3;
  let titleName = "";
  if(String(props.item.title).length < 37){
    titleName = props.item.title;
  }else{
    titleName = String(props.item.title).substring(0,34);
    titleName += "...";
  }
  return (
    <TouchableOpacity
      style={styles.item}
      onPress={() => {
        props.OnPressListenItem();
      }}>
      <Image source={{uri: props.item.imageUrl}} style={styles.image} />
      <View style={styles.viewText}>
        <Text style={styles.title}>{titleName}</Text>
        <Text style={styles.title}>{props.item['instructor.user.name'] || props.item.instructorName|| props.item.name}</Text>
        <Text style={styles.darktext}>{props.item.price}</Text>

        <Text style={[styles.darktext]}>
          {`${convertDate[2]}-${convertDate[1]}-${convertDate[0]} . ${hour}${'h '}${minute}${'m'}`}</Text>
        <View style={{flexDirection: 'row'}}>
          <Rating
            type="custom"
            ratingBackgroundColor="darkgray"
            tintColor="#0e0f13"
            ratingCount={5}
            imageSize={22}
            startingValue={averagePoint}
          />
          <Text style={styles.darktext}>({props.item.ratedNumber})</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    marginHorizontal: 15,
    height: 105,
    flexDirection: 'row',
    borderWidth: 3,
    borderBottomColor: '#1f242a',
  },
  image: {
    width: '25%',
    height: '90%',
    alignSelf: 'center',
    marginLeft: 10,
  },
  viewText: {
    width: '75%',
    padding: 15,
    alignSelf: 'center',
  },
  title: {
    color: 'white',
  },
  darktext: {
    color: 'darkgray',
  },
});
export default ListCourseDownloadItem;
