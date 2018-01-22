import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableHighlight,
  TextInput,
  ActivityIndicator
} from 'react-native';
import Button from 'apsl-react-native-button';
import Share, {ShareSheet} from 'react-native-share';

var {height, width} = Dimensions.get('window');

class MyFetch extends Component{
    constructor(props){
        super(props);
        this.state = {question: '?', answer: '?', text: 'E N T E R  A N S W E R', animating: true};
    }


fetchUrl() {
    var rand = Math.floor(Math.random() * 6) + 1;
    var URL = 'http://app.jetstreamradio.com:8999/teasers/' + rand;
     fetch(URL)
        .then((response) => response.json())
        .then((responseJson) => {this.setState({question: responseJson.question, answer: responseJson.answer});})
        .catch((error) => {
            console.error(error);
        })
}

componentDidMount() {
    this.fetchUrl();
}

clearText() {
    this.setState({text: 'E N T E R  A N S W E R'})
}

_renderNext() {
    if (this.state.showNext) {
        return (
            <Button style={styles.buttonHidden} textStyle={{fontSize: 12, color: '#FFFFFF', fontFamily: 'HelveticaNeue-Medium', letterSpacing: 5}}  onPress={() => this.setState(({text: this.state.answer}))}>
                NEXT TEASER
            </Button>
        );
    } else {
        return null;
    }
}
checkQuestionStatus() {
    if (this.state.question == '?' || '' || null) {   
        return (
        <ActivityIndicator
            animating={this.state.animating}
            style={{width: 80, height: 80}}
            color="#00a932"
            size="large"
        />
        )
    }
    return this.state.question;
}

render(){
    let options = {
      title: "Football Teaser",
      message: this.state.question + 'Download the app at: ',
      url: "http://appstoreurl.com/",
      subject: "Football Teaser", //  for email,
      social: "twitter, facebook, whatsapp, email", 
    };
    return (
      <View>
        <Text style={styles.questionText}>{this.checkQuestionStatus()}</Text>
        <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1, backgroundColor: 'rgba(65, 65, 65, 0.7)', fontSize: 12, textAlign: 'center', letterSpacing: 5, color: '#FFFFFF', fontFamily: 'HelveticaNeue-Medium', height: 50, borderColor: 'transparent', marginBottom: 10}}
            textStyle={{letterSpacing: 5}}
            onFocus= {() => this.setState({text : ''})}
            onChangeText={(text) => this.setState({text})}
            value={this.state.text.toUpperCase()}
            ref={component => this._textInput = component}
            returnKeyType={ 'done' }
        />
        <Button style={styles.button} textStyle={{fontSize: 12, color: '#FFFFFF', fontFamily: 'HelveticaNeue-Medium', letterSpacing: 5}} onPress={() => {    if(this.state.text.toLowerCase() == this.state.answer.toLowerCase()) {
            this.clearText();
            this.setState({question: null, answer: null});
            this.fetchUrl();
        }}}>
            SUBMIT
        </Button>
        <Button style={styles.button} textStyle={{fontSize: 12, color: '#FFFFFF', fontFamily: 'HelveticaNeue-Medium', letterSpacing: 5}} onPress={()=>{
          Share.open(options).catch(function() {console.log('error!')})}}>
            SHARE
        </Button>
        <Button style={styles.button} textStyle={{fontSize: 12, color: '#FFFFFF', fontFamily: 'HelveticaNeue-Medium', letterSpacing: 5}} onPress={() => this.setState({text: this.state.answer})}>
            REVEAL ANSWER
        </Button>
      </View>
    );
}
}

var styles = {
questionText: {
    backgroundColor: 'rgba(0,0,0,0.8)',
    borderColor: 'transparent',
    width: width * 0.8,
    marginTop: 10,
    margin: 'auto',
    fontSize: 12,
    color: '#FFFFFF',
    fontFamily: 'HelveticaNeue-Medium',
    padding: 20,
    marginBottom: 20,
    textAlign: 'center'
  },
  button: {
    flexDirection: 'row',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.8)',
    borderColor: 'transparent',
    width: width * 0.8,
    marginTop: 10,
    margin: 'auto',
    borderRadius: 0,
  },
  buttonHidden: {
    flexDirection: 'row',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.8)',
    borderColor: 'transparent',
    width: width * 0.8,
    marginTop: 10,
    margin: 'auto',
    borderRadius: 0,
    display: 'none'
  }
}

export default MyFetch;

AppRegistry.registerComponent('multiPageApp', () => MyFetch);