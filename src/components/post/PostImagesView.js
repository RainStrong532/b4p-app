import React from 'react'
import {View, Text, Image} from 'react-native'
import { Images } from '../../../assets/Images';
import {styles} from '../../commonStyles/styles'
import Device from '../../modules/Device'

const initialLayout = {
    height: Device.screenSize().height,
    width: Device.screenSize().width,
};

export default class PostImagesView extends  React.Component{


    constructor(props){
        super();
    }
    render(){
        return(
            <View>
                <View className="one_image">
                    <Image 
                        source = {Images.avtDemo3} style={{width: initialLayout.width-40, height: initialLayout.width-40, resizeMode: 'contain'}}
                    />
                </View>
            </View>
        )
    }
}