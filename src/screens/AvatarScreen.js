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
        notificationColor="#00676D"
      />
      <Avatar
        source={{ uri: 'https://ui-avatars.com/api/?background=random' }}
        size="xSmall"
        notification
        notificationColor="#00676D"
      />
      <Avatar
        source={{ uri: 'https://ui-avatars.com/api/?background=random' }}
        size="small"
        notificationColor="#00676D"
        notification
      />
      <Avatar
        source={{ uri: 'https://ui-avatars.com/api/?background=random' }}
        size="medium"
        notification
        notificationColor="#00676D"
        iconColor="white"
        buttonColor="#17B582"
      />
      <Avatar
        source={{ uri: 'https://ui-avatars.com/api/?background=random' }}
        size="large"
        notificationColor="#00676D"
        iconColor="white"
        buttonColor="#17B582"
        iconName="camera"
      />
      <Avatar source={{ uri: 'https://ui-avatars.com/api/?background=random' }} />
    </View>
  );
};

export default AvatarScreen;
