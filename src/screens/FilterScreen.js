import * as React from 'react';
import { Button, Text, TextInput, View, StyleSheet } from 'react-native';
export function FilterScreen() {
    const {container} = styles;
    return (
      <View style={container}>
        <Text>FilterScreen</Text>
      </View>
    );
  }

  const styles = StyleSheet.create({
      container:{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
      }
  })