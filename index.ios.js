'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableHighlight
} from 'react-native';
import MyFetch from './myFetch';
import { 
  AdMobBanner, 
  AdMobInterstitial, 
  PublisherBanner,
  AdMobRewarded
} from 'react-native-admob'

var {height, width} = Dimensions.get('window');

var multiPageApp = React.createClass({
  
  getInitialState: function() {
		return {
			componentSelected: 'One'
		}
	},
  
  changeComponent: function(component) {
  	this.setState({
    	componentSelected: component	
    })
  },

  renderAdBanner() {
    return (
      <AdMobBanner
        bannerSize="fullBanner"
        adUnitID="ca-app-pub-4701742401503224/8848002794"
        testDeviceID="EMULATOR"
        didFailToReceiveAdWithError={this.bannerError} />
    )
  },
  
  renderComponent: function(component) {
  		if(component == 'One') {
      	return <ComponentOne changeComponent={this.changeComponent} />
      } else if(component == 'Two') {
      	return <ComponentTwo changeComponent={this.changeComponent} />
      } else if(component == 'Three') {
      	return <ComponentThree changeComponent={this.changeComponent} />
      }
  },
    
  render: function() {
    return (
      <View style={styles.container}>
        {this.renderComponent(this.state.componentSelected)}
      </View>
    );
  }
});

var ComponentOne = React.createClass({
	render: function() {
  	return (
      <Image source={require('./img/Bitmap.png')} style={styles.imageContainer}>
        <View style={{paddingTop:60, flex:1, justifyContent: 'center', flexDirection: 'column', alignItems: 'center', width: width}}>
          <Text style={{color: 'white', marginBottom:150, fontSize:25, backgroundColor: 'transparent', fontFamily: 'HelveticaNeue-Medium', letterSpacing: 4, width: width, textAlign: 'center'}}>FOOTBALL TEASERS</Text>
          <TouchableHighlight onPress={() => this.props.changeComponent('Two') } style={styles.button}><Text style={styles.buttonText}>PLAY</Text></TouchableHighlight>
          <TouchableHighlight onPress={() => this.props.changeComponent('Three') } style={styles.button}><Text style={styles.buttonText}>INFO</Text></TouchableHighlight>
        </View>
      </Image>
    )
  }
})

var ComponentTwo = React.createClass({
	render: function() {
  	return (
      <Image  source={require('./img/Bitmap.png')} style={styles.imageContainer}>
        <View className="foofoo" style={{paddingTop:60, flex:1, justifyContent: 'center', flexDirection: 'column', alignItems: 'center', width: width}}>
          <MyFetch />
          <TouchableHighlight onPress={() => this.props.changeComponent('One') } style={styles.button}><Text style={styles.buttonText}>RETURN HOME</Text></TouchableHighlight>
        </View>
      </Image>
    )
  }
})


var ComponentThree = React.createClass({
	render: function() {
  	return (
    	<View style={{backgroundColor: 'purple', paddingTop:60, flex:1}}>
      	<Text style={{color: 'white', marginBottom:150, fontSize:20}}>Hello From Component Three</Text>
      	<TouchableHighlight onPress={() => this.props.changeComponent('One') } style={styles.button}><Text>One</Text></TouchableHighlight>
        <TouchableHighlight onPress={() => this.props.changeComponent('Two') } style={styles.button}><Text>Two</Text></TouchableHighlight>
      </View>
    )
  }
})

var styles = StyleSheet.create({
  container: {
    flex: 1,
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
    margin: 'auto'
  },
  buttonText: {
    fontSize: 12,
    color: '#FFFFFF',
    fontFamily: 'HelveticaNeue-Medium',
    letterSpacing: 5
  },
  imageContainer: {
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    width: width
  }
});

AppRegistry.registerComponent('multiPageApp', () => multiPageApp);