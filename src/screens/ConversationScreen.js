import * as React from 'react';
import { Button, Text, TextInput, View, StyleSheet } from 'react-native';
import ConversationContainer from '../containers/ConversationContainer'
import HeaderView from '../components/HeaderView';
import { styles } from "../commonStyles/styles";

export function ConversationScreen(props) {
    return (
      <View>
        <HeaderView title="Nhắn tin" style={styles.headerContainer1} {...props}/>
        <ConversationContainer {...props}/>
      </View>
    );
  }
