import * as React from "react";
import { View, ImageBackground, Image, TextInput, Button, Text, Linking, Alert, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import CheckBox from 'react-native-check-box'
import Device from '../modules/Device'
import { AuthContext } from '../utils/AuthContext'
import { Images } from "../../assets/Images";
import { styles } from '../commonStyles/styles'
import Helper from "../utils/Helper";

const initialLayout = {
    height: Device.screenSize().height,
    width: Device.screenSize().width,
};

export default function LoginComponent(props) {
    const [isCheck, setIsCheck] = React.useState(false);
    const [password, setPassword] = React.useState('');
    const [username, setUsername] = React.useState('');
    const [show, setShow] = React.useState(false);
    const { signIn } = React.useContext(AuthContext)
    return (
        <ScrollView>
            <SafeAreaView>
                <View style={[styles.container, { paddingHorizontal: 20, paddingBottom: 20, height: initialLayout.height-78,display: 'flex' ,alignItems: 'center', justifyContent: 'space-between'}]}>
                    <View style={{width:  '100%',paddingHorizontal: 32, marginTop: 46, display: 'flex'}}>
                        <View>
                            <View style={styles.center}>
                                <Image source={Images.logo} style={{ width: 74, height: 82, resizeMode: 'contain' }} />
                            </View>
                            <View style={[styles.row, { padding: 10, marginTop: 32, overflow: 'hidden', paddingVertical: 8, borderWidth: 1, borderColor: '#c4c4c4', borderRadius: 8 }]}>
                                <Image source={Images.profile} style={{ height: 18, width: 18, resizeMode: 'contain', marginRight: 12 }} />
                                <TextInput
                                    style={{ fontSize: 15 }}
                                    placeholder="Tài khoản"
                                    underlineColorAndroid="transparent"
                                    onChangeText={setUsername}
                                    value={username}
                                />
                            </View>
                            <View style={[styles.row, { padding: 10, marginTop: 12, paddingVertical: 8, borderWidth: 1, borderColor: '#c4c4c4', overflow: 'hidden', borderRadius: 8, position: 'relative' }]}>
                                <Image source={Images.lock} style={{ height: 20, width: 20, resizeMode: 'contain', marginRight: 12 }} />
                                <TextInput
                                    style={{ fontSize: 15 }}
                                    placeholder="Mật khẩu"
                                    underlineColorAndroid="transparent"
                                    value={password}
                                    secureTextEntry={!show}
                                    onChangeText={setPassword}
                                />
                                <TouchableOpacity
                                    onPress={() => { setShow(!show) }}
                                    style={{ position: 'absolute', right: 10, top: 10 }}
                                >
                                    <Image source={show ? Images.eye : Images.eye_close} style={{ width: 20, height: 20, resizeMode: 'contain' }} />
                                </TouchableOpacity>
                            </View>
                            <View style={{ justifyContent: 'space-between', display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                                <View style={[styles.row]}>
                                    <CheckBox
                                        isChecked={isCheck}
                                        onClick={() => {
                                            setIsCheck(!isCheck);
                                        }}
                                    />
                                    <Text style={{ fontSize: 14, color: '#3879BD', marginLeft: 5 }}>Lưu mật khẩu</Text>
                                </View>
                                <Text
                                    style={{ color: '#3879BD', fontSize: 14 }}
                                    onPress={() => {
                                    }}
                                >
                                    Quên mật khẩu?
                    </Text>
                            </View>
                            <TouchableOpacity
                                style={[styles.center, { paddingVertical: 10, backgroundColor: '#e5e5e5', borderRadius: 20, marginTop: 20, backgroundColor: '#e5e5e5' }]}
                                onPress={
                                    () => {
                                        if(username === "" || password === ""){
                                            Helper.showAlert("Thông báo", "Bạn phải nhập đủ thông tin trước!", [
                                                {
                                                    text: "Ok", style: 'cancel', onPress: null
                                                }
                                            ])
                                        }else{
                                        signIn({ username: username, password: password });
                                        AsyncStorage.getItem("loginMessage").then((res) => {
                                            if (res === "Not verify yet!") {
                                                Helper.showAlert("Thông báo", "Tài khoản của bạn chưa được xác thực bạn có muốn xác thực?", [
                                                    { text: 'cancel', style: 'cancel', onPress: null },
                                                    {
                                                        text: "Ok", style: 'destructive', onPress: () => {
                                                            props.navigation.navigate("verify", {
                                                                username: username,
                                                                isSend: false
                                                            })
                                                        }
                                                    }
                                                ])
                                            } else if (res !== null) {
                                                Helper.showAlert("Thông báo", "Đăng nhập thất bại?", [
                                                    { text: "Ok", style: 'cancel', onPress: null }
                                                ])
                                            }
                                        })
                                            .catch(err => {
                                                Helper.showAlert("Thông báo", "Đăng nhập thất bại?", [
                                                    { text: "Ok", style: 'cancel', onPress: null }
                                                ])
                                            })
                                    }
                                }
                                }
                            >
                                <Text style={{ fontSize: 15, color: '#636363' }}>Đăng nhập</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ paddingTop: 20 }}>
                            <View style={{ marginTop: 25, display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                <View
                                    style={{ borderColor: '#636363', borderWidth: 0.5, width: 77 }}
                                ></View>
                                <View>
                                    <Text
                                        style={{ color: '#656565', fontSize: 14, marginHorizontal: 10 }}
                                    >Hoặc</Text>
                                </View>
                                <View
                                    style={{ borderColor: '#636363', borderWidth: 0.5, width: 77 }}
                                ></View>
                            </View>
                            <View style={[{ marginTop: 20 }, styles.row, { justifyContent: 'space-between' }]}>
                                <TouchableOpacity
                                    style={[styles.row, { paddingLeft: 20, backgroundColor: '#3879BD', justifyContent: 'flex-start', paddingVertical: 12, borderRadius: 8, paddingRight: 20 , flexGrow: 1, marginRight: 20}]}
                                >
                                    <Image source={Images.google} style={{ width: 27, height: 27, resizeMode: 'contain', marginRight: 10 }} />
                                    <Text
                                        style={{ fontSize: 12, color: '#fff' }}
                                    >Google</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={[styles.row, { paddingLeft: 20, backgroundColor: '#3879BD', justifyContent: 'flex-start', paddingVertical: 12, borderRadius: 8, paddingRight: 20 , flexGrow: 1 }]}
                                >
                                    <Image source={Images.facebook} style={{ width: 27, height: 27, resizeMode: 'contain', marginRight: 10 }} />
                                    <Text
                                        style={{ fontSize: 12, color: '#fff' }}
                                    >Facebook</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={{display: 'flex', flexDirection: 'row',alignItems: 'center', justifyContent: 'space-between',width: '100%', marginTop: 80}}>
                                <Text
                                    style={{ fontSize: 15 }}
                                >
                                    Để đăng ký tài khoản mới
                                </Text>
                                <Image
                                    source={Images.arrow_right} style={{ width: 12.5, height: 10.5, resizeMode: 'cover' }}
                                />
                                <TouchableOpacity
                                style={{paddingVertical: 10,borderRadius:40,  paddingHorizontal: 24, backgroundColor: '#3879BD'}}
                                >
                                    <Text
                                        style={{ color: '#fff', fontSize: 15}}
                                        onPress={() => {
                                            props.navigation.navigate("register");
                                        }}
                                    >
                                        Đăng ký
                                    </Text>
                                </TouchableOpacity>
                        </View>
                </View>
            </SafeAreaView>
        </ScrollView>
    )
}