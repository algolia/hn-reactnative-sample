import React, { Component } from 'react';
import { View, TextInput, Image } from 'react-native';
import styles from './styles.js';

export default class Header extends Component {
  render() {
    return (
      <View style={styles.header}>
        <Image source={require('./img/logo-hn-search.png')} style={styles.logo}/>
        <TextInput
          style={styles.searchInput}
          onChange={(e) => this.changeQuery(e)}
          placeholder="Search for stories by title or author"
          />
      </View>
    );
  }

  changeQuery(e){
    const q = e.nativeEvent.text;
    const helper = this.props.helper;
    const yesterday = Math.floor(Date.now() / 1000) - 3600 * 24;

    helper.clearRefinements('created_at_i')
          .addNumericRefinement('created_at_i', '>', yesterday)
          .setQuery(q)
          .search();
  }
}
