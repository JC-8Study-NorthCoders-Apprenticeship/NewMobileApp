import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

<<<<<<<< HEAD:_components/Exercise1/Exercise1.jsx
import user from '../../assets/user.jpg';
========
import user from '../../_assets/user.jpg';
>>>>>>>> 88a001fed550acc55bd1b14b49c8d6c2fdaa36de:_components/stage-01/OrientationScreen.jsx

export const OrientationScreen = () => {
  return (
    <View style={styles.mainDiv}>
      <Text style={styles.text}>Hello World!!</Text>
      <View style={styles.mainCard}>
        <Image style={styles.tinyLogo} source={user} />
        <View>
          <Title style={styles.cardText}>Just Coder</Title>
          <Paragraph style={styles.cardText}>Super Powers: None.....</Paragraph>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  mainDiv: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'rgb(0,25,51)',
  },
  text: {
    color: 'white',
    fontSize: 23,
    marginTop: 20,
  },

  mainCard: {
    flex: 0.25,
    flexDirection: 'row',
    width: 350,
    justifyContent: 'space-around',
    // alignContent: 'center',
    alignItems: 'center',

    backgroundColor: 'rgb(2, 62, 138)',
    borderRadius: 15,
    marginTop: 20,
    borderColor: 'rgb(0, 150, 199)',
    borderWidth: 5,
  },
  tinyLogo: {
    width: 100,
    height: 100,
    borderRadius: 15,
    borderColor: 'rgb(0, 150, 199)',
    borderWidth: 3,
  },
  cardText: {
    color: 'white',
  },
});
