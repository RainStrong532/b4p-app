import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { Component } from 'react'
import { View, ImageBackground, Image, TextInput, Button, Text, TouchableOpacity } from 'react-native'
import { Images } from '../../../assets/Images'
import { styles } from '../../commonStyles/styles'
import Device from '../../modules/Device'

const initialLayout = {
    height: Device.screenSize().height,
    width: Device.screenSize().width,
};


export default class ChatRightViewComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { user, content, showAvatar } = this.props;
        return (
            <View style={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'row', justifyContent: 'flex-end', paddingHorizontal: 20, marginBottom: 10 }}>
                <View style={{marginLeft: 10 }}>
                    <TouchableOpacity
                        style={{ backgroundColor: "#3879BD", borderRadius: 40, paddingHorizontal: 15, paddingVertical: 10, maxWidth: initialLayout.width * 0.6 }}
                    >
                        <Text
                            style={{ fontSize: 14, color: '#fff' }}
                        >
                            {content}
                        </Text>
                    </TouchableOpacity>
                </View>
                <View
                    style={{ width: 40, height: 40 }}
                >
                    {
                        showAvatar
                            ?
                            <TouchableOpacity>
                                <Image source={user.avatar} style={{ width: 40, height: 40, borderRadius: 40, marginLeft: 10 }} />
                            </TouchableOpacity>
                            :
                            <></>

                    }
                </View>
            </View>
        )
    }
}