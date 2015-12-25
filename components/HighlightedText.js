const React = require('react-native');
const { Text } = React;

class HighlightedText extends React.Component {
  render() {
    let isNextHighlighted = false;
    const tag = this.props.tag;
    const text = this.props.children;
    const styles = this.props.styles;
    const texts = text.split(tag).map(function(t){
      const style = isNextHighlighted ? styles.highlighted : styles.normal;
      isNextHighlighted = !isNextHighlighted;
      return <Text style={style}>{t}</Text>;
    });
    const nextProps = {...this.props};
    if(nextProps.styles) delete nextProps.styles;
    if(nextProps.tag) delete nextProps.tag;
    return <Text style={this.props.style}>{texts}</Text>;
  }
}

module.exports = HighlightedText;
