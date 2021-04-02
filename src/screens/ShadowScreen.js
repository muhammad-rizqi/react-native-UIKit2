/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { shadows } from '../colors/shadow';

const ShadowScreen = () => {
  return (
    <ScrollView>
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
        }}>
        {Object.keys(shadows).map((shadow) => (
          <View key={shadow} style={{ margin: 8, width: 80 }}>
            <View
              style={[
                {
                  width: 80,
                  height: 80,
                  borderRadius: 8,
                  backgroundColor: 'white',
                },
                shadows[shadow],
              ]}
            />
            <Text>{shadow}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default ShadowScreen;
