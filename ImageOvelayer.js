import React from 'react';
import { TouchableOpacity, ImageBackground, Image } from 'react-native';

export default class ImageOverlayer extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { parentImageSrc, childImageSrc, parentImageStyle, onPress } = this.props;
    return (
      <TouchableOpacity onPress={onPress}>
        <ImageBackground
          source={parentImageSrc}
          imageStyle={parentImageStyle}
          resizeMode='cover'
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            width: parentImageStyle.width,
            height: parentImageStyle.height,
          }}>
          <Image
            source={childImageSrc}
            style={{
              width: parentImageStyle.width / 2,
              height: parentImageStyle.height / 2,
              backgroundColor: 'transparent',
            }} />
        </ImageBackground>
      </TouchableOpacity>
    );
  }
}
