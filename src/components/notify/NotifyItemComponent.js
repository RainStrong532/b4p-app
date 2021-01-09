import React from 'react'
import {View, Text, Image} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Images } from '../../../assets/Images';
import {styles} from '../../commonStyles/styles'
import Device from '../../modules/Device'

const initialLayout = {
    height: Device.screenSize().height,
    width: Device.screenSize().width,
};

export default class NotifyItemComponent extends  React.Component{
    constructor(props){
        super();
    }
    render(){
        return(
            <TouchableOpacity>
            <View style={{backgroundColor: '#FFC8C8', paddingVertical: 8, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <View style={{maxWidth: initialLayout.width -40, display: 'flex', flexDirection: 'row'}}>
                    <View>
                        <Image
                                source={Images.avtDemo2}
                                style={{width: 60, height: 60, resizeMode: 'cover', borderRadius: 30, marginRight: 5}}
                        />
                    </View>
                    <View style={{paddingRight: 20, flexShrink: 1}}>
                        <View  style={{paddingRight: 20}}>
                            <Text style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
                                    <Text
                                        style={{fontSize: 15, fontWeight: 'bold'}}
                                    >Như Quỳnh</Text>
                                    <Text
                                    > đã đăng cứu trợ khẩn cấp cách bạn 2km.</Text>
                            </Text>
                        </View>
                        <Text
                            style={{color: '#636363'}}
                        >14 phút</Text>
                    </View>
                    {/* <View style={{width: 20, height: 20, backgroundColor: 'red'}}>

                    </View> */}
               </View>
            </View>
            </TouchableOpacity>
        )
    }
}