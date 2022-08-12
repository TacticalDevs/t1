import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Camera, CameraType } from 'expo-camera';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';

const CameraItem = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(CameraType.back);
  //Record Btn
  const [isRecording, setIsRecording] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
      // console.warn(status);
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }

  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const record = () => {
    setIsRecording(!isRecording);
  };

  return (
    <View style={styles.container}>
      <Camera type={type} style={styles.camera}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.flipButton}
            onPress={() => {
              setType(
                type === CameraType.back ? CameraType.front : CameraType.back
              );
            }}
          >
            <MaterialCommunityIcons
              name="camera-flip-outline"
              size={35}
              color="#fff"
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.recordButton} onPress={record}>
            <MaterialCommunityIcons
              name="record-rec"
              color="#ff4343"
              style={isRecording && styles.recording}
              size={55}
            />
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
};

export default CameraItem;
