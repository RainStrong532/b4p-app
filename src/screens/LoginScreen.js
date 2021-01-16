import React from "react";
import { View } from "react-native";
import LoginContainer from "../containers/LoginContainer"
import HeaderView from '../components/HeaderView'
import { styles } from "../commonStyles/styles";
class LoginScreen extends React.Component {
   
    render() {
        return (
            <View style={{flex: 1}}>
                <HeaderView removeLeft = {true} title="Đăng nhập" style={styles.headerContainer1} {...this.props} rightButton = "Trợ giúp" rightType = "text" rightStyle={{color: "#fff", fontSize: 12}} onPressRightButton={() => { console.warn("Hello");}}/>
                <LoginContainer {...this.props}/>
            </View>
        );
    }
}

export default LoginScreen;
