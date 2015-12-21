var React = require('react-native');
var {ListView, View} = React;
var Item = require('./Item');
const styles = require('./styles.js');

class Results extends React.Component {
  constructor(props){
    super(props);
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.state = { hits: ds.cloneWithRows(props.hits) };
  }
  render() {
    return (
      <ListView style={styles.results}
                dataSource={this.state.hits}
                renderSeparator={this.renderSeparator}
                renderRow={
                  (hit) => <Item hit={hit} openLink={this.props.openLink}/>
                } />
    );
  }
  componentWillReceiveProps(props) {
    this.setState({hits: this.state.hits.cloneWithRows(props.hits)});
  }
  renderSeparator() {
    return <View style={styles.separator}/>
  }
}

module.exports = Results;
