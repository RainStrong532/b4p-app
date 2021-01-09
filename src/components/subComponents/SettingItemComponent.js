import React, { Component } from 'react'
import {View, ImageBackground, Image, TextInput, Button, Text, Linking, TouchableOpacity, FlatList} from 'react-native'
import { Images } from '../../../assets/Images';
import {styles} from '../../commonStyles/styles'
import Device from '../../modules/Device'
import SubSettingItem from './SubSettingItem'
import {AuthContext} from '../../utils/AuthContext'

const initialLayout = {
    height: Device.screenSize().height,
    width: Device.screenSize().width,
};

export default function SettingItemComponent(props){
    const [open, setOpen] = React.useState(false);
    const {signOut} = React.useContext(AuthContext);

        let subItems = [];
        let widthItem = 47;

        if(props.subItems){
            let length = props.subItems.length;
            let width = widthItem*(length + 1);
            subItems = props.subItems.map((item, index) => {
                return(
                    <SubSettingItem {...props} key = {index} title = {item.title} image ={item.image} style={{borderBottomWidth: (index === length-1) ? 0 : 1}}/>
                )
            })
        }
        return(
            <View style={{width: initialLayout.width-40 , marginTop: 8}}>
                <View style={{display: 'flex'}}>
                    <TouchableOpacity style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderWidth: 1, borderColor: '#C4C4C4', paddingLeft: 14, height: 47 , backgroundColor: !open ? 'rgba(0, 0, 0, 0)' : '#3879BD'}}
                        onPress = {
                            () => {
                                if(props.image == Images.signout){
                                    signOut();
                                }
                                if(subItems.length > 0){
                                     setOpen(!open)
                                }
                            }
                        }
                    >
                        <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                            <Image source={props.image} style={{width: 24, height: 24, resizeMode: 'contain', marginRight: 24, tintColor: open ? '#fff' : '#000'}}/>
                            <Text style ={{fontSize: 15, fontWeight: '700', color: open ? '#fff' : '#000'}}>
                                {props.title}
                            </Text>
                        </View>
                        {
                            props.subItems.length > 0
                            ?
                            <TouchableOpacity
                                style ={{padding: 14}}
                                onPress={() =>  setOpen(!open)}
                            >
                                <Image source={open ? Images.arrow_up: Images.arrow_down} style={{width: 15, height: 8, resizeMode: 'contain', tintColor: open ?  '#fff' : '#000'}}/>
                            </TouchableOpacity>
                            :
                            <></>
                        }
                    </TouchableOpacity>
                        <View
                         style={{display: 'flex', alignItems: 'center', marginVertical: 5}}
                         >    
                            {
                                open
                                ?
                                subItems
                                :
                                <></>
                            }
                        </View>
                </View>
            </View>
        )
}