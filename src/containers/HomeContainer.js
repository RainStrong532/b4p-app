import React, { Component } from 'react';
import {connect} from 'react-redux'
import * as actions from '../actions/HomeAction'
import * as authActions from '../actions/AuthAction'
import { View} from "react-native";
import HomeComponent from '../components/HomeComponent'

class HomeContainer extends  React.Component {
  componentDidMount(){
    this.props.getMyInfo();
  }
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
    myInfo: state.auth.myInfo,
    posts: state.posts.listData
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
      getMyInfo: () =>  {
        dispatch(authActions.getMyInfo())
      },
      getPosts: (data) => {
        dispatch(actions.getPosts(data))
      },
      createPost: (data) => {
        dispatch(actions.createPosts(data))
      },
      updatePost: (data) => {
        dispatch(actions.updatePost(data))
      },
      deletePost: (data)  => {
        dispatch(actions.deletePost(data))
      }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(HomeContainer)

