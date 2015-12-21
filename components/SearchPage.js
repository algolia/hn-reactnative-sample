'use strict';

const React = require('react-native');
const {
  AppRegistry,
  Text,
  View,
  LinkingIOS
} = React;

const Results = require('./Results');
const Header = require('./Header');
const styles = require('./styles.js');

const algoliasearch = require('algoliasearch/reactnative')('UJ5WYC0L7X', 'fa417a2309d484b364e87de9f82baa29');
const AlgoliaSearchHelper = require('algoliasearch-helper');

class SearchPage extends React.Component {
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
          .addNumericRefinement('created_at_i', '>', yesterday)
          .search();
  }

  render() {
    const content = this.state.lastSearchResults ?
      <Results hits={this.state.lastSearchResults.hits} openLink={this.openLink}/> :
      undefined;

    return (
      <View style={styles.container}>
        <Header helper={this.helper} />
        {content}
      </View>
    );
  }

  openLink(url) {
    LinkingIOS.openURL(url); 
  }
}

module.exports = SearchPage;
