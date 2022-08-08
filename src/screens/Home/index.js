import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Dimensions } from 'react-native';
import Post from '../../components/Post';
import postsData from '../../data/posts';

import { API, graphqlOperation } from 'aws-amplify';
import { listPosts } from '../../graphql/queries';

const Home = () => {
  const [posts, setPost] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await API.graphql(graphqlOperation(listPosts));
        console.log(res.data.listPosts.items);
        setPost(res.data.listPosts.items);
      } catch (err) {
        console.error(err);
      }
    };
    fetchPosts();
  }, []);
  return (
    <View>
      {posts && (
        <FlatList
          data={posts}
          renderItem={({ item }) => <Post post={item} />}
          showsVerticalScrollIndicator={false}
          snapToInterval={Dimensions.get('window').height - 55}
          snapToAlignment={'start'}
          decelerationRate={'fast'}
        />
      )}
    </View>
  );
};

export default Home;
