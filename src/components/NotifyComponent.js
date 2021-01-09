import React from 'react'
import {View, Text, Image} from 'react-native'
import { Images } from '../../assets/Images';
import {styles} from '../commonStyles/styles'
import Device from '../modules/Device'
import NotifyItemComponent from '../components/notify/NotifyItemComponent'

const initialLayout = {
    height: Device.screenSize().height,
    width: Device.screenSize().width,
};

export default class NotifyComponent extends  React.Component{
    constructor(props){
        super();
    }
    render(){
        return(
            <View>
               <View style={{marginTop: 15, marginBottom: 5}}>
                   <View style={{paddingHorizontal: 20}}>
                   <Text
                    style={{fontWeight: 'bold', fontSize: 18}}
                   >Cứu trợ</Text>
                   </View>
                   <NotifyItemComponent {...this.props}/>
               </View>
            </View>
        )
    }
}