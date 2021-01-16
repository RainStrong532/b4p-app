import * as React from 'react';
import { Button, Text, TextInput, View, StyleSheet } from 'react-native';
import SettingComponent from '../components/SettingComponent';
export function SettingScreen(props) {
    const {container} = styles;
    return (
      <View style={container}>
        <SettingComponent {...props}/>
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
