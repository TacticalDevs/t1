import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,

    justifyContent: 'space-between'
  },
  textInput: {
    width: '100%',
    height: 50,
    backgroundColor: '#fff',
    margin: 10,
    padding: 5
  },
  button: {
    backgroundColor: 'orange',
    alignItems: 'center',
    margin: 10,
    padding: 10,
    marginBottom: 30
  },
  buttonText: {
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 18
  }
});

export default styles;
