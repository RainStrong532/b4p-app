import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { Component } from 'react'
import {View, ImageBackground, Image, TextInput, Button, Text, TouchableOpacity} from 'react-native'
import { Navigation } from 'react-native-navigation';
import {Images} from '../../../assets/Images'
import {styles} from '../../commonStyles/styles'


export default class PostViewHeader extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <View>
               <View>
                   <View style={[styles.row, {marginTop: 10}]}>
                       <TouchableOpacity>
                        <Image source={Images.avtDemo} style={{width: 40, height: 40, borderRadius: 20, marginRight: 15}}/>
                       </TouchableOpacity>
                       <TouchableOpacity
                       onPress={() => this.props.navigation.navigate("create_post")}
                        style={{backgroundColor: '#e5e5e5', borderRadius: 20, height: 38, display: 'flex', justifyContent: 'center', paddingHorizontal: 15, flexGrow: 1}}
                       >
                           <Text
                                style={{fontSize: 15, color: '#000', opacity: 0.6}}
                           >
                                Bạn đang cần gì?
                           </Text>
                       </TouchableOpacity>
                   </View>
               </View>
            </View>
        )
    }
}