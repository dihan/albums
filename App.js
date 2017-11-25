import React, { Component } from 'react';
import { Text, View } from 'react-native';
//Props
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList'


export default class App extends Component {

  render() {
    const {container} = styles;

    return (
      <View style={container}>
        <Header headerText={'Albums'} />
        <AlbumList />
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#ccc'

  }
};
