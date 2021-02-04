import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, FlatList, Alert } from 'react-native';
import Header from './components/Header';
import AddItem from './components/AddItem';
import ListItem from './components/ListItem';
import EditItem from './components/EditItem';

const App = () => {
  const [items, setItems] = useState([
    { id: 1, name: 'Milk' },
    { id: 2, name: 'Eggs' },
    { id: 3, name: 'Bread' },
    { id: 4, name: 'Juice' },
    { id: 5, name: 'Soap' },
  ]);
  const [modalParams, setModalParams] = useState({ visible: false, editItem: null });
  const { visible, editItem } = modalParams;

  const addItem = (name) => {
    if (name) {
      setItems(prevItem => {
        return [...prevItem, { id: items.length + 1, name }]
      })
    } else {
      Alert.alert('Error', 'Please fill in the field.');
    }
  }

  const deleteItem = (id) => {
    setItems(prevItem => {
      return prevItem.filter(item => item.id != id);
    })
  }

  const toggleModal = (item) => {
    console.log('triggered')
    setModalParams(prevItem => {
      return { visible: !prevItem.visible, editItem: item }
    });
  }

  return (
    <View style={styles.container}>
      <Header title="Shopping List" />
      <AddItem addItem={addItem} />
      <EditItem toggleModal={toggleModal} visible={visible} editItem={editItem} />
      <FlatList data={items} renderItem={({ item }) => (
        <ListItem item={item} toggleModal={toggleModal} deleteItem={deleteItem} />
      )} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#505050'
  },
});

// const App = () => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>Hello World!</Text>
//       <Image source={{ uri: 'https://randomuser.me/api/portraits/women/60.jpg' }} style={styles.img} />
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center'
//   },
//   text: {
//     color: '#11AA50',
//     fontSize: 30
//   },
//   img: {
//     height: 100,
//     width: 100,
//     borderRadius: 100 / 2,
//   }
// })

export default App;