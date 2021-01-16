import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { Component } from 'react'
import {View, ImageBackground, Image, TextInput, Button, Text, TouchableOpacity} from 'react-native'
import {Images} from '../../../assets/Images'
import {styles} from '../../commonStyles/styles'
import HeaderView from '../HeaderView';
import Device from '../../modules/Device'

const initialLayout = {
    height: Device.screenSize().height,
    width: Device.screenSize().width,
};

export default class SearchBarComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            text : ""
        }
    }
    onChangeText = (text) => {
        this.setState({text: text});
    }
    onSearching = () => {
        if(this.props.onSearching){
            this.props.onSearching(this.state.text);
        }
    }
    render(){
        let {text} = this.state;
        return(
            <View style={{display: 'flex', flexDirection: 'row', marginTop: 25, alignItems: 'center', paddingHorizontal: 12, overflow: 'hidden', justifyContent: 'space-between', height: 34, marginHorizontal: 20, backgroundColor: "#e5e5e5", borderRadius: 15}}>
                <TouchableOpacity
                style={{marginRight: 5, overflow: 'hidden'}}
                    onPress= {this.onSearching}
                >
                    <Image
                        source={Images.search}
                        style={{width: 20, height: 20, resizeMode: 'cover'}}
                    />
                </TouchableOpacity>
                <View
                style={{flexGrow: 1, maxWidth: initialLayout.width-100}}
                >
                <TextInput
                style={{fontSize: 15}}
                    placeholder="Tìm kiếm..."
                    value = {text}
                    onChangeText = {this.onChangeText}
                />
                </View>
            </View>
        )
    }
}