import React, { Component } from 'react'
import {View, ImageBackground, Image, TextInput, Button, Text, Linking, TouchableOpacity, FlatList, Platform} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import { Images } from '../../assets/Images';
import {styles} from '../commonStyles/styles'
import Device from '../modules/Device'
import SettingItemComponent from './subComponents/SettingItemComponent';

const initialLayout = {
    height: Device.screenSize().height,
    width: Device.screenSize().width,
};
const data = [
    {
        title: "Bạn bè",
        image: Images.profile,
    },
    {
        title: "Trang",
        image: Images.flag,
    },
    {
        title: "Trợ giúp và hỗ trợ",
        image: Images.question,
        subItems: [
            {
                title: "Trợ giúp",
                image: Images.comment
            },
            {
                title: "Báo cáo sự cố",
                image: Images.warning
            }
            ,
            {
                title: "Điều khoản & chính sách",
                image: Images.policy
            }
        ]
    },
    {
        title: "Ngôn ngữ",
        image: Images.web,
        subItems: [
            {
                title: "Tiếng Việt",
                image: Images.web
            },
            {
                title: "Tiếng Anh",
                image: Images.web
            }
        ]
    },
    {
        title: "Đăng xuất",
        image: Images.signout,
    }
]
export default class SettingComponent extends React.Component{
    constructor(props){
        super(props);
    }
    _renderItem =({item}) => {
        return(
            <SettingItemComponent title={item.title} image={item.image} subItems = {item.subItems ? item.subItems : []} {...this.props}/>
        )
    }
    _keyExtractor = (item, idx) => idx.toString()

    // _loadMore = () => {
    //     if (this.state.isLoadMore) {
    //         return
    //     }
    //     this.setState({ isLoadMore: true }, () => {
    //         this.doGetPhoto(this.page);
    //     })
    // }

    // pullRefresh = () => {
    //     if (this.state.refeshing) {
    //         return
    //     }
    //     this.page = 1;
    //     this.setState({ refeshing: true }, () => {
    //         console.warn("refeshing");
    //         this.doGetPhoto(1);
    //     })
    // }
    render(){
        let listItem = [];
        if(data){
            listItem =  data.map(item => {
               return(
                   <SettingItemComponent title={item.title} image={item.image} subItems = {item.subItems ? item.subItems : []} {...this.props}/>
               )
           })
        }
        return(
            <View style={{marginTop: 42}}>
                <FlatList
                    removeClippedSubviews={false}
                    data={data}
                    renderItem={this._renderItem}
                    keyExtractor={this._keyExtractor}
                    contentContainerStyle={{ width: '100%', minHeight: '100%', marginTop: 5 }}
                    // onEndReached={this.getMoreItems}
                    // onRefresh={this.refreshList}
                    // refreshing={this.state.loading}
                    showsVerticalScrollIndicator={false}
                    onEndReachedThreshold={Platform.OS === 'ios' ? 0 : 10}
                    // refreshControl={
                    //     <RefreshControl
                    //         refreshing={refeshing}
                    //         onRefresh={this.pullRefresh}
                    //     />
                    // }
                />
            </View>
        )
    }
}