/* eslint-disable react-native/no-inline-styles */
import React, { FunctionComponent } from 'react';
import { Text, TextProps } from 'react-native';

interface UITextProps extends TextProps {
  bold?: boolean,
  italic?: boolean,
  large?: boolean,
  small?: boolean,
}

const UIText: FunctionComponent<UITextProps> = ({ bold, italic, large, small, children, style, ...props }) => {

  const passedStyles = Array.isArray(style) ? Object.assign({}, ...style) : style
  const passedProps = Array.isArray(props) ? Object.assign({}, ...props) : props
  return (
    <Text
      style={{
        ...passedStyles,
        fontWeight: bold ? 'bold' : 'normal',
        fontStyle: italic ? 'italic' : 'normal',
        fontSize: small ? 10 : large ? 17 : 14,
        lineHeight: small ? 12 : large ? 22 : 21,
      }}
      {...passedProps}>
      {children}
    </Text>
  );
};

export default UIText;
