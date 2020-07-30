import React from 'react';
import { View, Modal } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { color, constants } from '../../utility';
import { Form, Item, Label, Input, Button, Text } from 'native-base';
import styles from './styles';

const addNewItem = ({
  visible,
  onRequestClose,
  newItem,
  addItem,
  onChangeText,
}) => {
  return (
    <Modal
      animated="slide"
      transparent={true}
      visible={visible}
      onRequestClose={() => onRequestClose()}>
      <View style={styles.centerContainer}>
        <View style={styles.container}>
          <AntDesign
            name={'closecircleo'}
            size={constants.md_iconSize}
            color={color.WHITE}
            onPress={() => onRequestClose()}
            style={styles.crossIcon}
          />
          <Form>
            <Item floatingLabel style={styles.formItem}>
              <Label style={styles.formLabel}>Add Item</Label>
              <Input
                style={styles.formLabel}
                onChangeText={(text) => onChangeText(text)}
                value={newItem}
              />
            </Item>
            <Button primary style={styles.btn} onPress={addItem}>
              <Text> Add </Text>
            </Button>
          </Form>
        </View>
      </View>
    </Modal>
  );
};

export default addNewItem;
