import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { Component } from 'react'
import { View, ImageBackground, Image, TextInput, Button, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Images } from '../../../assets/Images'
import { styles } from '../../commonStyles/styles'
import TextView from '../TextView';
import PostImagesView from './PostImagesView';
import PostViewAction from './PostViewAction';
import DateHelper from '../../utils/DateHelper'

const PostStatus = {
    request: 'REQUEST',
    process: 'PROCESSING',
    success: 'SUCCESS'
}

const Privacy = {
    private: 'PRIVATE',
    public: 'PUBLIC',
    friend: 'FRIEND'
}

const ImagePrivacy =  {
    private: Images.lock,
    public: Images.public,
    friend: Images.friend
}

export default class PostViewComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let { item } = this.props;
        let user = item.user;
        let createDate = new Date(item.createDate);
        let stylePostView = stylePost.normal;
        let styleState = stylePost.stateRequest
        if (item.type === "SOS" || item.type === "sos") {
            switch (item.state) {
                case PostStatus.process:
                    stylePostView = stylePost.processing;
                    styleState = stylePost.stateProcessing
                    break;
                case PostStatus.request:
                    stylePostView = stylePost.emergency;
                    styleState = stylePost.stateRequest;
                    break;
                case PostStatus.success:
                    stylePostView = stylePost.success;
                    styleState = stylePost.stateSuccess
                    break;
            }
        }
        return (
            <View style={{ marginBottom: 10 }}>
                <View style={[stylePostView, { paddingHorizontal: 20, paddingTop: 12, paddingBottom: 12 }]}>
                    <View>
                        {/* Header */}
                        <View style={[styles.row, { justifyContent: 'space-between' }]}>
                            <View>
                                <View style={styles.row}>
                                    <TouchableOpacity
                                    >
                                        <Image source={user.avatar ? { uri: user.avatar.url } : Images.avtDemo} style={{ width: 40, height: 40, borderRadius: 20, marginRight: 15 }} />
                                    </TouchableOpacity>
                                    <View>
                                        <TouchableOpacity>
                                            <Text
                                                style={{ fontSize: 15, fontWeight: 'bold' }}
                                            >
                                                {user.userName}
                                            </Text>
                                        </TouchableOpacity>
                                        <View style={{ display: 'flex', alignItems: 'center', flexDirection: 'row' }}>
                                            <Text
                                                style={{ fontSize: 12 }}
                                            >
                                                {
                                                    DateHelper.timeSince(createDate.getTime() / 1000)
                                                }
                                            </Text>
                                            {
                                                item.type != "SOS"
                                                ?

                                                <Image
                                                source={item.privacy === Privacy.public ?  ImagePrivacy.public : item.privacy === Privacy.private ? ImagePrivacy.private : ImagePrivacy.friend} style={{ width: 13, height: 13, marginHorizontal: 10, resizeMode: 'contain' }}
                                                />
                                                
                                                :
                                               <View style={{width: 13, height: 13}}></View>
                                            }
                                            {
                                                item.state
                                                    ?
                                                    <View
                                                        style={styleState}
                                                    >
                                                        <Text
                                                            style={{ color: '#fff', fontSize: 12, fontWeight: '600' }}
                                                        >
                                                            {
                                                            item.state == "REQUEST"
                                                            ?
                                                            "Khẩn cấp"
                                                            :
                                                            item.state == "PROCESSING"
                                                            ?
                                                            "Đang cứu trợ"
                                                            :
                                                            "Đã cứu trợ"
                                                        }
                                                        </Text>
                                                    </View>
                                                    :
                                                    <></>
                                            }

                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View>
                                <TouchableOpacity
                                    onPress={() => {
                                        this.props.showModal({item, user});
                                    }}
                                >
                                    <Image source={Images.more} style={{ width: 26, height: 6, resizeMode: 'contain' }} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        {
                        item.title
                            ?
                            <View
                            style={{marginTop: 10}}
                            >
                            <Text
                                style={{ fontSize: 15, fontWeight: 'bold' }}
                            >
                                {
                                    "Tiêu đề: "+item.title
                                }
                            </Text>
                            </View>
                            :
                            <></>
                    }
                        {
                            item.location
                                ?
                                <View>
                                    <Text
                                        style={{ fontWeight: '600', fontSize: 15, marginBottom: 10}}
                                    >Địa chỉ:</Text>
                                    <View>
                                        <TouchableOpacity
                                            style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
                                        >
                                            <Image
                                                style={{ width: 22, height: 22, marginRight: 5 }}
                                                source={Images.location}
                                            />
                                            <Text
                                                style={{
                                                    fontSize: 15
                                                }}
                                            >{item.location.name}</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View> :
                                <></>
                        }
                        {/* Description */}
                        <View style={{ marginTop: 5, marginBottom: 15 }}>
                            <View
                                className="title"
                            >
                                <Text>{item.description}</Text>
                            </View>
                        </View>

                        <PostImagesView images={this.props.item.images ? this.props.item.images : []} />
                    </View>
                </View>

                <PostViewAction item={item} />
            </View>
        )
    }
}

const stylePost = StyleSheet.create({
    emergency: {
        borderTopColor: '#DF3838', borderTopWidth: 2, borderBottomColor: '#DF3838', borderBottomWidth: 2, backgroundColor: 'rgba(254, 35, 35, 0.5)'
    },
    success: {
        borderTopColor: '#4CAF50', borderTopWidth:
            2, borderBottomColor: '#4CAF50', borderBottomWidth: 2, backgroundColor: 'rgba(76, 175, 80, 0.47)'
    },
    processing: {
        borderTopColor: '#F3C72E', borderTopWidth:
            2, borderBottomColor: '#F3C72E', borderBottomWidth: 2, backgroundColor: 'rgba(243, 199, 46, 0.63)'
    },
    normal: {
        borderTopColor: 'rgba(0,0,0,0.2)', borderTopWidth:
            2, borderBottomColor: 'rgba(0,0,0,0.2)', borderBottomWidth: 2, backgroundColor: '#fff'
    },
    stateRequest: {
        borderRadius: 12, paddingHorizontal: 8, paddingVertical: 2, backgroundColor: '#FE2323', display: 'flex', alignItems: 'center', justifyContent: 'center'
    },
    stateProcessing: {
        borderRadius: 12, paddingHorizontal: 8, paddingVertical: 2, backgroundColor: '#FFC107', display: 'flex', alignItems: 'center', justifyContent: 'center'
    },
    stateSuccess: {
        borderRadius: 12, paddingHorizontal: 8, paddingVertical: 2, backgroundColor: '#4CAF50', display: 'flex', alignItems: 'center', justifyContent: 'center'
    }
})