import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const AddItem = (props) => {
  const { addItem } = props;
  const [name, setName] = useState('');

  const onChange = (textValue) => {
    setName(textValue);
  }

  return (
    <View style={styles.header}>
      <TextInput placeholder="New Item..." style={styles.input} onChangeText={onChange} />
      <TouchableOpacity style={styles.btn} onPress={() => addItem(name)}>
        <Text style={styles.btnText}><Icon name="plus" size={16} /> Add Item</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    height: 60,
    padding: 15,
    fontSize: 16,
  },
  btn: {
    backgroundColor: '#202020',
    padding: 9,
    margin: 5,
  },
  btnText: {
    color: '#ffffff',
    fontSize: 16,
    textAlign: 'center'
  }
})

export default AddItem;