
import { View, Text, StyleSheet } from 'react-native';

const OnBoarding = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>OnBoarding !!</Text>
    </View>
  );
};

export default OnBoarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#C2EBFF',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0A5ED7',
  },
});
