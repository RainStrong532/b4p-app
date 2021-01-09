import React from "react";
import { View } from "react-native";
import VerifyAccount from "../components/VerifyAccount"
export class VerifyAccountScreen extends React.Component {
    render() {
        return (
            <View>
                <VerifyAccount {...this.props}/>
            </View>
        );
    }
}
