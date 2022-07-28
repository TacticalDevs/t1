import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
  },
  video: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    position: 'absolute',
    zIndex: 1
  },
  uiContainer: {
    position: 'absolute',
    zIndex: 3,
    bottom: 0,
    top: '50%',
    right: 0
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    padding: 10,
    zIndex: 3
  },
  handle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 10
  },
  description: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '300',
    marginBottom: 10
  },
  songRow: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  songName: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 5
  },
  sideContainer: {
    height: 300,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center'
    // backgroundColor: 'yellow'
  },
  profilePicture: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#fff',
    marginBottom: 20
  },
  iconsContainer: {
    // height: 300,
    // backgroundColor: 'red',
    alignItems: 'center'
  },
  statsLabel: {
    color: '#fff',
    marginBottom: 20,
    fontSize: 16,
    fontWeight: '600'
  }
});

export default styles;
