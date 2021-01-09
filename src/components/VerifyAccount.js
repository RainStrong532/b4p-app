import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { Component } from 'react'
import {View, ImageBackground, Image, TextInput, Button, Text, TouchableOpacity} from 'react-native'
import {Images} from '../../assets/Images'
import {styles} from '../commonStyles/styles'


export default class VerifyAccount extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <View>
               <View>
                   <Text>
                       Nhập mã của bạn
                   </Text>
                   <TextInput
                    placeholder="Code"
                   />
                   <View>
                       <TouchableOpacity>
                           <Text>Gửi</Text>
                       </TouchableOpacity>
                   </View>
               </View>
            </View>
        )
    }
}