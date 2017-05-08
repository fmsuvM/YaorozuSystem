// tweetっぽいコメントを表示するやつ  
import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableHighlight,
  AppRegistry,
  ScrollView,
  Image
} from 'react-native';

let src;

export default class Comment extends Component {
    constructor(props){
        super();
        console.log(props);
        src = props.iconName;
    }

    render(){
        return (
            <View style={[styles.box]}>
                <Image style={[styles.icon]} source={{uri: this.props.iconName}} />
                {/*<Image style={[styles.icon]} source={require(src)} />*/}
                <View style={[styles.boxtext]}>
                    <Text style={[styles.name]}>{this.props.name}</Text>
                    <Text style={[styles.contents]}>{this.props.text}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    box: {
        flex: 1,
        backgroundColor: '#16162b',
        flexDirection: 'row',
        height: 100,
        borderWidth: 0.5,
        borderColor: '#000',
    },
    icon: {
        marginTop: 15,
        marginLeft: 10,
        width: 70,
        height: 70,
        borderRadius: 10
    }, 
    boxtext: {
        flexDirection: 'column'
    },
    name: {
        marginTop: 10,
        fontSize: 18,
        marginLeft: 10,
        fontWeight: 'bold', 
        color: '#eee'
    },
    contents: {
        fontSize: 15,
        marginLeft: 10,
        color: '#eee'
    }

});