import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component
{
  state = { albums: [] };

  componentWillMount() {
    const url = 'https://rallycoding.herokuapp.com/api/music_albums'
    axios.get(url).then(responce => this.setState({ albums: responce.data }));
  }

  renderAlbums() {
    return this.state.albums.map(album =>
      <AlbumDetail key={album.title} album={album} />
    );
  }

  render() {

    //console.log(this.state.albums);

    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }

}

export default AlbumList;
