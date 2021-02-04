import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const ListItem = (props) => {
  const { item, toggleModal, deleteItem } = props;
  return (
    <TouchableOpacity style={styles.listItem}>
      <View style={styles.listItemView}>
        <Text style={styles.listItemName}>{item.name}</Text>
        <View style={styles.listBtnGroup}>
          <Icon style={styles.listBtn} name="pencil" size={16} color={'#ffffff'} onPress={() => toggleModal(item)} />
          <Icon style={styles.listBtn} name="remove" size={16} color={'#ffffff'} onPress={() => deleteItem(item.id)} />
        </View>
      </View>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  listItem: {
    padding: 15,
    backgroundColor: '#303030',
    borderBottomColor: '#202020',
    borderBottomWidth: 1
  },
  listItemView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  listItemName: {
    color: '#ffffff',
    fontSize: 16
  },
  listBtnGroup: {
    flexDirection: 'row'
  },
  listBtn: {
    paddingHorizontal: 12,
  }
})

export default ListItem;