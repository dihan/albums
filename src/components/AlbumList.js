import React, { Component } from 'react';
import { Text, View } from 'react-native';
import axios from 'axios';

class AlbumList extends Component
{
  state = { albums: [] };

  componentWillMount() {
    // console.log('componentWillMount in AlbumList');
    //.then(response => this.setState({ albums: responce.data }));

    const url = 'https://rallycoding.herokuapp.com/api/music_albums'
    axios.get(url).then(response => console.log(response.data));
    axios.get(url).then(response => this.setState({ albums: responce.data }));
  }

  renderAlbums() {
    return this.state.albums.map(album => <Text>{album.title}</Text>);
  }

  render() {

    // console.log(this.state.albums);

    return (
      <View>
        {this.renderAlbums()}
      </View>
    );
  }

}

export default AlbumList;
