import React from "react";
import { View } from "react-native";
import SplashComponent from "../components/SplashComponent"
class SplashScreen extends React.Component {
    render() {
        return (
            <View>
                <SplashComponent {...this.props}/>
            </View>
        );
    }
}

export default SplashScreen;
