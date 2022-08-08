import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import 'react-native-gesture-handler';
import Navigator from './src/navigation';
import Home from './src/screens/Home';

import { Amplify, Auth, Hub, API, graphqlOperation } from 'aws-amplify';
import awsconfig from './src/aws-exports';
Amplify.configure(awsconfig);

import { withAuthenticator } from 'aws-amplify-react-native';
import { CognitoHostedUIIdentityProvider } from '@aws-amplify/auth';
import { createUser } from './src/graphql/mutations';
import { getUser } from './src/graphql/queries';

const App = () => {
  const [user, setUser] = useState(null);
  const [customState, setCustomState] = useState(null);

  const avatars = [
    'https://publicdomainvectors.org/photos/doushouqi-cat.png',
    'https://publicdomainvectors.org/photos/1416155153.png',
    'https://publicdomainvectors.org/photos/chinese_zodiac_dog_color.png',
    'https://publicdomainvectors.org/photos/Dog_01_Face_Cartoon_Grey.png'
  ];

  const getRandomAvatar = () =>
    avatars[Math.floor(Math.random() * avatars.length)];

  //* Creates a new User from authenticated user
  useEffect(() => {
    const fetchUser = async () => {
      const userInfo = await Auth.currentAuthenticatedUser({
        bypassCache: true
      });

      if (!userInfo) return;
      // console.log(userInfo);

      // uses the cognito sub # to check if user already exist in db
      const dbUser = await API.graphql(
        graphqlOperation(getUser, { id: userInfo.attributes.sub })
      );
      if (dbUser.data.getUser) {
        console.log('=========>', dbUser);
        console.log('User already exist in db!');
        return;
      }

      // Create new user in db
      const newUser = {
        id: userInfo.attributes.sub,
        username: userInfo.username,
        email: userInfo.attributes.email,
        imageUri: getRandomAvatar()
      };
      // console.log(newUser);
      await API.graphql(graphqlOperation(createUser, { input: newUser }));
    };
    fetchUser();
  }, []);

  // useEffect(() => {
  //   const unsubscribe = Hub.listen('auth', ({ payload: { event, data } }) => {
  //     switch (event) {
  //       case 'signIn':
  //         setUser(data);
  //         break;
  //       case 'signOut':
  //         setUser(null);
  //         break;
  //       case 'customOAuthState':
  //         setCustomState(data);
  //     }
  //   });
  //   Auth.currentAuthenticatedUser()
  //     .then((currentUser) => setUser(currentUser))
  //     .catch(() => console.log('Not signed in'));

  //   return unsubscribe;
  // }, []);
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Navigator />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center'
  }
});

export default withAuthenticator(App);
