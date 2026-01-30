import React from 'react';
import { View, StyleSheet } from 'react-native';

const DotsIndicator = ({ totalDots = 6, activeIndex }) => {
  return (
    <View style={styles.container}>
      {Array.from({ length: totalDots }).map((_, index) => (
        <View
          key={index}
          style={[
            styles.dot,
            index === activeIndex && styles.activeDot,
          ]}
        />
      ))}
    </View>
  );
};

export default DotsIndicator;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
  },
  dot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: '#BFDDF2',
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: '#0073AB',
    width: 10,
    
    
  },
});
