import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Alert, Dimensions } from 'react-native';
import FriendFinderInputs from './components/modal'
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps"
import * as Location from 'expo-location';

const SERVER_URL = ""

export default function App() {
  const [visible, setVisible] = useState(false);
  const [location, setLocation] = useState(undefined);
  const [friends, setFriends] = useState([])

  async function handleSubmit(params) {
    params.longitude = 12 //Get this from device
    params.latitude = 55 // Get this from device
    // params.longitude = location.coords.longitude
    // params.latitude = location.coords.latitude
    Alert.alert("Data (must be sent to server)", JSON.stringify(params))
    setVisible(!visible)
  }

  return (
    <View style={styles.container}>

      <FriendFinderInputs visible={visible} setVisible={setVisible} submit={handleSubmit} />

      <View style={{ flex: 10, flexDirection: "row", alignItems: "center", justifyContent: "center", backgroundColor: "lightgreen", width: "100%" }}>
        <Text style={{ fontSize: 22 }} >Insert a MapView here</Text>
      </View>
      <TouchableHighlight
        style={styles.openButton}
        onPress={() => {
          setVisible(true);
        }}>
        <Text style={styles.textStyle}>Find Nearby Friends</Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 24
  },
  openButton: {
    backgroundColor: 'darkgray',
    borderRadius: 10,
    padding: 10,
    margin: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height - 80,
  },
});
