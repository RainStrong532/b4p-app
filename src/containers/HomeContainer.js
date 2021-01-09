import React, { Component } from 'react';
import {connect} from 'react-redux'
import * as actions from '../actions/HomeAction'
import { View} from "react-native";
import HomeComponent from '../components/HomeComponent'
class HomeContainer extends  React.Component {
  render() {
    return (
        <View>
            <HomeComponent {...this.props}/>
        </View>
      
    );
  }
}

const mapStateToProps = (state) => {
  console.warn("map", state);
  return{
    auth: state.auth.jwt,
    test: state.test.messageResponse
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
      test: (data) =>  {
        console.warn("container");
        dispatch(actions.test(data))
      }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(HomeContainer)

