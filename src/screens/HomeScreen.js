import * as React from "react";
import { View } from "react-native";
import HomeContainer from "../containers/HomeContainer"
import {styles} from '../commonStyles/styles'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function HomeScreen (props) {
        return (
            <View>
                <HomeContainer {...props}/>
            </View>
        );
}
