import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableHighlight,
  Image
} from 'react-native';

class LoginPage extends Component {
componentWillMount () {
    var navigator = this.props.navigator;
    setTimeout (() => {
        navigator.replace({
            id: 'LoginPage',
        });
    }, 2000);
}

render () {
    return (
        <View style={{flex: 1, backgroundColor: 'red', alignItems: 'center', justifyContent: 'center'}}>
            <Text>login!!!</Text>
            <Image style={{position: 'absolute', left: 0, top: 0, width: 'auto', height: 'auto'}}></Image>
        </View>
    );
}
}

module.exports = LoginPage;