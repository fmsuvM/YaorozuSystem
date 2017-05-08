import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {Actions} from 'react-native-router-flux';

export default class PageB extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={Actions.pageC}>
                    <Text style={styles.linkText}>Link</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    linkText: {
        fontSize: 32,
        color: 'rgb(95, 177, 237)'
    }
});