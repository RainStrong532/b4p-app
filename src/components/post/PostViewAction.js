import React from 'react'
import {View, Text, Image} from 'react-native'
import { Images } from '../../../assets/Images';
import {styles} from '../../commonStyles/styles'
import Device from '../../modules/Device'

const initialLayout = {
    height: Device.screenSize().height,
    width: Device.screenSize().width,
};

export default class PostViewAction extends  React.Component{
    constructor(props){
        super();
    }
    render(){
        return(
            <View>
                {/* Like */}
                <View>

                </View>
                {/* Comment */}
                <View>

                </View>
                
                <View>

                </View>
            </View>
        )
    }
}