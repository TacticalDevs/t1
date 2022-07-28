import React, { useRef, useState } from 'react';
import { View, Text, TouchableWithoutFeedback, Image } from 'react-native';
import { Video } from 'expo-av';
import styles from './styles';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';

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
            uri: 'https://v16m-webapp.tiktokcdn-us.com/dcbc35d1cf69b0518861c0266de06c09/62e34128/video/tos/useast5/tos-useast5-ve-0068c003-tx/c3d2d7761f174023851bf3e18a2deaf8/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=1452&bt=726&cs=0&ds=3&ft=ebtHKH-qMyq8ZfJq5we2NzHGfl7Gb&mime_type=video_mp4&qs=0&rc=ZWRoZDw7MzU1M2YzNDw8OUBpanNweDw6ZjtvZTMzZzczNEBiXmAwNjYtXjQxXmJhMV9gYSNmazRicjRfbDJgLS1kMS9zcw%3D%3D&l=20220728200737538C1D6803E5C80D1A8F'
          }}
          onError={(e) => console.error(e)}
          useNativeControls="false"
          resizeMode="cover"
          // isLooping="true"
          shouldPlay="true"
          onPlaybackStatusUpdate={(status) => setStatus(() => status)}
        />
      </TouchableWithoutFeedback>

      <View style={styles.uiContainer}>
        <View style={styles.sideContainer}>
          <View style={styles.profilePictureContainer}>
            <Image
              style={styles.profilePicture}
              source={{
                uri: 'https://foreignpolicyi.org/wp-content/uploads/2019/06/Dwayne-Johnson.jpg'
              }}
            />
          </View>
          <View style={styles.iconsContainer}>
            <AntDesign name={'hearto'} size={40} color="white" />
            <Text style={styles.statsLabel}>112</Text>

            <View style={styles.iconsContainer}>
              <FontAwesome name={'commenting'} size={40} color="white" />
              <Text style={styles.statsLabel}>112</Text>
            </View>

            <View style={styles.iconsContainer}>
              <Fontisto name={'share-a'} size={40} color="white" />
              <Text style={styles.statsLabel}>112</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.bottomContainer}>
        <Text style={styles.handle}>@abedev</Text>
        <Text style={styles.description}>Workout Monday!</Text>

        <View style={styles.songRow}>
          <Entypo name={'beamed-note'} size={24} color="white" />
          <Text style={styles.songName}>Nirvana - Something in the way!</Text>
        </View>
      </View>
    </View>
  );
};

export default Post;
