import React, { Component } from 'react';
import {connect} from 'react-redux'
import * as actions from '../actions/HomeAction'
import { View} from "react-native";
import PostCreateComponent from '../components/post/PostCreateComponent'
class PostCreateContainer extends  React.Component {
  render() {
    return (
        <View>
            <PostCreateComponent {...this.props}/>
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
        create: (data)=>{
            dispatch(actions.createPosts(data));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(PostCreateContainer)

