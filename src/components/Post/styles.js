import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  container: {
    // marginTop: 80
    // width: '100%'
    // height: Dimensions.get('window').height
  },
  video: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
    // position: 'absolute'
    // top: 100,
    // left: 0,
    // right: 0
  }
});

export default styles;
