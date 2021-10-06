import React from 'react';
import { View, ActivityIndicator } from 'react-native';

interface Props {}

export const Load: React.FC<Props> = (props) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
      }}>
      <ActivityIndicator size="large" color="#FF6347" />
    </View>
  );
};
