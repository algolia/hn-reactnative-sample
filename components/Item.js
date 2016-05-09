import React, { Component } from 'react';
import { Text, View, Image, Linking, TouchableOpacity } from 'react-native';
import HighlightedText from './HighlightedText';
import styles from './styles.js';

export default class Item extends Component {
  render() {
    const { hit } = this.props;
    const imgURI = `https://drcs9k8uelb9s.cloudfront.net/${hit.objectID}.png`;
    return (
      <TouchableOpacity onPress={() => this.openLink(hit.url)}>
        <View style={styles.hit}>
          <Image source={{uri: imgURI}} style={styles.illustration}/>
          <View style={styles.hitContent}>
            <HighlightedText
              tag="**"
              style={styles.title}
              styles={{highlighted: styles.highlighted}}
              numberOfLines={2}>
              {hit._highlightResult.title.value}
            </HighlightedText>
            <Text style={styles.url} numberOfLines={1}>{this.keepDomainName(hit.url)}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
  keepDomainName(url) {
    if(!url) return url;
    return url.split('/')[2];
  }
  openLink(url) {
    Linking.openURL(url);
  }
}
