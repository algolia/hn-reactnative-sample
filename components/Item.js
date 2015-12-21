const React = require('react-native');
const {Text, View, Image, TouchableOpacity} = React;
const styles = require('./styles.js');

class Hit extends React.Component {
  render() {
    const {hit} = this.props;
    const imgURI = `https://drcs9k8uelb9s.cloudfront.net/${hit.objectID}.png`;
    return (
      <TouchableOpacity onPress={this.props.openLink.bind(this, hit.url)}>
        <View key={hit.objectID} style={styles.hit}>
          <Image source={{uri: imgURI}} style={styles.illustration}/>
          <View style={styles.hitContent}>
            <Text style={styles.title} numberOfLines={2}>{hit.title}</Text>
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
}

module.exports = Hit;
