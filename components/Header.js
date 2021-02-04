import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = (props) => {
  const { title } = props;
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    height: 60,
    padding: 15,
    backgroundColor: '#202020',
  },
  title: {
    color: '#ffffff',
    fontSize: 23,
    textAlign: 'center'
  }
})

export default Header;