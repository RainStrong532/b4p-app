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
          onPress={onPress}>...View more</Text>
        )
      }
      renderViewLess(onPress){
        return(
          <Text
            style={{fontSize: 15, fontWeight: 'bold'}}
          onPress={onPress}>View less</Text>
        )
      }
    render(){
        return(
            <View>
                <ViewMoreText
                    numberOfLines={3}
                    renderViewMore={this.renderViewMore}
                    renderViewLess={this.renderViewLess}
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