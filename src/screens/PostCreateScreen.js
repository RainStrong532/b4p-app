import React from "react";
import { View } from "react-native";
import PostCreateContainer from "../containers/PostCreateContainer"
import HeaderView from '../components/HeaderView'
import { styles } from "../commonStyles/styles";

export class PostCreateScreen extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <View>
                <PostCreateContainer {...this.props}/>
            </View>
        );
    }
}
