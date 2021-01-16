import * as React from 'react';
import { Button, Text, TextInput, View, StyleSheet } from 'react-native';
import CameraRollComponent from '../components/camera/CameraRollComponent'
import HeaderView from '../components/HeaderView';
import { styles } from "../commonStyles/styles";

export class CameraRollScreen extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <View style={{flex: 1}}>
                <CameraRollComponent {...this.props}/>
            </View>
        );
    }
}