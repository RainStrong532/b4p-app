import * as React from "react";
import { View } from "react-native";
import HomeComponent from "../components/HomeComponent"
import {styles} from '../commonStyles/styles'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function HomeScreen (props) {
        return (
            <View>
                <HomeComponent {...props}/>
            </View>
        );
}
