import React from 'react';
import { View, Text } from 'react-native';
import Avatar from '../components/Avatar';

const AvatarScreen = () => {
  return (
    <View>
      <Avatar source={{ uri: 'https://ui-avatars.com/api/?background=random' }} size="xSmall" />
      <Avatar source={{ uri: 'https://ui-avatars.com/api/?background=random' }} size="xSmall" />
      <Avatar source={{ uri: 'https://ui-avatars.com/api/?background=random' }} size="small" />
      <Avatar source={{ uri: 'https://ui-avatars.com/api/?background=random' }} size="medium" />
      <Avatar source={{ uri: 'https://ui-avatars.com/api/?background=random' }} size="large" />
      <Avatar source={{ uri: 'https://ui-avatars.com/api/?background=random' }} size="30" />
    </View>
  );
};

export default AvatarScreen;
