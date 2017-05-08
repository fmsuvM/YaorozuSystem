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
import {Scene, Router} from 'react-native-router-flux';

import PageA from './pages/PageA';
import PageB from './pages/PageB';
import PageC from './pages/PageC';
import Comment from './pages/Comment';
import Header from './pages/Header'

const src = 'https://facebook.github.io/react/img/logo_og.png';
const cup = 'https://gyazo.com/be40426dd9eb1a95f53724f2bf771323.png';
const desk = 'http://www.nitori-net.jp/wcsstore/ec/images/Image/catalog/6200337/200X310/620033701.jpg';
const gomibako = 'http://askul.c.yimg.jp/img/product/L1/484209_l1.jpg';
const kendama = 'https://i.gyazo.com/d6e953fdb892651c539ca59751aeeabd.png';
const senpuuki = 'https://gyazo.com/992bcc4d21650eff53814f8e833241bf.png';
const tana = 'https://a248.e.akamai.net/f/248/14050/1h/www.dinos.co.jp/kp/defaultMall/images/goods/C11/0146/etc/466772c1.jpg?Mode=l5';
const zortrax = 'https://gyazo.com/f4fdb24e248a579d1baed1b777fa0ff9.png'
const tkd = 'https://gyazo.com/0a94f2cd775ed46c43c5462d681c43d8.png';
const sector = 'https://gyazo.com/0a3aee147c99a88bde27d344d5700c88.png';
const soujiki = 'https://smlycdn.akamaized.net/data/product2/2/14fa920d9746662ac9c4f4e06338badc2ee8297a_l.jpg';

export default class App extends Component {

  render() {
    return (
      <View style={[styles.all]}>
        <Text style={[styles.header]}>Timeline</Text>
        <ScrollView style={[styles.container]}>
          <Comment name={'Desk'} text={'@sector 前に @tkd が何か置いたみたい'} iconName={desk} />
          <Comment name={'sector'} text={'LGディスプレイの充電器見当たらない'} iconName={sector} />
          <Comment name={'Dust Box'} text={'誰かが捨ててくれた，ありがとう'} iconName={gomibako} />
          <Comment name={'棚'} text={'誰かがUSBケーブルを戻したみたい'} iconName={tana} />
          <Comment name={'扇風機'} text={'そろそろ俺の季節？'} iconName={senpuuki} />

          <Comment name={'coffe cup'} text={'ちゃんと洗ってるか？'} iconName={cup} />
          <Comment name={'iNSTICK'} text={'立てば芍薬座れば牡丹．歩く姿は百合の花..... \nってね'} iconName={soujiki} />
          <Comment name={'Desk'} text={'@tkd わかった！'} iconName={desk} />
          <Comment name={'zortrax'} text={'いま出力したもの，誰のだろう...'} iconName={zortrax} />
          <Comment name={'Dust Box'} text={'ゴミを捨ててくれ〜'} iconName={gomibako} />
          <Comment name={'tkd'} text={'@Desk 下にLGのディスプレイ充電器置いた'} iconName={tkd} />
          <Comment name={'けん玉'} text={'頭がボロボロだ...'} iconName={kendama} />
          {/*<Comment name={'coffe cup'} text={'hello, I am coffee cup !'} src={src} />
          <Comment name={'coffe cup'} text={'hello, I am coffee cup !'} src={src} />
          <Comment name={'coffe cup'} text={'hello, I am coffee cup !'} src={src} />
          <Comment name={'coffe cup'} text={'hello, I am coffee cup !'} src={src} />
          <Comment name={'coffe cup'} text={'hello, I am coffee cup !'} src={src} />
          <Comment name={'coffe cup'} text={'hello, I am coffee cup !'} src={src} />
          <Comment name={'coffe cup'} text={'hello, I am coffee cup !'} src={src} />
          <Comment name={'coffe cup'} text={'hello, I am coffee cup !'} src={src} />
          <Comment name={'coffe cup'} text={'hello, I am coffee cup !'} src={src} />
          <Comment name={'coffe cup'} text={'hello, I am coffee cup !'} src={src} />*/}

        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  all: {
    flex: 1
  },
  container: {
    flex: 1,
    backgroundColor: '#222',
    // alignItems: 'center',
    // justifyContent: 'center'
  }, 
  header: {
    // flex: 1,
    backgroundColor: '#2d2b54',
    color: '#eee',
    fontSize: 30,
    // height: 80, 
    textAlign: 'center',
    paddingTop: 20,
    // fontFamily: 'Helvetica'
    //justifyContent: 'center'
  }
});

AppRegistry.registerComponent('App', () => App);