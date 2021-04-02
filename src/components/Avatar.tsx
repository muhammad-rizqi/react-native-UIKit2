import React, { FunctionComponent } from 'react';
import { ColorValue, Image, ImageProps, View } from 'react-native';

interface AvatarProps extends ImageProps {
  size: 'xSmall' | 'small' | 'medium' | 'large' | number;
  notification?: boolean;
  notificationColor?: ColorValue
}

const sizeValue = { xSmall: 24, small: 48, medium: 72, large: 120 }

const Avatar: FunctionComponent<AvatarProps> = ({ notification, notificationColor, size, style, ...props }) => {
  const passedProps = Array.isArray(props) ? Object.assign({}, ...props) : props;
  const passedStyles = Array.isArray(style) ? Object.assign({}, ...style) : style;
  const imgSize = typeof size === 'number' ? size : sizeValue[size]

  return (
    <View style={notification && {
      padding: 4,
      borderWidth: 2,
      borderColor: notificationColor || '#000',
      width: imgSize + 6,
      height: imgSize + 6,
      borderRadius: (imgSize + 6) / 2,
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <Image
        {...passedProps}
        style={{ width: imgSize, height: imgSize, borderRadius: imgSize / 2, ...passedStyles }}
      />
    </View>
  );
};

export default Avatar;
