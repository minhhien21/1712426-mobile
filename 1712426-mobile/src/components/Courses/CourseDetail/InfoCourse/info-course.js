import React, {useContext, useState, useEffect} from 'react';
import {Rating} from 'react-native-elements';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {ScreenKey} from '../../../../globals/constants';
import {InstructorContext} from '../../../../provider/instructor-provider';
const InfoCourse = (props) => {
  var itemProps = props.navigation.state.params.item;
  const createdAt = String(itemProps.createdAt).split('T');
  const convertDate = String(createdAt[0]).split('-');
  const totalHours = parseFloat(itemProps.totalHours);
  const hour = parseInt(totalHours);
  const convertMinute = 60 * (totalHours - hour);
  const minute = parseInt(convertMinute);

  const formalityPoint = parseInt(itemProps.formalityPoint);
  const contentPoint = parseInt(itemProps.contentPoint);
  const presentationPoint = parseInt(itemProps.presentationPoint);
  const averagePoint = (formalityPoint + contentPoint + presentationPoint) / 3;

  const instructorContext = useContext(InstructorContext);
  instructorContext.state.isRequestedDetailInstructor = false;
  useEffect(() => {
    if (!instructorContext.state.isRequestedDetailInstructor) {
      instructorContext.requestDetailInstructor(itemProps.instructorId);
    }
  }, [instructorContext.state.isRequestedDetailInstructor]);
  const data = instructorContext.state.DetailInstructor.payload;
  const OnPressListen = () => {
    props.navigation.push(ScreenKey.AuthorDetail, {item: data});
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.item}>
        <Text style={styles.textHeader}>{itemProps.title}</Text>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity styles={styles.imageButton} onPress={OnPressListen}>
            <View style={styles.imageButton}>
              <Image
                source={{
                  uri: data.avatar,
                }}
                style={styles.image}
              />
              <Text style={styles.textImage}>{data.name}</Text>
            </View>
          </TouchableOpacity>
        </View>
        <Text style={styles.darktext}>{`${'Giá: '}${itemProps.price}`}</Text>
        <Text style={styles.darktext}>{`${'Trạng thái: '}${
          itemProps.status
        }`}</Text>
        <View
          style={{flexDirection: 'row', marginTop: 10, alignItems: 'center'}}>
          <Text style={{color: 'darkgray'}}>
            {`${convertDate[2]}-${convertDate[1]}-${convertDate[0]} . ${hour}${'h '}${minute}${'m'}`}
          </Text>
          <Rating
            type="custom"
            ratingBackgroundColor="darkgray"
            tintColor="#1f242a"
            imageSize={22}
            startingValue={averagePoint}
            style={{marginLeft: 10}}
          />
          <Text style={{color: 'darkgray', marginLeft: 5}}>
            ({itemProps.ratedNumber})
          </Text>
        </View>

        <View style={styles.iconView}>
          <TouchableOpacity>
            <View>
              <View style={styles.viewImage}>
                <Image
                  source={require('../../../../../assets/bookmark.png')}
                  style={styles.icon}
                />
              </View>
              <Text style={styles.textIcon}>Bookmark</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View>
              <View style={styles.viewImage}>
                <Image
                  source={require('../../../../../assets/channel.png')}
                  style={styles.icon}
                />
              </View>
              <Text style={styles.textIcon}>Add to Channel</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View>
              <View style={styles.viewImage}>
                <Image
                  source={require('../../../../../assets/download.png')}
                  style={styles.icon}
                />
              </View>
              <Text style={styles.textIcon}>Download</Text>
            </View>
          </TouchableOpacity>
        </View>
        <Text style={[styles.content, {marginTop: 25}]}>
          - {itemProps.description}
        </Text>
        <Text style={styles.content}>- Yêu cầu:</Text>
        {itemProps.requirement.map((item) => (
          <Text style={styles.itemContent}>{`${'+ '}${item}`}</Text>
        ))}
        <Text style={styles.content}>- Kiến thức được học:</Text>
        {itemProps.learnWhat.map((item) => (
          <Text style={styles.itemContent}>{`${'+ '}${item}`}</Text>
        ))}
        <TouchableOpacity style={styles.button}>
          <View style={{flexDirection: 'row', alignSelf: 'center'}}>
            <Image
              source={require('../../../../../assets/check.png')}
              style={styles.icon}
            />
            <Text style={styles.textButton}>Take a learning check</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <View style={{flexDirection: 'row', alignSelf: 'center'}}>
            <Image
              source={require('../../../../../assets/view-list.png')}
              style={styles.icon}
            />
            <Text style={styles.textButton}>View related paths & courses</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1f242a',
    marginTop: 200,
  },
  item: {
    marginHorizontal: 15,
  },
  textHeader: {
    color: 'white',
    fontSize: 25,
  },
  button: {
    marginTop: 15,
    backgroundColor: '#3a434a',
    width: '100%',
  },
  textButton: {
    color: 'white',
    textAlign: 'center',
    paddingVertical: 10,
    marginLeft: 10,
  },
  imageButton: {
    marginTop: 15,
    backgroundColor: '#394249',
    marginRight: 10,
    height: 30,
    width: 120,
    borderRadius: 15,
    flexDirection: 'row',
  },
  image: {
    height: 30,
    width: 30,
    borderRadius: 15,
  },
  textImage: {
    color: 'white',
    alignSelf: 'center',
    padding: 5,
  },
  iconView: {
    flexDirection: 'row',
    marginTop: 15,
    marginHorizontal: 30,
    justifyContent: 'space-around',
  },
  view: {
    borderWidth: 1,
    borderColor: 'white',
  },
  viewImage: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: '#394249',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  icon: {
    height: 30,
    width: 30,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  textIcon: {
    color: 'white',
    textAlign: 'center',
  },
  viewText: {
    width: '75%',
    padding: 15,
  },
  title: {
    color: 'white',
  },
  darktext: {
    marginTop: 10,
    color: 'darkgray',
  },
  content: {
    color: 'white',
  },
  itemContent: {
    color: 'white',
    marginLeft: 20,
  },
});
export default InfoCourse;
