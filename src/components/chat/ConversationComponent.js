import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { Component } from 'react'
import {View, ImageBackground, Image, TextInput, Button, Text, TouchableOpacity} from 'react-native'
import {Images} from '../../../assets/Images'
import {styles} from '../../commonStyles/styles'
import HeaderView from '../HeaderView';
import SearchBarComponent from '../commons/SearchBarComponent'
import ConversationItem from './ConversationItem';


export default class ConversationComponent extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <View>
                <SearchBarComponent/>
                <ConversationItem {...this.props}/>
            </View>
        )
    }
}