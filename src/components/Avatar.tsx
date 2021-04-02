import React, { FunctionComponent } from 'react'
import { Image, ImageProps, View } from 'react-native'

interface AvatarProps extends ImageProps {
  size: "xSmall" | "small" | "medium" | "large" | number
}

const Avatar: FunctionComponent<AvatarProps> = ({ size, style, ...props }) => {
  const passedProps = Array.isArray(props) ? Object.assign({}, ...props) : props
  const passedStyles = Array.isArray(style) ? Object.assign({}, ...style) : style
  const imgSize = size === "xSmall" ? 24 : size === "small" ? 48 : size === "medium" ? 72 : size === "large" ? 120 : size
  return (
    <View>
      <Image {...passedProps} style={{ width: imgSize, height: imgSize, borderRadius: imgSize / 2, ...passedStyles }} />
    </View>
  )
}

export default Avatar
