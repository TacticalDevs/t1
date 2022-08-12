import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import styles from './styles';

const CreatePost = () => {
  const [caption, setCaption] = useState('');

  const onCaptionChange = () => {};
  const onPublish = () => {};

  return (
    <View style={styles.container}>
      <TextInput
        value={caption}
        onChangeText={setCaption}
        style={styles.textInput}
        numberOfLines={5}
        placeholder="Add caption"
      />
      <TouchableOpacity style={styles.button} onPress={onPublish}>
        <Text style={styles.buttonText}>Publish</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CreatePost;
