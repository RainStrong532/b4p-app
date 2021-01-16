import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { Component } from 'react'
import { View, ImageBackground, Image, TextInput, Button, Text, TouchableOpacity , ActivityIndicator} from 'react-native'
import { Images } from '../../../assets/Images'
import { styles } from '../../commonStyles/styles'
import {Picker} from '@react-native-picker/picker';
import HeaderView from '../HeaderView'
import createPost from '../../fetchApi/home/createPost'
import uploadFile from '../../fetchApi/home/uploadFile'
import { DOMAIN } from '../../constants';
import _ from 'lodash'
import { SafeAreaView } from 'react-navigation';

const Privacy = {
    private: 'PRIVATE',
    public: 'PUBLIC',
    friend: 'FRIEND'
}
const ImageState = {
    uploading: "uploading",
    success: "success",
    failure: "failure"
}
const PostStatus = {
    request: 'REQUEST',
    process: 'PROCESSING',
    success: 'SUCCESS'
}
export default class PostCreateSOSComponent extends React.Component {
    constructor(props) {
        super(props);
        this.images = props.route.params ? props.route.params.item.images.map(item  => {return  {data: item, state: ImageState.success}}) : [];
        this.state = {
            privacy: Privacy.public,
            type: "SOS",
            description: props.route.params ? props.route.params.item.description : "",
            title: props.route.params ? props.route.params.item.title : "",
            location: {
                id: 2,
                name: "Học viện Bưu chính Viễn Thông,Mộ Lao, Hà Đông, Hà Nội, Việt Nam"
            },
            state: props.route.params ? props.route.params.item.state : PostStatus.request,
            images: this.images ? this.images : [],


        }
    }
    onPressRemoveImage = (index) => {
        let images =  this.state.images;
        let   res =  _.remove(images, (item, i) => {
                return i != index;
            });
            this.setState({images: res});
    }
    onPressAddImage = (data) => {
        let images =  this.state.images;
        images[images.length] = {data: data, state: ImageState.uploading}
        let token = "Bearer ";
        this.setState({images: images}, () => {
            AsyncStorage.getItem('userToken').then(res => {
                token+=res;
                console.warn(token);
                uploadFile(data, token).then(res => {
                    images[images.length-1].state = ImageState.success;
                    images[images.length-1].data = res;
                    this.setState({images: images});
                }).catch(() => {
                    images[images.length-1].state = ImageState.failure;
                    this.setState({images: images});
                })
            }).catch((err) => {
                images[images.length-1].state = ImageState.failure;
                this.setState({images: images});
            })
        });
    }
    onCreate = () => {
        let images = this.state.images.map(item => {
            if(item.state == ImageState.success){
                return{
                    ...item.data
                }
            }
        })
        const data = {};
        data.images = images;
        data.privacy = this.state.privacy;
        data.type = this.state.type;
        data.description  = this.state.description;
        data.title = this.state.title;
        data.state = this.state.state;
        data.location = this.state.location
        if(this.props.route.params){
            data.id = this.props.route.params.item.id;
            this.props.route.params.updatePost(data)
            this.props.navigation.goBack()
        }else{
        let token = "Bearer ";
             AsyncStorage.getItem("userToken").then(res => {
            token += res;
        createPost(data, token).then(res=>{
            console.warn(res);
            if(res.id){
                this.props.navigation.navigate("home");
            }
        })
        .catch(err => {
            console.warn(err);
        })
    })
    .catch(err => console.warn(err))
    }
    }
    render() {
        let images = this.state.images;
        let listImage = [];
        let item = null;
        if(this.props.route.params){
        item = this.props.route.params.item;
        }
        listImage = images.map((item, index)=> {
            return(
                <TouchableOpacity
                key={index}
                    style={{width: 61, height: 61, borderRadius: 5, backgroundColor: '#C4C4C4', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: 10, flexWrap: 'wrap'}}
                >
                    {
                        item.state == ImageState.uploading
                        ?
                        <View style={{width: '100%', height: '100%', backgroundColor: "rgba(0,0, 0,0.5)", display: 'flex', position: 'relative', alignItems: 'center', justifyContent: 'center'}}>
                            <ActivityIndicator  size="small" color="#fff"/>
                            <TouchableOpacity
                                 style={{width: 20, height: 20,position: 'absolute' ,borderRadius: 20, backgroundColor: "rgba(0,0, 0,0.5)", display: 'flex', alignItems: 'center', justifyContent: 'center', right:0, top: 0}}
                                 onPress={() =>this.onPressRemoveImage(index)}
                            >
                                <Image
                                    source={Images.close}
                                    style={{width: 15, height: 15, resizeMode: 'cover', tintColor: '#fff'}}
                                />
                            </TouchableOpacity>
                        </View>
                        :
                        item.state == ImageState.success
                        ?
                        <View style={{width: '100%', height: '100%', position: 'relative'}}>
                            <Image
                             source={{uri: DOMAIN+"app"+item.data.url}}
                             style={{width: '100%', height: '100%', resizeMode: 'cover'}}
                            />
                            <TouchableOpacity
                                 style={{width: 20, height: 20,position: 'absolute' ,borderRadius: 20, backgroundColor: "rgba(0,0, 0,0.5)", display: 'flex', alignItems: 'center', justifyContent: 'center', right:0}}
                                 onPress={() =>this.onPressRemoveImage(index)}
                            >
                                <Image
                                    source={Images.close}
                                    style={{width: 15, height: 15, resizeMode: 'cover', tintColor: '#fff'}}
                                />
                            </TouchableOpacity>
                        </View>
                        :
                        <View style={{width: '100%', height: '100%', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                             <Image
                             source={Images.close}
                             style={{width: 40, height: 40, resizeMode: 'cover', tintColor: 'red'}}
                            />
                            <TouchableOpacity
                                 style={{width: 20, height: 20,position: 'absolute' ,borderRadius: 20, backgroundColor: "rgba(0,0, 0,0.5)", display: 'flex', alignItems: 'center', justifyContent: 'center', right:0, top: 0}}
                                onPress={() =>this.onPressRemoveImage(index)}
                            >
                                <Image
                                    source={Images.close}
                                    style={{width: 15, height: 15, resizeMode: 'cover', tintColor: '#fff'}}
                                />
                            </TouchableOpacity>
                        </View>
                    }
                </TouchableOpacity>
            )
        })
        return (
            <SafeAreaView>
            <View>
                <HeaderView title="Cứu trợ" style={styles.headerContainer1} {...this.props} rightButton ="ĐĂNG" rightStyle={{color: '#fff', fontWeight: '600', fontSize: 15}} rightType="text"  onPressRightButton={this.onCreate}/>
            <View style={{paddingHorizontal: 20, marginTop: 12}}>
                <View>
                   <View>
                       <Text
                        style={{fontWeight: '600', fontSize: 18, marginBottom: 10}}
                       >Tiêu đề</Text>
                       <View>
                       <TextInput
                       value={this.state.title}
                       onChangeText={text=> this.setState({title: text})}
                            placeholder="Nhập tiêu đề"
                            style={{borderWidth: 1, borderColor: 'rgba(99,99,99,0.75)',  fontSize: 15, color: '#000', paddingHorizontal: 12, paddingVertical: 5}}
                        />
                       </View>
                   </View>
                   <View>
                       <Text
                        style={{fontWeight: '600', fontSize: 18, marginBottom: 10, marginTop: 15}}
                       >Địa chỉ</Text>
                       <View>
                            <View
                                style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'nowrap'}}
                            >
                                <Image
                                    style={{width: 22, height: 22, marginRight: 5}}
                                    source={Images.location}
                                />
                                <Text
                                    style={{
                                        fontSize: 15,
                                        flexShrink: 1
                                    }}
    
                                >{this.state.location.name}</Text>
                                <TouchableOpacity
                                    style={{paddingLeft: 10}}
                                >
                                    <Text
                                    style={{fontSize: 13, color: '#206CDA'}}
                                   >
                                        Sửa
                                    </Text>
                                </TouchableOpacity>
                            </View>
                       </View>
                   </View>
                    <View
                        style={{marginTop: 15}}
                    >
                        <Text
                            style={{fontWeight: '600', fontSize: 18, marginBottom: 10}}
                        >Nội dung</Text>
                        <TextInput
                        value={this.state.description}
                        onChangeText={text=> this.setState({description: text})}
                            placeholder="Nhập gì đó!"
                            multiline={true}
                            numberOfLines={8}
                            style={{maxHeight: 206, minHeight: 80, borderWidth: 1, borderColor: 'rgba(99,99,99,0.75)', paddingVertical: 12, fontSize: 15, color: '#000', paddingHorizontal: 12, textAlignVertical: 'top'}}
                        />
                    </View>
                    <View style={{marginTop: 15, marginBottom: 30}}>
                        <Text
                        style={{fontWeight: '600', fontSize: 18, marginBottom: 10}}
                        >
                            Hình ảnh
                        </Text>
                        <View style={{display: 'flex', flexDirection: 'row'}}>
                            {
                                listImage
                            }
                        <TouchableOpacity
                            onPress = {() => {
                                this.props.navigation.navigate("camera", {
                                    onPressAddImage: this.onPressAddImage
                                });
                            }}
                            style={{width: 61, height: 61, borderRadius: 5, backgroundColor: '#C4C4C4', display: 'flex', alignItems: 'center', justifyContent: 'center'}}
                        >
                            <Image
                                source={Images.add_circle}
                                style={{width: 30, height: 30, resizeMode: 'cover'}}
                            />
                        </TouchableOpacity>
                        </View>
                    </View>
                    <View>
                       <Text
                        style={{fontWeight: '600', fontSize: 18, marginBottom: 10}}
                       >Tình trạng</Text>
                       <View style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row'}}>
                            <TouchableOpacity
                                style={{borderRadius: 20, backgroundColor: this.state.state === PostStatus.request ? '#FE2323' : '#E5E5E5'}}
                                onPress={() => {
                                    if(item.id){
                                        this.setState({state: PostStatus.request})
                                    }
                                }}
                            >
                                <Text
                                    style={{fontSize: 15, color: '#fff', fontWeight: 'bold', paddingHorizontal: 10, paddingVertical: 5}}
                                >
                                    Khẩn cấp
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                             onPress={() => {
                                if(item.id){
                                    this.setState({state: PostStatus.process})
                                }
                            }}
                            style={{borderRadius: 20, backgroundColor: this.state.state === PostStatus.process ? '#FE2323' : '#E5E5E5'}}
                            >
                                <Text
                                 style={{fontSize: 15, fontWeight: 'bold', paddingHorizontal: 10, paddingVertical: 5, color: '#fff'}}
                                >
                                    Đang cứu trợ
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                             onPress={() => {
                                if(item.id){
                                    this.setState({state: PostStatus.success})
                                }
                            }}
                            style={{borderRadius: 20, backgroundColor: this.state.state === PostStatus.success ? '#FE2323' : '#E5E5E5'}}
                            >
                                <Text
                               style={{fontSize: 15, fontWeight: 'bold', paddingHorizontal: 10, paddingVertical: 5, color: '#fff'}}
                                >
                                    Đã cứu trợ
                                </Text>
                            </TouchableOpacity>
                       </View>
                   </View>
                </View>
            </View>
            </View>
            </SafeAreaView>
        )
    }
}