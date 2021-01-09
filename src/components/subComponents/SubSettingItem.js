import React, { Component } from 'react'
import {View, ImageBackground, Image, TextInput, Button, Text, Linking, TouchableOpacity} from 'react-native'
import {styles} from '../../commonStyles/styles'
import Device from '../../modules/Device'

const initialLayout = {
    height: Device.screenSize().height,
    width: Device.screenSize().width,
};

export default class SubSettingItem extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <TouchableOpacity style={[{display: 'flex', flexDirection: 'row', alignItems: 'center', paddingHorizontal: 15, width:initialLayout.width-70, height: 42, borderBottomColor: "#C4C4C4", borderBottomWidth: 1}, this.props.style]}>
                <Image source={this.props.image} style={{width: 20, height: 20, resizeMode: 'contain', marginRight: 24, tintColor: '#636363'}}/>
                <Text
                    style ={{fontWeight: '700', color: '#636363'}}
                >
                    {this.props.title}
                </Text>
            </TouchableOpacity>
        )
    }
}