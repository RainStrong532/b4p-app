import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { Component } from 'react'
import {View, ImageBackground, Image, TextInput, Button, Text, TouchableOpacity} from 'react-native'
import {Images} from '../../../assets/Images'
import {styles} from '../../commonStyles/styles'
import ViewMoreText from 'react-native-view-more-text';
import TextView from '../TextView';
import PostImagesView from './PostImagesView';
import PostViewAction from './PostViewAction';


export default class PostViewComponent extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <View style={{paddingHorizontal: 20, borderTopColor: '#e5e5e5', borderTopWidth: 1, paddingTop: 12}}>
               <View>
                   {/* Header */}
                   <View style={[styles.row, {justifyContent: 'space-between'}]}>
                        <View>
                            <View style={styles.row}>
                                <TouchableOpacity>
                                    <Image source={Images.avtDemo2} style={{width: 40, height: 40, borderRadius: 20, marginRight: 15}}/>
                                </TouchableOpacity>
                                <View>
                                    <TouchableOpacity>
                                        <Text
                                            style={{fontSize: 15, fontWeight: 'bold'}}
                                        >
                                            Jack
                                        </Text>
                                    </TouchableOpacity>
                                    <Text
                                        style={{fontSize: 12}}
                                    >
                                        1 phút
                                    </Text>
                                </View>
                            </View>
                        </View>
                        <View>
                            <TouchableOpacity>
                                <Image source={Images.more} style={{width: 26, height: 6, resizeMode: 'contain'}}/>
                            </TouchableOpacity>
                        </View>
                   </View>

                   {/* Description */}
                   <View style={{marginTop: 5, marginBottom: 15}}>
                        <View
                            className="title"
                        >
                            <Text
                                style={{fontSize: 15}}
                            >
                                Tìm chủ cho cún con
                            </Text>
                            <TextView description = {`Địa chỉ: trước cửa Học viện Công nghệ Bưu chính Viễn thông.${"\n"}Tình trạng thú cưng: bị gãy một chân, chảy máu rất nhiều.`}/>
                        </View>
                   </View>

                   <PostImagesView />
                   <PostViewAction />
               </View>
            </View>
        )
    }
}