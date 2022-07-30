import React from 'react';
import { View, Text } from 'react-native';
import Post from '../../components/Post';

const Home = () => {
  const post1 = {
    id: 'p1',
    videoUri:
      'https://d8vywknz0hvjw.cloudfront.net/fitenium-media-prod/videos/45fee890-a74f-11ea-8725-311975ea9616/proccessed_720.mp4',
    user: {
      id: 'u1',
      username: 'TheRock',
      userUri:
        'https://foreignpolicyi.org/wp-content/uploads/2019/06/Dwayne-Johnson.jpg'
    },
    description: 'Monday Workout!',
    song: 'Nirvana - Come as you are!',
    songImage:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.sundazed.com%2Fmedia%2Fimages%2FLP-5063_BLK_900.png&f=1&nofb=1',
    likes: 2598,
    comments: 867,
    bookmarks: 117,
    shares: 443
  };
  return (
    <View>
      <Post post={post1} />
    </View>
  );
};

export default Home;
