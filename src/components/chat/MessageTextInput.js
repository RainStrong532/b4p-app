import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { Component } from 'react'
import {View, ImageBackground, Image, TextInput, Button, Text, TouchableOpacity} from 'react-native'
import {Images} from '../../../assets/Images'
import {styles} from '../../commonStyles/styles'
import HeaderView from '../HeaderView';
import SearchBarComponent from '../commons/SearchBarComponent'
import ConversationItem from './ConversationItem';
import Device from '../../modules/Device'
const initialLayout = {
    height: Device.screenSize().height,
    width: Device.screenSize().width,
};


export default class MessageTextInput extends React.Component{
    constructor(props){
        super(props);
        this.state={
            content: "",
            type: ""
        }
    }
    render(){
        let {content} = this.props;
        return(
            <View style={{flex: 1,width: initialLayout.width, height: 50}}>
                <View style={{display: 'flex',flexDirection: 'row'}}>
                    <View style={{display: 'flex', flexDirection: 'row'}}>
                        <TouchableOpacity>
                            <Image source={Images.camera} style={{height: 20, width: 24, resizeMode: 'contain'}}/>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={Images.image2} style={{height: 20, width: 24, resizeMode: 'contain'}}/>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={Images.micro} style={{height: 20, width: 24, resizeMode: 'contain'}}/>
                        </TouchableOpacity>
                    </View>
                    <View style={{display: 'flex', flexDirection: 'row'}}>
                    <TextInput
                        placeholder="Nhập gì đó"
                        value={content}
                    />
                    <Image source={Images.icon} style={{height: 20, width: 24, resizeMode: 'contain'}}/>
                    </View>
                    <View>
                        <TouchableOpacity>
                        <Image source={Images.like} style={{height: 20, width: 24, resizeMode: 'contain'}}/>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}