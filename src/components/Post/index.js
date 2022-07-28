import React, { useRef, useState } from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import { Video } from 'expo-av';
import styles from './styles';

const Post = () => {
  const video = useRef(null);
  const [status, setStatus] = useState({});

  const handlePlayPausePress = () => {
    status.isPlaying ? video.current.pauseAsync() : video.current.playAsync();
  };
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={handlePlayPausePress}>
        <Video
          ref={video}
          style={styles.video}
          source={{
            uri: 'https://v16m-webapp.tiktokcdn-us.com/cbc58fa5070cbf9df8521f032eaa3397/62e308d3/video/tos/useast5/tos-useast5-ve-0068c002-tx/bc908eff201745b79aae796120294f9c/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=1786&bt=893&cs=0&ds=3&ft=ebtHKH-qMyq8ZBTf5we2Njo7fl7Gb&mime_type=video_mp4&qs=0&rc=OjM3PGk4ZzloZjg5O2g0OUBpam1xOzU6ZmczZTMzZzczNEA0X2E0NWE2Xi4xYTEtYTMtYSNuMXJtcjQwLWJgLS1kMS9zcw%3D%3D&l=20220728160655639A5C3290444A33E07F'
          }}
          onError={(e) => console.error(e)}
          useNativeControls="false"
          resizeMode="cover"
          // isLooping="true"
          shouldPlay="true"
          onPlaybackStatusUpdate={(status) => setStatus(() => status)}
        />
      </TouchableWithoutFeedback>
      <View style={styles.bottomContainer}>
        <Text>This is the bottom component</Text>
      </View>
    </View>
  );
};

export default Post;
