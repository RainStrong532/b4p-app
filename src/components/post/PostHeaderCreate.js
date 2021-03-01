import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { Component } from 'react'
import {View, ImageBackground, Image, TextInput, Button, Text, TouchableOpacity} from 'react-native'
import {styles} from '../../commonStyles/styles'


export default class PostHeaderCreate extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <View style={{marginVertical: 10}}>
               <View style={[styles.row, {borderWidth: 1, borderColor: '#3879BD', height: 30, alignItems: 'center', justifyContent: 'space-between'}]}>
                   <TouchableOpacity
                    style={{width: '49%'}}
                   >
                        <Text style={{fontSize: 15, textAlign: 'center'}}>
                            Cứu trợ
                        </Text>
                   </TouchableOpacity>
                   <View style={{width: 1.5, height:24, backgroundColor: '#3879BD'}}>

                   </View>
                   <TouchableOpacity
                   style={{width: '49%'}}
                   >
                        <Text style={{fontSize: 15, textAlign: 'center'}}>
                            Ảnh
                        </Text>
                   </TouchableOpacity>
               </View>
            </View>
        )
    }
}