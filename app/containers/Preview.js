/**
* @Date:   2017-03-17 10:55:12
 * @Last modified time: 2017-05-16T16:20:54+08:00
*/

import React from 'react';
import {View} from "react-native";
import styles from '../styles/Introduction';
import BaiduMapDemo from '../components/baiduMap';


export default class extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render(){
        return (
            <View style={[styles.container, this.props.style]}>
                <BaiduMapDemo></BaiduMapDemo>
            </View>
        );
    }
}
