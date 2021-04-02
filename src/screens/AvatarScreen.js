import React from 'react';
import { View } from 'react-native';
import Avatar from '../components/Avatar';

const AvatarScreen = () => {
  return (
    <View>
      <Avatar
        source={{ uri: 'https://ui-avatars.com/api/?background=random' }}
        size="xSmall"
        notification
      />
      <Avatar
        source={{ uri: 'https://ui-avatars.com/api/?background=random' }}
        size="xSmall"
        notification
      />
      <Avatar
        source={{ uri: 'https://ui-avatars.com/api/?background=random' }}
        size="small"
        notification
      />
      <Avatar
        source={{ uri: 'https://ui-avatars.com/api/?background=random' }}
        size="medium"
        notification
        notificationColor="blue"
      />
      <Avatar source={{ uri: 'https://ui-avatars.com/api/?background=random' }} size="large" />
      <Avatar source={{ uri: 'https://ui-avatars.com/api/?background=random' }} size={30} />
    </View>
  );
};

export default AvatarScreen;
