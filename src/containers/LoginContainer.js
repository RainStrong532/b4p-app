import React, { Component } from 'react';
import {connect} from 'react-redux'
import * as actions from '../actions/AuthAction'
import { View, Text} from "react-native";
import LoginComponent from '../components/LoginComponent'
class LoginContainer extends  React.Component {
  render() {
    return (
        <View>
            <LoginComponent {...this.props}/>
        </View>
    );
  }
}
const mapStateToProps = (state) => {
  return{
    auth: state.auth.jwt,
    isFetching: state.auth.isFetching
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: (data) => {
          dispatch(actions.login(data));
        },
        test: (data) =>  {
          dispatch(actions.test(data))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(LoginContainer)

