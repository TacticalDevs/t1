import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black'
  },
  camera: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  text: {
    fontSize: 18,
    color: 'white'
  },
  buttonContainer: {
    flex: 0.5,
    alignSelf: 'flex-end',
    justifyContent: 'space-around',
    backgroundColor: 'transparent',
    flexDirection: 'column',
    margin: 20
  },
  flipButton: {
    // flex: 1,
    alignSelf: 'flex-end'
    // alignItems: 'flex-end'
    // marginBottom: 50
  },
  recordButton: {
    // flex: 1
    // alignSelf: 'flex-end',
    // alignItems: 'flex-end'
  }
});

export default styles;
