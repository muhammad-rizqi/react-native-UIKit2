/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { colors } from '../colors/colors';

const ColorScreen = () => {
  return (
    <ScrollView>
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
        }}>
        {Object.keys(colors).map((color) => (
          <View key={color} style={{ margin: 8, width: 80 }}>
            <View
              style={{ width: 80, height: 80, borderRadius: 8, backgroundColor: colors[color] }}
            />
            <Text>{colors[color]}</Text>
            <Text>{color}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default ColorScreen;
