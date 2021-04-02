/* eslint-disable react-native/no-inline-styles */
import React, { FunctionComponent } from 'react';
import { Text, TextProps, TextStyle } from 'react-native';

interface BodyTextProps extends TextProps {
  bold?: boolean, italic?: boolean, small?: boolean,
}

const BodyText: FunctionComponent<BodyTextProps> = ({ bold, italic, small, children, style, ...props }) => {
  const passedStyles = Array.isArray(style) ? Object.assign({}, ...style) : style
  const passedProps = Array.isArray(props) ? Object.assign({}, ...props) : props
  return (
    <Text
      {...passedProps}
      style={{
        fontWeight: bold ? 'bold' : 'normal',
        fontStyle: italic ? 'italic' : 'normal',
        fontSize: small ? 10 : 14,
        lineHeight: small ? 12 : 21,
        ...passedStyles
      }}
    >
      {children}
    </Text>
  );
};

export default BodyText;
