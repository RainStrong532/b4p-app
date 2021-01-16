import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { Component } from 'react'
import {View, ImageBackground, Image, TextInput, Button, Text, TouchableOpacity} from 'react-native'
import {Images} from '../../assets/Images'
import {styles} from '../commonStyles/styles'
import resendMail from '../fetchApi/auth/resendMail'
import verify from '../fetchApi/auth/verify'
import Device from '../modules/Device'
import Helper from '../utils/Helper';
const initialLayout = {
    height: Device.screenSize().height,
    width: Device.screenSize().width,
};


export default class VerifyAccount extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            token: "",
            username: this.props.route.params.username,
            isSend: this.props.route.params.isSend,
            time: 30
        }
        let interval = setInterval(() => {
            this.setState({time: this.state.time-1})
            if(this.state.time === 0){
                clearInterval(interval)
            }
        }, 1000)
    }
    onSubmit = () => {
        if(this.state.token !== ""){
            verify({token:  this.state.token, userName: this.state.username})
            .then((res) => {
                if(res.message === "Your account is successfully avtivated!"){
                    AsyncStorage.removeItem('loginMessage');
                    Helper.showAlert("Thông báo", "Xác thực thành công!", [
                        { text: "Về mà hình đăng nhập", style: 'cancel', onPress: () => {
                            this.props.navigation.navigate('login')
                        } }
                    ])
                }else if(res.message ===  "User is not found!"){
                        this.setState({username: ""})
                }
                else{
                    Helper.showAlert("Thông báo", res.message, [
                        { text: "Ok", style: 'cancel', onPress: null }
                    ])
                }
            })
        }else{
            Helper.showAlert("Thông báo", "Mã không được trống!", [
                { text: "ok", style: 'cancel', onPress: null }
            ])
        }
    }
    onResend = () => {
            resendMail({username: this.state.username}).then((res) => {
                if(res.message === "sent"){
                    this.setState({isSend: true, time: 30}, () => {
                        Helper.showAlert("Thông báo", "Mã đã được gửi!", [
                            { text: "Ok", style: 'cancel', onPress: null }
                        ])
                        let interval = setInterval(() => {
                            this.setState({time: this.state.time-1})
                            if(this.state.time === 0){
                                clearInterval(interval)
                            }
                        }, 1000)
                    })
                }
                else{
                    this.setState({isSend: false},  () => {
                    Helper.showAlert("Thông báo", res.message, [
                        { text: "Ok", style: 'cancel', onPress: null }
                    ])
                })
                }
            })
            .catch(err => {
                this.setState({isSend: false},  () => {
                Helper.showAlert("Thông báo", "Gửi mã thất bại", [
                    { text: "Ok", style: 'cancel', onPress: null }
                ])
            })
            })
    }
    render(){
        const username = this.state.username;
        return(
            <View style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: initialLayout.height-78}}>
               <View>
                   {
                       (username !== "" && username !== null && this.state.isSend === true)
                       ?
                       <View style={{display: 'flex', alignItems: 'center'}}>
                        <View style={{marginVertical: 20, width: initialLayout.width-40, borderWidth: 1, borderColor: '#636363', borderRadius: 5}}>
                       <TextInput
                       keyboardType='numeric'
                       placeholder="Code"
                       style={{fontSize: 15, color: '#636363', padding: 10, paddingVertical: 6, textAlign: 'center'}}
                       value={this.state.token}
                       onChangeText={(text) => {
                           this.setState({token: text});
                       }}
                      />
                      </View>
                      <View>
                       <TouchableOpacity
                       style={{marginTop: 20 , padding: 10, width: initialLayout.width-40
                        ,backgroundColor: '#3879BD', borderRadius: 8, borderRadius:10
                        ,display: 'flex', justifyContent: 'center', alignItems: 'center'
                        }}
                        onPress={this.onSubmit}
                       >
                           <Text style={{color: '#fff', fontSize: 15}}>Gửi</Text>
                       </TouchableOpacity>
                       <TouchableOpacity
                        style={{marginTop: 20 , padding: 10, width: initialLayout.width-40
                            ,backgroundColor: '#3879BD', borderRadius: 8, borderRadius:10
                            ,display: 'flex', justifyContent: 'center', alignItems: 'center'
                            }}
                            onPress={() => () => {
                                if(this.state.time == 0){
                                this.onResend()}}
                            }
                       >
                           <Text style={{color: '#fff', fontSize: 15}}>Gửi lại {(this.state.time !== 0)  ?  <Text>(Sau {this.state.time})</Text> : ""}</Text>
                       </TouchableOpacity>
                   </View>
                   </View>
                      :
                      <View style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                      <View style={{marginVertical: 20, width: initialLayout.width-40, borderWidth: 1, borderColor: '#636363', borderRadius: 5}}>
                      <TextInput
                       style={{fontSize: 15, color: '#636363', padding: 10, paddingVertical: 6}}
                       placeholder="Nhập tên tài khoản..."
                       value={this.state.username}
                       onChangeText= {text => this.setState({username: text})}
                      />
                      </View>
                      <TouchableOpacity
                       style={{width: 116, height: 32,marginTop: 20 
                        ,backgroundColor: '#3879BD', borderRadius: 8, borderRadius:10
                        ,display: 'flex', justifyContent: 'center', alignItems: 'center'
                        }}
                        onPress={this.onResend}
                      >
                           <Text
                            style={{color: '#fff', fontSize: 15}}
                           >Xác thực</Text>
                       </TouchableOpacity>
                      </View>
                   }
               </View>
            </View>
        )
    }
}