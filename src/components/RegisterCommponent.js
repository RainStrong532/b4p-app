import * as React from 'react'
import {View, ImageBackground, Image, TextInput, Button, Text, Platform, TouchableOpacity, TouchableHighlight, SafeAreaView } from 'react-native'
import { Keyboard } from 'react-native'
import Device from '../modules/Device'
import DateTimePicker from '@react-native-community/datetimepicker';
import {Images} from '../../assets/Images'
import {Picker} from '@react-native-picker/picker';
import CheckBox from 'react-native-check-box'
import { ScrollView } from 'react-native-gesture-handler';
import Helper from '../utils/Helper'
import checkContact from '../fetchApi/auth/checkContact'
import checkUserName from '../fetchApi/auth/checkUserName'
import AuthContext from '../utils/AuthContext'
import signup from '../fetchApi/auth/signup'

const initialLayout = {
    height: Device.screenSize().height,
    width: Device.screenSize().width,
};

export default function RegisterCommponent(props){
    const [date, setDate] = React.useState(new Date());
    const [mode, setMode] = React.useState('date');
    const [show, setShow] = React.useState(false);
    const [open, setOpen] = React.useState(false);
    const [password, setPassword] = React.useState('');
    const [contact, setContact] = React.useState('');
    const [firstName, setFirstName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [username, setUserName] = React.useState('');
    const [isValidatePassword, setValidatePassword] =  React.useState(true)
    const [repeatPassword, setRepeatPassword] = React.useState('');
    const [showPassword, setShowPassword] = React.useState(false);
    const [isCheck, setIsCheck] = React.useState(false);
    const [gender, setGender] = React.useState('MALE');
    const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    Keyboard.dismiss();
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  const onSubmit = () => {
    if(!Helper.validateEmail(contact) && !Helper.validatePhoneNumber(contact)){
        Helper.showAlert("Thông báo", "Email hoặc số điện thoại không hợp lệ!",
        [
            { text: "Ok", style: 'cancel', onPress: null }
        ]
        );
        return;
    }else{
        checkContact(contact).then((res) => {
            if(res.message !== "ok"){
                Helper.showAlert("Thông báo", "Email/sđt đã tồn tại!",
        [
            { text: "Ok", style: 'cancel', onPress: null }
        ]
        );
            }
        })
        .catch(err=> {
            Helper.showAlert("Thông báo", "Không kết nối được với server!",
            [
                { text: "Ok", style: 'cancel', onPress: null }
            ]
            );
        })
    }
    if(username.length < 6){
        Helper.showAlert("Thông báo", "Tên tài khoản tối thiểu 6 kí tự!",
        [
            { text: "Ok", style: 'cancel', onPress: null }
        ]
        );
        return;
    }else{
        checkUserName(username).then((res) => {
            if(res.message !== "ok"){
                Helper.showAlert("Thông báo", "Tên tài khoản đã tồn tại!",
        [
            { text: "Ok", style: 'cancel', onPress: null }
        ]
        );
            }
        })
        .catch(err=> {
            Helper.showAlert("Thông báo", "Không kết nối được với server!",
            [
                { text: "Ok", style: 'cancel', onPress: null }
            ]
            );
        })
    }
    if(password.length < 8){
        Helper.showAlert("Thông báo", "Mật khẩu tối thiểu 8 kí tự!",
        [
            { text: "Ok", style: 'cancel', onPress: null }
        ]
        );
        return;
    }
    
    if(firstName === "" || lastName === "" || date === null || gender === 'Giới tính'){
        if(username.length < 6){
            Helper.showAlert("Thông báo", "Thông tin thiếu xìn mới nhập đầy đủ để tiếp tục!",
            [
                { text: "Ok", style: 'cancel', onPress: null }
            ]
            );
            return;
        }
    }
    if(!isCheck){
        if(username.length < 6){
            Helper.showAlert("Thông báo", "Bạn phải chấp nhận điều khoản và dịch vụ của chúng tôi trước!",
            [
                { text: "Ok", style: 'cancel', onPress: null }
            ]
            );
            return;
        }
    }

    signup({username, contact, password, dob: date.getMilliseconds(), firstName, lastName, gender})
    .then((res) => {
        if(res.message == "Verify code sent!"){
            props.navigation.navigate("verify", {
                username: username,
                isSend: true,
                password: password
            });
        }else{
            Helper.showAlert("Thông báo", "Tạo tài khoản thất bại!",
            [
                { text: "Ok", style: 'cancel', onPress: null }
            ]
            );
        }
    })
    .catch(err => {
        Helper.showAlert("Thông báo", "Tạo tài khoản thất bại!",
            [
                { text: "Ok", style: 'cancel', onPress: null }
            ]
            );
    })
  }

        return(
            <ScrollView>
            <SafeAreaView>
            <View style={{
                paddingTop: 15,
                paddingHorizontal: 20,
                paddingBottom: 120

            }}>
            <View style ={{marginTop: 20}}>
                <View style={{display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-between'}}>
                    <View
                    style={{width: '48%', borderWidth: 1, borderColor: '#636363', borderRadius: 5}}
                    >
                    <TextInput
                        style={{fontSize: 15, color: '#636363', padding: 10, paddingVertical: 6}}
                            placeholder="Họ"
                            value={firstName}
                            onChangeText = {text => setFirstName(text)}
                        />
                    </View>
                    <View
                     style={{width: '48%', borderWidth: 1, borderColor: '#636363', borderRadius: 5}}
                    >
                    <TextInput
                    style={{fontSize: 15, color: '#636363', padding: 10, paddingVertical: 6}}
                        placeholder="Tên"
                        value={lastName}
                            onChangeText = {text => setLastName(text)}
                    />
                    </View>
                </View>
            </View>
            <View style={{width: '100%', borderWidth: 1, borderColor: '#636363', borderRadius: 5, marginTop: 20}}>
                    <TextInput
                    style={{fontSize: 15, color: '#636363', padding: 10, paddingVertical: 6}}
                        placeholder="Số di động hoặc email"
                        value={contact}
                        onChangeText = {text => setContact(text)}
                    />
            </View>
            <View style={{marginTop: 20}}>
                <Text style={{
                    fontSize: 15,
                    paddingBottom: 20
                }}>Ngày sinh</Text>
                <View style={{display: 'flex', flexDirection: 'row', width: '100%', borderWidth: 1, borderColor: '#636363', borderRadius: 5}}
                    onTouchStart =  {showDatepicker}
                >
                    <Image source={Images.calender} style={{width: 28, height: 28, resizeMode: 'contain', marginHorizontal: 10, marginTop: 5}}/>
                        <TextInput
                        style={{fontSize: 15, color: '#636363', padding: 10, paddingVertical: 6}}
                            placeholder="Ngày sinh của bạn"
                            value = {((date.getDate() > 9) ? date.getDate() : ("0" + date.getDate())) + "-" + ((date.getMonth() > 8) ? (date.getMonth()+1) : ("0" + (date.getMonth()+1))) + "-" + date.getFullYear()}
                        />
                </View>
            </View>
                <View>
                    {show && (
                        <DateTimePicker
                        testID="dateTimePicker"
                        value={date}
                        mode={mode}
                        is24Hour={true}
                        display="default"
                        onChange={onChange}
                        />
                    )}
                </View>
                <View style={{borderWidth: 1, borderColor: '#636363', borderRadius: 5, marginTop: 20}}>
                <Picker
                selectedValue={gender}
                style={{width: '100%', color: '#636363'}}
                onValueChange={(itemValue, itemIndex) =>{
                    setGender(itemValue)
                }
                }>
                <Picker.Item label="Nam" value="MALE" />
                <Picker.Item label="Nữ" value="FEMALE" />
                <Picker.Item label="Khác" value="OTHER" />
                </Picker>
                </View>
                <View style={{marginTop:20, width: '100%', borderWidth: 1, borderColor: '#636363', borderRadius: 5}}>
                <TextInput
                placeholder="Tên tài khoản"
                style={{fontSize: 15, color: '#636363', padding: 10, paddingVertical: 6}}
                value={username}
                onChangeText = {text => setUserName(text)}
                />
            </View>
                <View style={{marginTop: 20, position: 'relative', width: '100%', borderWidth: 1, borderColor: '#636363', borderRadius: 5}}>
                    <TextInput
                    style={{fontSize: 15, color: '#636363', padding: 10, paddingVertical: 6}}
                        secureTextEntry={showPassword ? false : true}
                        placeholder="Mật khẩu"
                        value = {password}
                        onChangeText={
                            (text) => setPassword(text)
                        }
                    />
                    <TouchableOpacity
                        onPress={() =>{ setOpen(!open); setShowPassword(!showPassword)}}
                        style={{position: 'absolute', right: 10, top: 10}}
                    >
                        <Image source={open ? Images.eye : Images.eye_close} style={{width: 20, height: 20, resizeMode: 'contain'}}/>
                    </TouchableOpacity>
                </View>

                <View style={{marginVertical: 20, width: '100%', borderWidth: 1, borderColor: '#636363', borderRadius: 5}}>
                    <TextInput
                    style={{fontSize: 15, color: '#636363', padding: 10, paddingVertical: 6}}
                    secureTextEntry={true}
                        placeholder="Nhập lại mật khẩu"
                        value = {repeatPassword}
                        onChangeText={(text) => {
                            setRepeatPassword(text);
                            if(text !== password){
                                setValidatePassword(false)
                            }else{
                                setValidatePassword(true)
                            }
                        }}
                    />
                </View>
                {
                        !isValidatePassword && 
                        <View style={{marginBottom: 20, paddingHorizontal: 20, backgroundColor: '#FFC8C8', paddingVertical: 10, borderRadius: 5}}>
                            <Text
                                style={{color: '#fff'}}
                            >Mật khẩu không khớp</Text>
                        </View>
                    }
                <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                <View>
                <CheckBox
                    isChecked={isCheck}
                    style={{flex: 1, paddingRight: 5}}
                    onClick={() => {
                        setIsCheck(!isCheck);
                    }}
                    />
                </View>
                <View>
                    <Text>Đồng ý với <Text style={{color: '#3879BD'}}>điều khoản</Text> và <Text style={{color: '#3879BD'}}>chính sách</Text></Text>
                </View>
                </View>
                
                <View style={{display: 'flex', alignItems: 'center'}}>
                    <TouchableOpacity style={{width: 116, height: 32,marginTop: 32 
                        ,backgroundColor: '#3879BD', borderRadius: 8, borderRadius:10
                        ,display: 'flex', justifyContent: 'center', alignItems: 'center'
                        }}
                        onPress={onSubmit}
                        >
                        <Text
                            style={{color: '#fff', fontSize: 15}}
                        >Đăng ký</Text>
                    </TouchableOpacity>
                </View>
            </View>
            </SafeAreaView>
            </ScrollView>
        )
}