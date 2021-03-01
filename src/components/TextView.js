import React from 'react'
import {View, Text, Image} from 'react-native'
import { Images } from '../../assets/Images';
import Device from '../modules/Device'
import ViewMoreText from 'react-native-view-more-text';

const initialLayout = {
    height: Device.screenSize().height,
    width: Device.screenSize().width,
};

export default class TextView extends  React.Component{
    constructor(props){
        super();
    }
    renderViewMore(onPress){
        return(
          <Text 
          style={{fontSize: 15, fontWeight: 'bold'}}
          onPress={onPress}>...Xem thêm...</Text>
        )
      }
      renderViewLess(onPress){
        return(
          <Text
            style={{fontSize: 15, fontWeight: 'bold'}}
          onPress={onPress}>Ẩn bớt</Text>
        )
      }
    render(){
        return(
            <View>
                <ViewMoreText
                    textStyle={{textAlign: 'left'}}
                >
                    <Text
                        style={{fontSize: 15}}
                    >
                        {this.props.description}
                    </Text>
                </ViewMoreText>
            </View>
        )
    }
}