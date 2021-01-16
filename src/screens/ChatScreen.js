import * as React from 'react';
import { Button, Text, TextInput, View, StyleSheet, Image, FlatList , TouchableOpacity} from 'react-native';
import ChatContainer from '../containers/ChatContainer'
import HeaderView from '../components/HeaderView';
import { styles } from "../commonStyles/styles";
import {Images} from '../../assets/Images'

export function ChatScreen(props) {
    return (
      <View>
        <View style={{backgroundColor: '#fff', flexDirection: 'row', display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: 40, paddingBottom: 10, paddingHorizontal: 20, borderBottomWidth: 1, borderBottomColor: '#636363'}}>
                    <View style = {{display: 'flex', flexDirection:'row', alignItems: 'center'}}>
                        <TouchableOpacity style={{marginRight: 10}}
                            onPress={() => {
                                props.navigation.goBack();
                            }}
                        >
                            <Image
                                source={Images.backIcon} style={{width: 18,
                                    height: 18,
                                    resizeMode: 'contain',
                                    tintColor: '#000'
                                }}
                            />
                        </TouchableOpacity>
                       
                        <View style={{display: 'flex', alignItems: 'center', flexDirection: 'row'}}>
                        <TouchableOpacity>
                            <Image source={Images.avtDemo2} style={{width: 43, height: 43, borderRadius: 21.5, marginRight: 15}}/>
                        </TouchableOpacity>
                        <View>
                            <Text
                                style={{fontSize: 15, fontWeight: '700'}}
                            >
                                Như Quỳnh
                            </Text>
                        </View>
                        </View>
                    </View>
                    <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                        <TouchableOpacity>
                            <Image source={Images.phone} style={{width: 20,
                                    height: 20,
                                    resizeMode: 'contain',
                                    marginRight: 20
                                }}/>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={Images.warning_circle} style={{width: 25,
                                    height: 25,
                                    resizeMode: 'contain',
                                }}/>
                        </TouchableOpacity>
                    </View>
                </View>
        <ChatContainer {...props}/>
      </View>
    );
  }
