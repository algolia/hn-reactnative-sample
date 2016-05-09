import React from 'react';
import SearchPage from './components/SearchPage';
import { AppRegistry } from 'react-native';

class ReactNativeAlgolia extends React.Component {
  render() {
    return <SearchPage openLink={this.openLink}/>;
  }
}

AppRegistry.registerComponent('reactNativeAlgolia', () => ReactNativeAlgolia);
