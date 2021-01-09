import React, { Component } from 'react';
import {connect} from 'react-redux'
import { View} from "react-native";
import RegisterCommponent from '../components/RegisterCommponent'
class RegisterContainer extends  React.Component {

  render() {
    return (
        <View>
            <RegisterCommponent {...this.props}/>
        </View>
      
    );
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
    }
}

export default connect(null,mapDispatchToProps)(RegisterContainer)

