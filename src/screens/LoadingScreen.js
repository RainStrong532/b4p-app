import * as React from 'react';
import { Button, Text, TextInput, View, ActivityIndicator } from 'react-native';
export function LoadingScreen() {
    return (
      <View style={{flex: 1,justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator
          size="large"
        />
      </View>
    );
  }