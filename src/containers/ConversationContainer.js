import React, { Component } from 'react';
import {connect} from 'react-redux'
import * as actions from '../actions/HomeAction'
import { View} from "react-native";
import ConversationComponent from '../components/chat/ConversationComponent'
class ConversationContainer extends  React.Component {
  render() {
    return (
        <View>
            <ConversationComponent {...this.props}/>
        </View>
      
    );
  }
}

const mapStateToProps = (state) => {
  return{
   
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
    
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ConversationContainer)

