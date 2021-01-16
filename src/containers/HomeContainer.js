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
  return{
    auth: state.auth.jwt,
    test: state.test.messageResponse,
    posts: state.posts.listData
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
      test: (data) =>  {
        dispatch(actions.test(data))
      },
      getPosts: (data) => {
        dispatch(actions.getPosts(data))
      },
      createPost: (data) => {
        dispatch(actions.createPosts(data))
      }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(HomeContainer)

