import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { Component } from 'react'
import { View, ImageBackground, Image, TextInput, Button, Text, TouchableOpacity, ActivityIndicator } from 'react-native'
import { Images } from '../../../assets/Images'
import { styles } from '../../commonStyles/styles'
import {Picker} from '@react-native-picker/picker';
import HeaderView from '../../components/HeaderView'
import createPost from '../../fetchApi/home/createPost'
import { DOMAIN } from '../../constants';
import _ from 'lodash'
import uploadFile from '../../fetchApi/home/uploadFile'

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

export default class PostCreateComponent extends React.Component {
    constructor(props) {
        super(props);
        this.images = props.route.params ? props.route.params.item.images.map(item  => {return  {data: item, state: ImageState.success}}) : [];
        this.state = {
            isLoading: false,
            privacy: props.route.params? props.route.params.item.privacy :  Privacy.public,
            type: "NORMAL",
            description: props.route.params ? props.route.params.item.description : "",
            images: this.images ? this.images : []

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
        if(this.props.route.params){
            data.id = this.props.route.params.item.id;
            this.props.route.params.updatePost(data)
            this.props.navigation.goBack()
        }else{
        let token = "Bearer ";
             AsyncStorage.getItem("userToken").then(res => {

            token += res;
                createPost(data, token).then(res=>{
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
                                 style={{width: 20, height: 20,position: 'absolute' ,borderRadius: 20, backgroundColor: "rgba(0,0, 0,0.5)", display: 'flex', alignItems: 'center', justifyContent: 'center', right:0, top:0}}
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
            <View>
            <HeaderView title={item ? "Chỉnh sửa bài viết" :"Tạo bài viết"} style={styles.headerContainer1} {...this.props} rightButton ="ĐĂNG" rightStyle={{color: '#fff', fontWeight: '600', fontSize: 15}} rightType="text"  onPressRightButton={this.onCreate}/>
            <View style={{paddingHorizontal: 20, marginTop: 12}}>
                <View>
                    <View style={{display: 'flex', alignItems: 'center', flexDirection: 'row'}}>
                        <TouchableOpacity>
                            <Image
                                source={Images.avtDemo} style={{ width: 43, height: 43, borderRadius: 40 , marginRight: 20}}
                            />
                        </TouchableOpacity>
                        <View>
                            <Text
                                style={{fontSize: 15, fontWeight: 'bold'}}
                            >
                                Jack
                           </Text>
                            <View style={{display: 'flex', alignItems: 'center', flexDirection: 'row'}}>
                                <View
                                    style={{borderWidth: 1, borderColor: '#c4c4c4', maxHeight: 32, marginRight: 15}}
                                >
                                <Picker
                                    selectedValue={this.state.privacy}
                                    style={{ minWidth: 135, color: '#636363', textAlign: 'right', height: 32}}
                                    onValueChange={(itemValue, itemIndex) => {

                                        this.setState({privacy: itemValue});
                                    }
                                    }>
                                    <Picker.Item label="Công khai" value="PUBLIC" />
                                    <Picker.Item label="Bạn bè" value="FRIEND" />
                                    <Picker.Item label="Chỉ mình tôi" value="PRIVATE" />
                                </Picker>
                                </View>
                                {
                                    (!item)
                                    ?
                                    <TouchableOpacity
                                    onPress = {() => {
                                        this.props.navigation.navigate("create_post_sos")
                                    }}
                                >
                                    <View style={{width: 94, borderColor: '#FE2323', borderWidth: 1}}>
                                        <Text style={{textAlign: 'center', fontSize: 15,paddingVertical: 5, color: '#FE2323'}}>
                                            Cứu trợ
                                       </Text>
                                    </View>
                                </TouchableOpacity>
                                :
                                <View></View>    
                                }
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
                            placeholder="Nhập gì đó!"
                            multiline={true}
                            onChangeText={text=> this.setState({description: text})}
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
                </View>
            </View>
            </View>
        )
    }
}