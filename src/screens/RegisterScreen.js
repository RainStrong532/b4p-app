import React from "react";
import { View } from "react-native";
import RegisterContainer from "../containers/RegisterContainer"
import HeaderView from '../components/HeaderView'
import { styles } from "../commonStyles/styles";

class RegisterScreen extends React.Component {
    render() {
        return (
            <View>
                <HeaderView title="Register" style={styles.headerContainer1} {...this.props}/>
                <RegisterContainer {...this.props}/>
            </View>
        );
    }
}

export default RegisterScreen;
