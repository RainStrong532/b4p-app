import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { Component } from 'react'
import {View, ImageBackground, Image, TextInput, Button, Text, Linking, FlatList, ScrollView, SafeAreaView} from 'react-native'
import PostViewHeader from './post/PostViewHeader'
import PostHeaderCreate from './post/PostHeaderCreate';
import PostViewComponent from './post/PostViewComponent';
export default class HomeComponent extends React.Component{
    constructor(props){
        super(props);
        this.state =  {
          token: null
        }
    }
    componentDidMount(){
        if(this.props.auth !== null && this.props.auth !== undefined){
        let data = {
          header: this.props.auth.tokenType + " " + this.props.auth.accessToken,
        }
          this.props.test(data);
        }
      }
    render(){
        return(
            <View>
              <ScrollView>
                <SafeAreaView>
                  <View style={{paddingHorizontal: 20}}>
                    <PostViewHeader {...this.props}/>
                    <PostHeaderCreate {...this.props}/>
                  </View>
                  <PostViewComponent {...this.props}/>
               
               {/* <FlatList
               
               /> */}
                </SafeAreaView>
               </ScrollView>
            </View>
        )
    }
}