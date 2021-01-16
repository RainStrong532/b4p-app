import React, { Component } from 'react'
import {View, ImageBackground, Image, TextInput, Button, Text, Linking, TouchableOpacity} from 'react-native'
import { Images } from '../../assets/Images';
import {styles} from '../commonStyles/styles'
import Device from '../modules/Device'

const initialLayout = {
    height: Device.screenSize().height,
    width: Device.screenSize().width,
};

export default class HeaderView extends React.Component{
    constructor(props){
        super(props);
    }
    onPressLeftButton = () =>{
        if(this.props.onPressLeftButton){
            this.props.onPressLeftButton();
        }else{
            if(this.props.navigation){
            this.props.navigation.goBack();
            }
        }
    }
    onPressRightButton = () => {
        if(this.props.onPressRightButton){
            this.props.onPressRightButton();
        }
    }
    render(){
        let {title} = this.props;
    
        let {leftButton} = this.props;
        if(!leftButton){
            leftButton = Images.backIcon;
        }
        let {leftStyle} = this.props;
        let {removeLeft} = this.props;
        if(!leftStyle){
            leftStyle={
                width: 18,
                height: 18,
                resizeMode: 'contain'
            }
        }
        let {rightButton} = this.props;
        let {rightButton2} = this.props;

        let {rightStyle} = this.props;

        if(!rightStyle){
            rightStyle={
                width: 18,
                height: 18,
                resizeMode: 'contain',
            }
        }
        let {titleStyle} = this.props;
        let {rightType} = this.props;
        let {rightStyle2} = this.props;
        let {style} = this.props;
        return(
            <View style={style ? styles.headerContainer1: styles.headerContainer}>
                <View style={{minWidth: '20%'}}>
                {
                    !removeLeft ?
                    <TouchableOpacity
                        onPress={this.onPressLeftButton}
                        style={{display: 'flex', justifyContent: 'center'}}
                    >
                        <Image source = {leftButton} style={leftStyle}/>
                    </TouchableOpacity>
                    :
                    <></>
                    
                }
                </View>
                <View style={{width: '100%', flexShrink: 2}}>
                    {
                    title
                        ?
                    <Text style={titleStyle ? titleStyle :styles.titleHeader}>
                        {title}
                    </Text>
                    :
                    <>
                    </>
                    }
                </View>
                <View style={{display: 'flex', flexDirection: 'row', minWidth: '20%', justifyContent: rightButton2 ? 'space-between' : 'flex-end'}}>
                    {
                        rightButton2
                        ?
                        <View>
                            <TouchableOpacity>
                            <Image source = {rightButton2} style={rightStyle2}/>
                            </TouchableOpacity>
                        </View>
                        :
                        <></>
                    }
                    {
                        rightButton
                        ?
                        (rightType === "text")
                        ?
                        <View>
                            <TouchableOpacity
                            onPress={this.onPressRightButton}
                            >
                                <Text style={[{textAlign: 'right'},rightStyle]}>
                                    {rightButton}
                                </Text>
                            </TouchableOpacity>
                        </View>
                        :
                        <View>
                            <TouchableOpacity
                            onPress={this.onPressRightButton}
                            >
                                <Image source = {rightButton} style={rightStyle}/>
                            </TouchableOpacity>
                        </View>
                        :
                        <></>
                    }       
                </View>
            </View>
        )
    }
}