/**
* @Date:   2017-03-17 10:55:12
 * @Last modified time: 2017-05-16T16:20:54+08:00
*/

import React from 'react';
import {Alert, View, Text, TouchableOpacity} from "react-native";
import styles from '../styles/Introduction';
import BaiduMapDemo from '../components/baiduMap';


class Preview extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    updateSrc() {
        const { actions, photo } = this.props;
        actions.addPhoto("abc");
    }

    render(){
        const { actions, photo } = this.props;
        return (
            <TouchableOpacity style={[styles.container, this.props.style]} onPress={this.updateSrc.bind(this)}>
                <Text>呵呵</Text>
            </TouchableOpacity>
        );
    }
}

export const LayoutComponent = Preview;
export function mapStateToProps(state){
  return {
      photo : state.photo
  }
}
