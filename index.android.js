'use strict';

const React = require('react-native');
const SearchPage = require('./components/SearchPage');
const {AppRegistry, IntentAndroid} = React;

class reactNativeAlgolia extends React.Component {
  render() {
    return <SearchPage openLink={this.openLink}/>;
  }

  openLink(url) {
    IntentAndroid.openURL(url); 
  }
}

AppRegistry.registerComponent('reactNativeAlgolia', () => reactNativeAlgolia);
