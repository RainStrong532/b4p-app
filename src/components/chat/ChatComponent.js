import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { Component } from 'react'
import {View, ImageBackground, Image, TextInput, Button, Text, TouchableOpacity, FlatList, SafeAreaView} from 'react-native'
import {Images} from '../../../assets/Images'
import {styles} from '../../commonStyles/styles'
import HeaderView from '../HeaderView';
import SearchBarComponent from '../commons/SearchBarComponent'
import ConversationItem from './ConversationItem';
import ChatLeftViewComponent from './ChatLeftViewComponent'
import ChatRightViewComponent from './ChatRightViewComponent'
import MessageTextInput from './MessageTextInput';
import Device from '../../modules/Device'
import { ScrollView } from 'react-native-gesture-handler';
const initialLayout = {
    height: Device.screenSize().height,
    width: Device.screenSize().width,
};


let data = [
    {
    
        content: "Em ơi",
        user: {
            name: "Jack",
            avatar: Images.avtDemo
        },
    },
    {
    
        content: "Cho anh hỏi xíu",
        user: {
            name: "Jack",
            avatar: Images.avtDemo
        },
    },
    {
    
        content: "Ở Hà Nội có bệnh viện thú y nào đảm bảo không nhỉ",
        user: {
            name: "Jack",
            avatar: Images.avtDemo
        },
    },
    {
    
        content: "???",
        user: {
            name: "Như Quỳnh",
            avatar: Images.avtDemo2
        },
    }
    ,
    {
    
        content: "À, em biết có một chỗ khá ổn",
        user: {
            name: "Như Quỳnh",
            avatar: Images.avtDemo2
        },
    },
    {
    
        content: "Cho anh xin địa chỉ được hông",
        user: {
            name: "Jack",
            avatar: Images.avtDemo
        },
    }
]

export default class ChatComponent extends React.Component{
    constructor(props){
        super(props);
        this.user =  {
            name: "Jack",
            avatar: Images.avtDemo
        }
    }
    _renderItem =({item, index}) => {
        if(item.user.name == this.user.name){
            return(
                <ChatRightViewComponent content = {item.content} user={item.user} showAvatar = {index==0 || data[index-1].user.name != data[index].user.name}/>
            )
        }else{
            return(
                <ChatLeftViewComponent content = {item.content} user={item.user} showAvatar = {index==0 || data[index-1].user.name != data[index].user.name}/>
            )
        }
    }
    _keyExtractor = (item, idx) => idx.toString()
    render(){
        return(
            <View style={{position: 'relative'}}>
                {/* <View style={{position: 'absolute', top: initialLayout.height-60, left: 0, zIndex: 9999}}>
                    <MessageTextInput />
                </View> */}
                {/* Content view */}
                <SafeAreaView>
                <FlatList
                     removeClippedSubviews={false}
                     data={data}
                     renderItem={this._renderItem}
                     keyExtractor={this._keyExtractor}
                     contentContainerStyle={{paddingTop: 20, width: '100%', height: '100%', paddingBottom: 50}}
                    //  onRefresh={this.refreshList}
                     refreshing={false}
                     showsVerticalScrollIndicator={true}
                     onEndReachedThreshold={Platform.OS === 'ios' ? 0 : 10}
                  />
                    {/* <ChatRightViewComponent/>
                    <ChatLeftViewComponent/> */}
                {/* Input message */}
                </SafeAreaView>
            </View>
        )
    }
}