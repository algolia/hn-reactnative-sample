import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  Linking,
} from 'react-native';

import Results from './Results';
import Header from './Header';
import styles from './styles.js';

const algoliasearch = require('algoliasearch/reactnative')('UJ5WYC0L7X', 'fa417a2309d484b364e87de9f82baa29');
import AlgoliaSearchHelper from 'algoliasearch-helper';

export default class SearchPage extends Component {
  constructor(props) {
    super(props);
    this.state = { lastSearchResults: null };
  }

  componentWillMount(){
    const helper = this.helper = AlgoliaSearchHelper(algoliasearch, 'Item_production_ordered');
    const yesterday = Math.floor(Date.now() / 1000) - 3600 * 24;

    helper.on('result', (res) => {
      this.setState({lastSearchResults: res});
    });

    helper.addTag('story')
          .setQueryParameter('highlightPreTag', '**')
          .setQueryParameter('highlightPostTag', '**')
          .addNumericRefinement('created_at_i', '>', yesterday)
          .search();
  }

  render() {
    const content = this.state.lastSearchResults &&
      <Results hits={this.state.lastSearchResults.hits} openLink={this.openLink}/>;

    return (
      <View style={styles.container}>
        <Header helper={this.helper} />
        {content}
      </View>
    );
  }

  openLink(url) {
    Linking.openURL(url);
  }
}

