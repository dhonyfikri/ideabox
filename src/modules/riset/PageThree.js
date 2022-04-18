import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const PageThree = () => {
  return (
    <View style={styles.page}>
      <Text>PageThree</Text>
    </View>
  );
};

export default PageThree;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
