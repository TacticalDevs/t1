import React from 'react';
import { View, Text } from 'react-native';
import { Video } from 'expo-av';
import styles from './styles';

const Post = () => {
  return (
    <View style={styles.container}>
      <Video
        style={styles.video}
        source={{
          uri: 'https://d8vywknz0hvjw.cloudfront.net/fitenium-media-prod/videos/45fee890-a74f-11ea-8725-311975ea9616/proccessed_720.mp4'
        }}
        useNativeControls
        resizeMode="cover"
        isLooping
      />
    </View>
  );
};

export default Post;
