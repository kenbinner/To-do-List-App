import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Sandbox() {
  return (
    <View style={styles.container}>
      <Text style={styles.boxOne}>one</Text>
      <Text style={styles.boxTwo}>two</Text>
      <Text style={styles.boxThree}>three</Text>
      <Text style={styles.boxFour}>four</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingTop: 40,
    backgroundColor: '#ddd'
  },
  boxOne: {
    flex: 4,
    backgroundColor: 'violet',
    padding: 10
  },
  boxTwo: {
    flex: 5,
    backgroundColor: 'gold',
    padding: 20
  },
  boxThree: {
    flex: 1,
    backgroundColor: 'coral',
    padding: 30
  },
  boxFour: {
    flex: 10,
    backgroundColor: 'skyblue',
    padding: 40
  },
})