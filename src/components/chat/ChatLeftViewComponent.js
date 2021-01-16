import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { Component } from 'react'
import { View, ImageBackground, Image, TextInput, Button, Text, TouchableOpacity } from 'react-native'
import { Images } from '../../../assets/Images'
import Device from '../../modules/Device'

const initialLayout = {
    height: Device.screenSize().height,
    width: Device.screenSize().width,
};


export default class ChatLeftViewComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { user, content, showAvatar } = this.props;
        return (
            <View style={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'row', paddingHorizontal: 20, marginBottom: 10 }}>
                <View style={{ width: 40, height: 40 , marginRight: 10 }}>
                    {
                        showAvatar
                            ?
                            <TouchableOpacity>
                                <Image source={user.avatar} style={{ width: 40, height: 40, borderRadius: 40}} />
                            </TouchableOpacity>
                            :
                            <></>
                    }

                </View>
                <View>
                    <TouchableOpacity
                        style={{ backgroundColor: "#e5e5e5", borderRadius: 40, paddingHorizontal: 15, paddingVertical: 10, maxWidth: initialLayout.width * 0.6 }}
                    >
                        <Text
                            style={{ fontSize: 14, color: '#000' }}
                        >
                            {content}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}