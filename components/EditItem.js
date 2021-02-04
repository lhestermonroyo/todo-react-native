import React from 'react';
import { Modal, Text } from 'react-native';

const EditItem = (props) => {
  const { visible, editItem } = props;
  return (
    <Modal animationType="slide" transparent={true} visible={visible}>
      <Text>Edit Item</Text>
    </Modal>
  )
}

export default EditItem;