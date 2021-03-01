import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { Component } from 'react'
import {View, ImageBackground, Image, TextInput, Button, Text, ActivityIndicator, RefreshControl, FlatList, ScrollView, SafeAreaView} from 'react-native'
import PostViewHeader from './post/PostViewHeader'
import PostHeaderCreate from './post/PostHeaderCreate';
import PostViewComponent from './post/PostViewComponent';
import getPosts from '../fetchApi/home/getPosts'
import ModalOptionComponent from './commons/ModalOptionComponent';


export default class HomeComponent extends React.Component{
    constructor(props){
        super(props);
        this.state =  {
          token: null,
          isLoadMore: false,
          refeshing: false,
          showModal: false,
          data: null
        }
        this.page = 0;
    }
    componentDidMount(){
        this.props.getPosts({pageNo: this.page});
      }
      _renderItem =({item}) => {
        return(
          <PostViewComponent item = {item} showModal={this.onPressShowModal} navigation={this.props.navigation}/>
        )
    }
    _keyExtractor = (item, idx) => idx.toString()

    _loadMore = () => {
        if (this.state.isLoadMore) {
            return
        }
        this.setState({ isLoadMore: true }, () => {
          setTimeout(() => {
            this.setState({ isLoadMore: false });
          }, 2000)
        })
    }

    pullRefresh = () => {
        if (this.state.refeshing) {
            return
        }
        this.page = 0;
        this.setState({ refeshing: true }, () => {
          this.props.getPosts({pageNo: this.page});
          this.setState({refeshing: false})
    })
  }
  onPressShowModal = (data) => {
    this.setState({showModal: !this.state.showModal});
    if(data){
    this.setState({data: data});
    }
  }
    _renderBottom = () => {
      const { isLoadMore } = this.state;
      return (<View style={{ height: 40, justifyContent: 'center' }}>
          {isLoadMore ? <ActivityIndicator animating size="large" color="#000" /> : null}
      </View>)
  }
    render(){
      let {refeshing, isLoadMore} = this.state;
      let {posts} = this.props;
      if(!posts){
        posts = [];
      }
      if(this.props.route.params){
        if(this.props.route.params.reload){
          this.props.getPosts({pageNo: this.page});
        }
      }
        return(
            <View>
                <SafeAreaView>     
                  <FlatList
                     removeClippedSubviews={false}
                     ListHeaderComponent = {() => {
                       return(
                        <View style={{paddingHorizontal: 20, backgroundColor: '#fff',height: 72}}>
                          <PostViewHeader {...this.props}/>
                        </View>
                       )
                     }}
                     data={posts}
                     renderItem={this._renderItem}
                     keyExtractor={this._keyExtractor}
                     contentContainerStyle={{ width: '100%', minHeight: '100%'}}
                     onEndReached={this._loadMore}
                    //  onRefresh={this.refreshList}
                     refreshing={false}
                     ListFooterComponent={this._renderBottom}
                     ListEmptyComponent={() => <View style={{marginTop: 100}}><Text style={{textAlign: 'center', fontSize: 20}}>Chưa có bài viết nào</Text></View>}
                     showsVerticalScrollIndicator={true}
                     onEndReachedThreshold={Platform.OS === 'ios' ? 0 : 10}
                     refreshControl={
                         <RefreshControl
                             refreshing={refeshing}
                             onRefresh={this.pullRefresh}
                         />
                     }
                  />
                  {
                    
                    <ModalOptionComponent
                    showModal =  {this.state.showModal}
                    onPressShowModal = {this.onPressShowModal}
                    data = {this.state.data}
                    myInfo = {this.props.myInfo}
                    navigation={this.props.navigation}
                    updatePost={this.props.updatePost}
                    deletePost={this.props.deletePost}
                    />
                  }
                </SafeAreaView>

            </View>
        )
    }
}