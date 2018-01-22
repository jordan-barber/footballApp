import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableHighlight,
  Image,
  Button
} from 'react-native';

class SplashPage extends Component {
componentWillMount () {
    var navigator = this.props.navigator;
    setTimeout (() => {
        navigator.replace({
            id: 'SplashPage',
        });
    }, 2000);
}

render () {
    return (
        <View style={{flex: 1, backgroundColor: 'red', alignItems: 'center', justifyContent: 'center'}}>
            <Button/>
            <Image style={{position: 'absolute', left: 0, top: 0, width: 'auto', height: 'auto'}}></Image>
        </View>
    );
}
}

module.exports = SplashPage;