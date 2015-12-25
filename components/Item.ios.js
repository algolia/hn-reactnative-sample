const React = require('react-native');
const {Text, View, Image, TouchableOpacity} = React;
const HighlightedText = require('./HighlightedText');
const styles = require('./styles.js');

const {AppRegistry, LinkingIOS} = React;
class Hit extends React.Component {
  render() {
    const {hit} = this.props;
    const imgURI = `https://drcs9k8uelb9s.cloudfront.net/${hit.objectID}.png`;
    return (
      <TouchableOpacity onPress={() => this.openLink(hit.url)}>
        <View key={hit.objectID} style={styles.hit}>
          <Image source={{uri: imgURI}} style={styles.illustration}/>
          <View style={styles.hitContent}>
            <HighlightedText tag="**"
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
    LinkingIOS.openURL(url); 
  }
}

module.exports = Hit;
