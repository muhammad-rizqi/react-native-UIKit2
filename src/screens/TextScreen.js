import React from 'react';
import { View } from 'react-native';
import BodyText from '../components/BodyText';
import Heading from '../components/Heading';
import UIText from '../components/UIText';

const TextScreen = () => {
  return (
    <View>
      <Heading type="h1">Heading 1</Heading>
      <Heading type="h2">Heading 2</Heading>
      <Heading type="h3">Heading 3</Heading>
      <Heading type="h4">Heading 4</Heading>
      <Heading type="h5">Heading 5</Heading>
      <Heading type="h6">Heading 6</Heading>
      <BodyText bold italic>
        Body Text
      </BodyText>
      <BodyText small bold italic>
        Body Text
      </BodyText>
      <BodyText>Body Text</BodyText>
      <BodyText bold>Body Text</BodyText>
      <UIText>UI Text</UIText>
      <UIText bold>UI Text</UIText>
      <UIText italic>UI Text</UIText>
      <UIText large>UI Text</UIText>
      <UIText large italic>
        UI Text
      </UIText>
      <UIText large bold>
        UI Text
      </UIText>
      <UIText small>UI Text</UIText>
    </View>
  );
};

export default TextScreen;
