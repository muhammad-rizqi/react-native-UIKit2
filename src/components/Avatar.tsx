import React, { FunctionComponent } from 'react';
import { ColorValue, Image, ImageProps, View } from 'react-native';

interface AvatarProps extends ImageProps {
  size: 'xSmall' | 'small' | 'medium' | 'large' | number;
  notification?: boolean;
  notificationColor?: ColorValue
}

const Avatar: FunctionComponent<AvatarProps> = ({ notification, notificationColor, size, style, ...props }) => {
  const passedProps = Array.isArray(props) ? Object.assign({}, ...props) : props;
  const passedStyles = Array.isArray(style) ? Object.assign({}, ...style) : style;
  const imgSize =
    size === 'xSmall'
      ? 24
      : size === 'small'
        ? 48
        : size === 'medium'
          ? 72
          : size === 'large'
            ? 120
            : size;

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
