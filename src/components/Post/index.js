import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  Image,
  TouchableOpacity
} from 'react-native';
import { Video } from 'expo-av';
import styles from './styles';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';

const Post = (props) => {
  // const { post } = props;
  const [post, setPost] = useState(props.post);
  const video = useRef(null);
  const [status, setStatus] = useState({});
  const [isLiked, setIsLiked] = useState(false);
  // console.log(post);

  const handlePlayPausePress = () => {
    status.isPlaying ? video.current.pauseAsync() : video.current.playAsync();
  };

  const onLikePress = () => {
    const changeLike = isLiked ? -1 : 1;
    setPost({ ...post, likes: post.likes + changeLike });
    setIsLiked(!isLiked);
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={handlePlayPausePress}>
        {post && (
          <Video
            ref={video}
            style={styles.video}
            source={{
              uri: post.videoUri
            }}
            onError={(e) => console.error(e)}
            useNativeControls="false"
            resizeMode="cover"
            isLooping="true"
            shouldPlay="true"
            onPlaybackStatusUpdate={(status) => setStatus(() => status)}
          />
        )}
      </TouchableWithoutFeedback>

      <View style={styles.uiContainer}>
        <View style={styles.sideContainer}>
          <View style={styles.profilePictureContainer}>
            <Image
              style={styles.profilePicture}
              source={{
                uri: post.user.userUri
              }}
            />
          </View>

          <TouchableOpacity style={styles.iconsContainer} onPress={onLikePress}>
            <AntDesign
              name={'heart'}
              size={40}
              color={isLiked ? 'red' : 'white'}
            />
            <Text style={styles.statsLabel}>{post.likes}</Text>
          </TouchableOpacity>

          <View style={styles.iconsContainer}>
            <FontAwesome name={'commenting'} size={40} color="white" />
            <Text style={styles.statsLabel}>{post.comments}</Text>
          </View>

          <View style={styles.iconsContainer}>
            <FontAwesome name={'bookmark'} size={40} color="white" />
            <Text style={styles.statsLabel}>{post.bookmarks}</Text>
          </View>

          <View style={styles.iconsContainer}>
            <Fontisto name={'share-a'} size={35} color="white" />
            <Text style={styles.statsLabel}>{post.shares}</Text>
          </View>
        </View>
      </View>

      <View style={styles.bottomContainer}>
        <View>
          <Text style={styles.handle}>@{post.user.username}</Text>
          <Text style={styles.description}>{post.description}</Text>

          <View style={styles.songRow}>
            <Entypo name={'beamed-note'} size={24} color="white" />
            <Text style={styles.songName}>{post.song}</Text>

            <View style={styles.songImageContainer}>
              <Image
                style={styles.songImage}
                source={{
                  uri: post.songImage
                }}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Post;
