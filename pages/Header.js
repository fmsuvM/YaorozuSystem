import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableHighlight,
  AppRegistry,
  ScrollView
} from 'react-native';

export default class Header extends Component {
    render(){
        return (
            <View style={[styles.header]}>
                
                <Text stylse={[styles.text]}>This is Header</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        //flex: 1,
        backgroundColor: '#3f5ebd'
    },
    text: {
        color: '#fff',
        fontSize: 40
    }
})