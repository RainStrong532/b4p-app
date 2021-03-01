import React from 'react'
import {View, Text, Image, TouchableOpacity} from 'react-native'
import { Images } from '../../../assets/Images';
import {styles} from '../../commonStyles/styles'
import Device from '../../modules/Device'
import {DOMAIN} from '../../constants'

const initialLayout = {
    height: Device.screenSize().height,
    width: Device.screenSize().width,
};

export default class PostImagesView extends  React.Component{


    constructor(props){
        super();
    }
    render(){
        let images = this.props.images;
        return(
            <View>
                {
                images
                ?
                images.length == 1
                ?
                <View className="one_image">
                    <TouchableOpacity>
                    <Image 
                        source = {{uri:DOMAIN +"app"+ images[0].url}} style={{width: initialLayout.width-40, height: initialLayout.width-40, resizeMode: 'cover'}}
                    />
                    </TouchableOpacity>
                </View>
                :
                images.length == 2
                ?
                <View style={{display:'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                    <TouchableOpacity>
                    <Image 
                    source = {{uri:  DOMAIN + "app" +images[0].url}} style={{width: (initialLayout.width-40-5)/2, height: (initialLayout.width-40)/2, resizeMode: 'cover'}}
                    />
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <Image 
                    source = {{uri:DOMAIN +"app"+ images[1].url}} style={{width: (initialLayout.width-40-5)/2, height: (initialLayout.width-40)/2, resizeMode: 'cover'}}
                    />
                    </TouchableOpacity>
                </View>
                :
                images.length == 3
                ?
                <View>
                    <TouchableOpacity>
                    <Image 
                        source = {{uri:DOMAIN +"app"+ images[0].url}} style={{width: initialLayout.width-40, height: initialLayout.width-40, resizeMode: 'cover', marginBottom: 5}}
                    />
                    </TouchableOpacity>
                    <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                        <TouchableOpacity>
                        <Image 
                        source = {{uri:DOMAIN +"app"+ images[1].url}} style={{width: (initialLayout.width-40-5)/2, height: (initialLayout.width-40)/2, resizeMode: 'cover'}}
                        />
                        </TouchableOpacity>
                        <TouchableOpacity>
                        <Image 
                        source = {{uri:DOMAIN +"app"+ images[2].url}} style={{width: (initialLayout.width-40-5)/2, height: (initialLayout.width-40)/2, resizeMode: 'cover'}}
                        />
                        </TouchableOpacity>
                    </View>
                </View>
                :
                images.length == 4
                ?
                <View style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', width: initialLayout.width-40, height: initialLayout.width-40}}>
                    <TouchableOpacity>
                    <Image 
                    source = {{uri:DOMAIN +"app"+ images[0].url}} style={{width: (initialLayout.width-40-5)/2, height: (initialLayout.width-40-5)/2, resizeMode: 'cover'}}
                    />
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <Image 
                    source = {{uri:DOMAIN +"app"+ images[1].url}} style={{width: (initialLayout.width-40-5)/2, height: (initialLayout.width-40-5)/2, resizeMode: 'cover'}}
                    />
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <Image 
                    source = {{uri:DOMAIN +"app"+ images[2].url}} style={{width: (initialLayout.width-40-5)/2, height: (initialLayout.width-40-5)/2, resizeMode: 'cover', marginTop: 5}}
                    />
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <Image 
                    source = {{uri:DOMAIN +"app"+ images[3].url}} style={{width: (initialLayout.width-40-5)/2, height: (initialLayout.width-40-5)/2, resizeMode: 'cover', marginTop: 5}}
                    />
                    </TouchableOpacity>
                </View>
                :
                images.length == 0
                ?
                <></>
                :
                 <View>
                    <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                    <TouchableOpacity>
                        <Image 
                        source = {{uri:DOMAIN +"app"+ images[0].url}} style={{width: (initialLayout.width-40-5)/2, height: (initialLayout.width-40-5)/2, resizeMode: 'cover'}}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image 
                        source = {{uri:DOMAIN +"app"+ images[1].url}} style={{width: (initialLayout.width-40-5)/2, height: (initialLayout.width-40-5)/2, resizeMode: 'cover'}}
                        />
                    </TouchableOpacity>
                    </View>
                    <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: 5}}>
                        <TouchableOpacity>
                            <Image 
                            source = {{uri:DOMAIN +"app"+ images[2].url}} style={{width: (initialLayout.width-40-10)/3, height: (initialLayout.width-40-10)/3, resizeMode: 'cover'}}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image 
                            source = {{uri:DOMAIN +"app"+ images[3].url}} style={{width: (initialLayout.width-40-10)/3, height: (initialLayout.width-40-10)/3, resizeMode: 'cover'}}
                            />
                        </TouchableOpacity>
                        <View>
                        <TouchableOpacity
                            style={{position: 'relative'}}
                        >
                        <Image 
                            source = {{uri:DOMAIN +"app"+ images[4].url}} style={{width: (initialLayout.width-40-10)/3, height: (initialLayout.width-40-10)/3, resizeMode: 'cover'}}
                            />
                            {
                                (images.length - 5 > 0)
                                ?
                                <View style={{width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0, 0.4)', position: 'absolute', top: 0, left: 0}}>
                                    <Text style={{textAlign: 'center', color: '#ffff', fontWeight: 'bold', fontSize: 18}}>
                                        {`${(images.length - 5)}+`}
                                    </Text>
                                </View>
                                :
                                <View>

                                </View>
                            }
                        </TouchableOpacity>
                        </View>
                    </View>
                </View>
                :
                <></>
                }
            </View>
        )
    }
}