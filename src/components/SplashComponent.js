import React from 'react'
import {View, Text, Image} from 'react-native'
import { Images } from '../../assets/Images';
import Device from '../modules/Device'
import { LinearGradient } from 'expo-linear-gradient';

const initialLayout = {
    height: Device.screenSize().height,
    width: Device.screenSize().width,
};

export default class SplashComponent extends  React.Component{
    constructor(props){
        super();
        setTimeout(() => {
            props.navigation.navigate("login");
        }, 3000)
    }
    render(){
        return(
            <View  style={{width: initialLayout.width, height: initialLayout.height, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff'}}>
            <LinearGradient colors={['#3879BD', '#fff']} style={{width: initialLayout.width, height: initialLayout.height,opacity: 0.5, position: 'absolute', zIndex: 10}}></LinearGradient>
                <View style={{zIndex: 20}}>
                <Image source={Images.logo} style={{resizeMode: 'contain', width: 225, height: 257}}/>
                </View>
            </View>
        )
    }
}