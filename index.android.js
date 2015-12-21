'use strict';

const React = require('react-native');
const SearchPage = require('./components/SearchPage');
const {AppRegistry} = React;

class reactNativeAlgolia extends React.Component {
  render() {
    return <SearchPage openLink={this.openLink}/>;
  }
}

AppRegistry.registerComponent('reactNativeAlgolia', () => reactNativeAlgolia);
