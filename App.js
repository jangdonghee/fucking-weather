import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  constructor(props){
    super(props);

    this.state = ({
      isLoaded: false
    });
  }
  render() {

    const {isLoaded} = this.state;

    return (
      <View style={styles.container}>
        {isLoaded ? null : (
          <View style={styles.loading}>
            <Text style={styles.loadingText}>Getting the fucking weather</Text>
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  loading: {
    flex:1, 
    backgroundColor: '#FDF6AA',
    justifyContent: 'flex-end',
    paddingLeft: 25

  },
  loadingText: {
    fontSize: 38,
    marginBottom: 100
  }
});
