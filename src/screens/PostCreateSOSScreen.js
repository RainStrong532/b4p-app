import React from "react";
import { View } from "react-native";
import PostCreateSOSComponent from "../components/post/PostCreateSOSComponent"
import HeaderView from '../components/HeaderView'
import { styles } from "../commonStyles/styles";

export class PostCreateSOSScreen extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        console.warn();
        return (
            <View>
                <PostCreateSOSComponent {...this.props}/>
            </View>
        );
    }
}
