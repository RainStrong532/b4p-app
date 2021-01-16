import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { Images } from '../../../assets/Images';
import { styles } from '../../commonStyles/styles'
import Device from '../../modules/Device'

const initialLayout = {
    height: Device.screenSize().height,
    width: Device.screenSize().width,
};

export default class PostViewAction extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {item} = this.props;
        console.warn("props action: ", this.props.item.type);
        return (
            <View style={{ backgroundColor: '#fff' }}>
                {/* main action */}
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', height: 48, alignItems: 'center' }}>
                    {/* Like */}
                    <View style={{ marginLeft: 20 }}>
                        <TouchableOpacity>
                            <Image
                                source={Images.heart} style={{ width: 24, height: 24, resizeMode: 'contain' }}
                            />
                        </TouchableOpacity>
                    </View>
                    {/* Comment */}
                    <View>
                        <TouchableOpacity>
                            <Image
                                source={Images.comment} style={{ width: 21, height: 21, resizeMode: 'contain' }}
                            />
                        </TouchableOpacity>
                    </View>
                    {/*Direct */}
                    <View>
                        <TouchableOpacity>
                            <Image
                                source={Images.direct} style={{ width: 32, height: 32, resizeMode: 'contain' }}
                            />
                        </TouchableOpacity>
                    </View>
                    {/* locate */}
                    <View style={{ marginRight: 20 }}>
                        <TouchableOpacity>
                            <Image
                                source={Images.locate} style={{ width: 24, height: 24, resizeMode: 'contain' , tintColor: item.type === "SOS" ? 'rgba(0,0,0, 1)' : 'rgba(0,0,0, 0.4)'}}
                            />
                        </TouchableOpacity>
                    </View>
                    {
                        item.type === "SOS"
                            ?
                            <TouchableOpacity
                                style={{ width: 123, borderLeftWidth: 1, borderLeftColor: '#938F8F', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                            >
                                <Text
                                    style={{ fontSize: 18, fontWeight: 'bold', color: '#206CDA' }}
                                >
                                    Chấp nhận
                    </Text>
                            </TouchableOpacity>
                            :
                            <></>
                    }
                </View>
            </View>
        )
    }
}