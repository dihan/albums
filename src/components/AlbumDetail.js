import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

// ({album}) instead of props.album
const AlbumDetail = ({album}) => {
  // Destructure refactor styles.imageCell to {imageCell}
  const {title, artist, thumbnail_image, image, url } = album;
  const {imageCell, imageThumbnail, textCell, textTitle, imageStyle} = styles;

  return (
    <Card>
      <CardSection>
        <View style={imageCell}>
          <Image
            style={imageThumbnail}
            source={{ uri: thumbnail_image }}
          />
        </View>
        <View style={textCell}>
          <Text style={textTitle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>

      <CardSection>
        <Image style={imageStyle} source={{ uri: image }} />
      </CardSection>

      <CardSection>
        <Button onPress={() => Linking.openURL(url)} >
          Buy {title} Album
        </Button>
      </CardSection>
    </Card>
  );
};

const styles = {
  imageCell: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
    marginVertical: 10,
  },
  textCell: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    marginLeft: 0,
  },
  textTitle: {
    fontSize: 24,
  },
  imageThumbnail: {
    height: 70,
    width: 70,
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null,
  },
}

export default AlbumDetail;
