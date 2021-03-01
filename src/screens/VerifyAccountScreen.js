import React from "react";
import { View } from "react-native";
import VerifyAccount from "../components/VerifyAccount"
import HeaderView from '../components/HeaderView'
import { styles } from "../commonStyles/styles";

export class VerifyAccountScreen extends React.Component {
    render() {
        return (
            <View>
                <HeaderView title="Xác thực tài khoản" style={styles.headerContainer1} {...this.props}/>
                <VerifyAccount {...this.props}/>
            </View>
        );
    }
}
