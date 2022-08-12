import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Camera, CameraType } from 'expo-camera';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';

const CameraItem = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(CameraType.back);
  //Record Btn
  const [isRecording, setIsRecording] = useState(false);
  const camera = useRef();

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

  const record = async () => {
    if (isRecording) {
      camera.current.stopRecording();
      setIsRecording(false);
    } else {
      setIsRecording(true);
      const data = await camera.current.recordAsync();
      console.log(data);
    }
  };

  return (
    <View style={styles.container}>
      <Camera
        type={type}
        style={styles.camera}
        ref={camera}
        // onCameraReady={() => setIsRecording(true)}
      >
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
