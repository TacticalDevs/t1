# Project T1
## Description 
This is a React Native Cross Platform social media App. 

## Mockup

![t1 iphone](https://reactnative-assets.s3.amazonaws.com/Screen+Shot+2022-08-08+at+1.13.32+AM.png)
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

## GraphQL Data sample

```query MyQuery {
  getUser(id: "494562ac-272e-47ba-907f-ad8df843f06e") {
    id
    createdAt
    username
    imageUri
  }
}

query listUsers {
  listUsers{
    items{
      id
      username
    }
  }
}

mutation updateUser {
  updateUser(input: {
  id: "494562ac-272e-47ba-907f-ad8df843f06e",
  imageUri: "https://foreignpolicyi.org/wp-content/uploads/2019/06/Dwayne-Johnson.jpg"
  }) {
    id
    imageUri
  }
}

mutation addUser {
  createUser(input: {
    email: "test1@email.com", 
    username: "testuser1",
    imageUri: "https://foreignpolicyi.org/wp-content/uploads/2019/06/Dwayne-Johnson.jpg"
  }) {
    id
    createdAt
    email
  } 
}

mutation removeUser {
  deleteUser(input: {
    id: "15c838f0-0c1d-4dce-a0aa-8faa4aea6c1d"
  }) {
    id
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

query listPostsPagination {
  listPosts(limit: 1){
    items{
      id
      description
    }
    nextToken
  }
}

query listPostsPaginationNextToken {
  listPosts(limit: 1, nextToken: "eyJ2ZXJzaW9uIjoyLCJ0b2tlbiI6IkFRSUNBSGg5OUIvN3BjWU41eE96NDZJMW5GeGM4WUNGeG1acmFOMUpqajZLWkFDQ25BSGpCaGZzVHZ2VFYzSUhKM3FLdWphREFBQUNHVENDQWhVR0NTcUdTSWIzRFFFSEJxQ0NBZ1l3Z2dJQ0FnRUFNSUlCK3dZSktvWklodmNOQVFjQk1CNEdDV0NHU0FGbEF3UUJMakFSQkF6S1NUSCs5N3dXVHBhZ0hSY0NBUkNBZ2dITURaek45a0t5STQzMHZtVVE0Vk9CY240L08zVm8wV0JEMFJjY2VrcitWNnJqTmZNOWNXa1hiYWt2aXQrRGlJNm9HU3NUV2FVWUJRMEhBRzVSQjdlSXJ1a3NtbmkrMDBmNUdOTWR2a2pEdnNqREpzLzkvUkQ4Zjg4TnE2U0p6SFRCTFRKYkQvbm5PM2FkUzNzSHZIMVZYVHpiVU9ENE9DY3pEd2ZEUjloMDZBNFZHVjBiWEVNR1NtbDlCTldCZU93c09EOUk5WWY4TXV6QTc2NEVIZTV1cWx3L0hZVTFjNGZwaEw2YitleWxWVFpVRkNrY3RndHBVUy8wWmlKMDJ1aHJvZzBITmVQYVB0R2tQaUw4K3BJUmN5WUhWOGJKUFZFc0ZteXBMYmdoaGQwcUkvVXRoZ2c1eU4vOU1aMVhEQzR1aWloVUkrRnlmYXE4ZDlmaTc3YktyZisrTVM5cG9UY3pMcTJ5WkhhZGdLcG42dEFzRno2M0VHUHJkT2pZYUUvZ3lsT2NQUjN3eXIvOXA1YnUrSEVSaWQvb2FlK1NPaGpSUllxaDVUYWJSL0NsM2hzc1o4MUtzQmFRQkRZR29NQlVqL1MrVGdRck1GLzVLWjlDcE5lN2lON1hwRVQ2alNIeS81aE9BdzRDZlBXUDcreGpIeXFxTVByZ2xHTXFoS2h1ZmxXN2d1a2JRSVZqOElJQWJlR0pJR0w2cVRWbE1OVkZhKzZMa0x0My9OZzNlZkpoalhVcWxBK2dBNGplTHRXdE16M01KVHpJQjBob1VUV2R2bG96ZTFoUWFCaHFob1BDSzFMUHZBPT0ifQ=="){
    items{
      id
      description
    }
    nextToken
  }
}

mutation addPost {
  createPost(input: {
    description: "Test Post 3 from AWS", 
    userPostsId: "c95ae19c-9e8b-4df1-8196-c2c0b534e59d", 
    postSongId: "512b44fc-0427-497f-9058-61eb1bb999f9", 
    videoUri: "https://player.vimeo.com/external/559206060.sd.mp4?s=991e3c00685cec135307ce94d63ba868149bd221&profile_id=165&oauth2_token_id=57447761"
  }) {
    id
  }
}

mutation removePost {
  deletePost(input: {id: "b437b924-5553-42cc-8896-b0096af3d832"}) {
    id
  }
}

mutation addSong {
  createSong(input: {name: "Nirvana - Come as you are!", imageUri: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.sundazed.com%2Fmedia%2Fimages%2FLP-5063_BLK_900.png&f=1&nofb=1"}){
    id 
  	name
  }
}
```
