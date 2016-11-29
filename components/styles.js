const {StyleSheet} = require('react-native');
module.exports = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  results: {
    padding: 5
  },
  header: {
    padding: 5,
    marginTop: 20,
    flexDirection: 'row',
  },
  logo: {
    height: 45,
    width: 45,
    marginRight: 5
  },
  searchInput: {
    height: 45,
    borderColor: '#eee',
    borderWidth: 1,
    borderRadius: 22,
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    marginLeft: 5,
    marginRight: 5,
    flex: 1
  },
  title: {
    textAlign: 'left',
    color: '#5c5c5c',
    marginLeft: 10,
    borderColor: '#ccc',
    width: 270,
    fontSize: 16

  },
  illustration: {
    height: 50,
    width:50
  },
  hit: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#EEE',
    paddingVertical: 8,
    margin: 1
  },
  url: {
    marginLeft: 10,
    color:'#5a96b1'
  },
  hitContent: {
    flexDirection: 'column',
    flex: 1,
    alignItems: 'flex-start'
  },
  highlighted: {
    backgroundColor: '#D4ECF7',
    fontWeight: 'bold',
  }
});
