import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { Component } from 'react'
import {View, ImageBackground, Image, TextInput, Button, Text, TouchableOpacity} from 'react-native'
import {Images} from '../../../assets/Images'
import {styles} from '../../commonStyles/styles'
import HeaderView from '../HeaderView';
import SearchBarComponent from '../commons/SearchBarComponent'


export default class ConversationItem extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const {navigation} = this.props;
        return(
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate("chat")
                }}
            >
            <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, marginTop: 15, borderBottomColor: '#e5e5e5', borderBottomWidth: 1, paddingVertical: 10}}>
                <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                 <TouchableOpacity>
                        <Image source={Images.avtDemo2} style={{width: 43, height: 43, borderRadius: 21.5, marginRight: 15}}/>
                    </TouchableOpacity>
                <View>
                    <View>
                        <Text>
                            Như Quỳnh
                        </Text>
                    </View>
                    <View style={{display: 'flex', flexDirection: 'row'}}>
                        <Text
                        style={{fontSize: 15}}
                        >Bạn: </Text>
                        <Text
                        style={{fontSize: 15}}
                        >Hi </Text>
                        <Text
                        style={{fontSize: 15}}
                        >
                            07:00
                        </Text>
                    </View>
                </View>
                </View>
                <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                    <View style={{width: 25, height:25, backgroundColor: 'red', borderRadius: 25, display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: 10}}>
                        <Text
                            style={{fontSize: 12, color: '#fff', fontWeight: 'bold'}}
                        >
                            12
                        </Text>
                    </View>
                    <TouchableOpacity>
                    <Image source={Images.more} style={{width: 26, height: 6, resizeMode: 'contain', tintColor: '#636363'}}/>
                    </TouchableOpacity>
                </View>
            </View>
            </TouchableOpacity>
        )
    }
}