import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ExercisesButton from './resources/components/button-level/exercises';
import React, { Component } from 'react';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <ExercisesButton></ExercisesButton>
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3399FF80',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
