import React from 'react';

<<<<<<<< HEAD:_components/Exercise2/Exercise2.jsx
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  FlatList,
  Pressable,
} from 'react-native';
import { Card } from 'react-native-paper';

// This is the data containing the crew members
import { names } from '../../server/data/crew';
========
import { SafeAreaView, Text, View, StyleSheet, FlatList, Pressable } from 'react-native';
import { Card } from 'react-native-paper';

// This is the data containing the crew members
import { names } from '../../_server/data/crew';
>>>>>>>> 88a001fed550acc55bd1b14b49c8d6c2fdaa36de:_components/stage-02/CrewManifestScreen.jsx

// This is our pre-built CachedImage component - feel free to take a look at the implementation
// import { CachedImage } from '../third-party-components/CachedImage';

// Or any icon set you prefer!
//import { AntDesign } from '@expo/vector-icons';

const Item = ({ name }) => (
  <View>
    <Text style={styles.text}>{name}</Text>
  </View>
);

<<<<<<<< HEAD:_components/Exercise2/Exercise2.jsx
export const Exercise2 = () => {
  const renderItem = ({ item }) => <Item name={item.name} />;
  return (
    <SafeAreaView style={styles.mainDiv}>
      <FlatList
        data={names}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
      />
========
export const CrewManifestScreen = () => {
  const renderItem = ({ item }) => <Item name={item.name} />;
  return (
    <SafeAreaView style={styles.mainDiv}>
      <FlatList data={names} renderItem={renderItem} keyExtractor={(item) => item.name} />
>>>>>>>> 88a001fed550acc55bd1b14b49c8d6c2fdaa36de:_components/stage-02/CrewManifestScreen.jsx
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainDiv: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'rgb(0,25,51)',
  },
  text: {
    color: 'red',
    fontSize: 23,
    marginTop: 20,
  },
});
