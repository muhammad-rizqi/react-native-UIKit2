import React, { FunctionComponent } from 'react';
import { Text, StyleSheet, TextProps } from 'react-native';

interface HeadingProps extends TextProps {
  type: 'h1' | "h2" | "h3" | "h4" | "h5" | "h6"
}

const Heading: FunctionComponent<HeadingProps> = ({ type, style, children, ...props }) => {
  const passedStyles = Array.isArray(style) ? Object.assign({}, ...style) : style
  const passedProps = Array.isArray(props) ? Object.assign({}, ...props) : props
  return (
    <Text style={[{ ...passedStyles }, styles[type]]} {...passedProps}>
      {children}
    </Text>
  );
};

export default Heading;

const styles = StyleSheet.create({
  h1: { fontSize: 43, lineHeight: 56, fontWeight: 'bold' },
  h2: { fontSize: 36, lineHeight: 40, fontWeight: 'bold' },
  h3: { fontSize: 24, lineHeight: 28, fontWeight: 'bold' },
  h4: { fontSize: 16, lineHeight: 24, fontWeight: '600' },
  h5: { fontSize: 14, lineHeight: 21, fontWeight: '500' },
  h6: { fontSize: 12, lineHeight: 18, fontWeight: '600' },
});
