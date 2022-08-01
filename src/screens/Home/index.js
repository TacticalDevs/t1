import React from 'react';
import { View, Text, FlatList, Dimensions } from 'react-native';
import Post from '../../components/Post';
import postsData from '../../data/posts';

const Home = () => {
  return (
    <View>
      <FlatList
        data={postsData}
        renderItem={({ item }) => <Post post={item} />}
        showsVerticalScrollIndicator={false}
        snapToInterval={Dimensions.get('window').height - 55}
        snapToAlignment={'start'}
        decelerationRate={'fast'}
      />
    </View>
  );
};

export default Home;
