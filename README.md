# Project T1

## Description 
React Native Cross Platform App

## Tech Stack
  React Native 
  AWS (S3, Amplify, AppSync, DynamoDB, Cognito)
  

## Dependencies

Expo:
  - expo
  - expo-av
  - expo-status-bar

Navigation:
  - react-navigation/native
  - react-navigation/stack
  - react-navigation/bottom-tabs
  - react-navigation/native-stack
  - react-native-community/masked-view

Screens:
  - react-native-gesture-handler
  - react-native-safe-area-context
  - react-native-screens

Icons :
 - react-native-icons

AWS Amplify Dependencies:
  - aws-amplify aws-amplify-react-native amazon-cognito-identity-js @react-native-community/netinfo @react-native-async-storage/async-storage @react-native-picker/picker
  GraphQL

## GraphQl Data sample

`query MyQuery {
  getUser(id: "494562ac-272e-47ba-907f-ad8df843f06e") {
    id
    createdAt
    username
  }
}

query listPosts {
  listPosts{
    items{
      id
      description
    }
  }
}

mutation addUser {
  createUser(input: {email: "test1@email.com", username: "testuser1"}) {
    id
    createdAt
    email
  } 
}

mutation addPost {
  createPost(input: {
    description: "Test Post 3 from AWS", 
    userPostsId: "494562ac-272e-47ba-907f-ad8df843f06e", 
    postSongId: "512b44fc-0427-497f-9058-61eb1bb999f9", 
    videoUri: "https://player.vimeo.com/external/559206060.sd.mp4?s=991e3c00685cec135307ce94d63ba868149bd221&profile_id=165&oauth2_token_id=57447761"
  }) {
    id
  }
}

mutation addSong {
  createSong(input: {name: "Nirvana - Come as you are!", imageUri: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.sundazed.com%2Fmedia%2Fimages%2FLP-5063_BLK_900.png&f=1&nofb=1"}){
    id 
  	name
  }
}`
