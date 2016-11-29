import React, { Component } from 'react';
import { ListView, View } from 'react-native';
import Item from './Item';
import styles from './styles.js';

export default class Results extends Component {

  constructor(props){
    super(props);
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.state = { hits: ds.cloneWithRows(props.hits) };
  }
  render() {
    return (
      <ListView
        style={styles.results}
        dataSource={this.state.hits}
        renderRow={
          (hit) => <Item key={hit.objectID} hit={hit} openLink={this.props.openLink}/>
        } />
    );
  }
  componentWillReceiveProps(props) {
    this.setState({hits: this.state.hits.cloneWithRows(props.hits)});
  }
}

