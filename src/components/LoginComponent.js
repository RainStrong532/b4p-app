import * as React from "react";
import {View, ImageBackground, Image, TextInput, Button, Text, Linking, Alert, ScrollView, SafeAreaView, TouchableOpacity} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import CheckBox from 'react-native-check-box'
import Device from '../modules/Device'
import {AuthContext} from '../utils/AuthContext'
import { Images } from "../../assets/Images";
import {styles} from '../commonStyles/styles'

const initialLayout = {
    height: Device.screenSize().height,
    width: Device.screenSize().width,
};

export default function LoginComponent(props){
        const [isCheck, setIsCheck] = React.useState(false);
        const [password, setPassword] = React.useState('');
        const [username, setUsername] = React.useState('');
        const {signIn} = React.useContext(AuthContext)
        return(
            <ScrollView>
            <SafeAreaView>
            <View style={[styles.container,{paddingHorizontal: 20}]}>
            <View style={{width: '100%', marginTop: 46, paddingHorizontal: 32}}>
                <View>
                    <View style={styles.center}>
                       <Image  source={Images.logo} style={{width: 74, height: 82, resizeMode: 'contain'}}/>
                    </View>
                    <View style={[styles.row, {padding: 10, marginTop: 32, overflow: 'hidden', paddingVertical: 8, borderWidth: 1, borderColor: '#c4c4c4', borderRadius: 8}]}>
                        <Image source={Images.profile} style={{height: 18, width: 18, resizeMode: 'contain', marginRight: 12}}/>
                        <TextInput
                        style={{fontSize: 15}}
                        placeholder="Username"
                        underlineColorAndroid="transparent"
                        onChangeText={setUsername}
                        value={username}
                        />
                    </View>
                    <View style={[styles.row, {padding: 10, marginTop: 12, paddingVertical: 8, borderWidth: 1, borderColor: '#c4c4c4', overflow: 'hidden', borderRadius: 8}]}>
                        <Image source={Images.lock} style={{height: 20, width: 20, resizeMode: 'contain', marginRight: 12}}/>
                        <TextInput
                        style={{fontSize: 15}}
                        placeholder="Password"
                        underlineColorAndroid="transparent"
                        value={password}
                        secureTextEntry={true}
                        onChangeText={setPassword}
                        />
                    </View>
                    <TouchableOpacity
                        style={[styles.center,{paddingVertical: 10, backgroundColor: '#e5e5e5', borderRadius: 20, marginTop: 20, backgroundColor: '#e5e5e5'}]}
                        onPress= {
                            () => {
                            signIn({username: username, password: password});
                            }
                        }
                    >
                            <Text style={{fontSize: 15, color: '#636363'}}>Đăng nhập</Text>
                    </TouchableOpacity>
                    </View>
                 <View style={{paddingTop: 20}}>
                    <View style={{justifyContent: 'space-between', display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                     <View style={[styles.row]}>
                        <CheckBox
                            isChecked={isCheck}
                            onClick={() => {
                                setIsCheck(!isCheck);
                            }}
                            />
                        <Text style={{fontSize: 14, color: '#3879BD', marginLeft: 5}}>Lưu mật khẩu</Text>
                    </View>
                    <Text
                    style={{color: '#3879BD', fontSize: 14}}
                    onPress={() => {
                        props.navigation.navigate("register");
                    }}
                    >
                        Đăng ký
                    </Text>
                    </View>
                    <View style={{marginTop: 78, display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                        <View
                            style={{borderColor: '#636363', borderWidth: 0.5, width: 77}}
                        ></View>
                        <View>
                            <Text
                                style={{color: '#656565', fontSize: 14, marginHorizontal: 10}}
                            >Hoặc</Text>
                        </View>
                        <View
                            style={{borderColor: '#636363', borderWidth: 0.5, width: 77}}
                        ></View>
                    </View>
                    <View style={{marginTop: 20}}>
                        <TouchableOpacity
                            style={[styles.row, {backgroundColor: '#3879BD', justifyContent: 'center', paddingVertical: 12, borderRadius: 8, position: 'relative'}]}
                        >
                            <Image source = {Images.google} style={{width: 27, height: 27, resizeMode: 'contain', position: 'absolute', left: 15}}/>
                            <Text
                                style={{fontSize: 15, color: '#fff'}}
                            >Tiếp tục với Google</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.row, {backgroundColor: '#3879BD',marginTop: 5, justifyContent: 'center', paddingVertical: 12, borderRadius: 8, position: 'relative'}]}
                        >
                            <Image source = {Images.facebook} style={{width: 27, height: 27, resizeMode: 'contain', position: 'absolute', left: 15}}/>
                            <Text
                                style={{fontSize: 15, color: '#fff'}}
                            >Tiếp tục với Facebook</Text>
                        </TouchableOpacity>
                    </View>
                 </View>
            </View>
            </View>
            </SafeAreaView>
            </ScrollView>
        )
}