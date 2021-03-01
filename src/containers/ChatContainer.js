import React, { Component } from 'react';
import {connect} from 'react-redux'
import * as actions from '../actions/HomeAction'
import { View} from "react-native";
import ChatComponent from '../components/chat/ChatComponent'
class ChatContainer extends  React.Component {
  render() {
    return (
        <View>
            <ChatComponent {...this.props}/>
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

export default connect(mapStateToProps,mapDispatchToProps)(ChatContainer)

