import React, { FunctionComponent } from 'react';
import { Image, ImageProps, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface AvatarProps extends ImageProps {
  size: 'xSmall' | 'small' | 'medium' | 'large' | number;
  notification?: boolean;
  notificationColor?: string;
  buttonColor?: string;
  iconColor?: string;
}

const sizeValue = { xSmall: 24, small: 48, medium: 72, large: 120 };
const iconSizeValue = { xSmall: 20, small: 20, medium: 24, large: 38 };

const Avatar: FunctionComponent<AvatarProps> = ({
  notification,
  notificationColor,
  size = "medium",
  style,
  iconColor,
  buttonColor,
  ...props
}) => {
  const passedProps = Array.isArray(props) ? Object.assign({}, ...props) : props;
  const passedStyles = Array.isArray(style) ? Object.assign({}, ...style) : style;
  const imgSize = typeof size === 'number' ? size : sizeValue[size];
  const iconSize = typeof size === 'number' ? 38 : iconSizeValue[size];

  return (
    <View
      style={{
        position: 'relative',
        width: imgSize + 6,
        height: imgSize + 6,
      }}>
      <View
        style={
          notification && {
            padding: 4,
            borderWidth: 2,
            borderColor: notificationColor || '#000',
            width: imgSize + 6,
            height: imgSize + 6,
            borderRadius: (imgSize + 6) / 2,
            justifyContent: 'center',
            alignItems: 'center',
          }
        }>
        <Image
          {...passedProps}
          style={{ width: imgSize, height: imgSize, borderRadius: imgSize / 2, ...passedStyles }}
        />
      </View>
      <TouchableOpacity
        style={{
          width: iconSize,
          height: iconSize,
          borderRadius: iconSize / 2,
          position: 'absolute',
          bottom: 0,
          right: 0,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: buttonColor || '#17B582',
        }}>
        <Icon name="plus" color={iconColor || 'white'} size={iconSize / 2} />
      </TouchableOpacity>
    </View>
  );
};

export default Avatar;
