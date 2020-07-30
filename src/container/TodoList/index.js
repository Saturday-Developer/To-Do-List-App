import React, { useState, Fragment } from 'react';
import { Title, Card, View, Fab } from 'native-base';
import { FlatList } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  CompletedItems,
  Header,
  PendingItems,
  AddNewItem,
} from '../../component';
import styles from './styles';

const todoList = () => {
  const [pendingItems, setPendingItems] = useState([]);
  const [completedItems, setCompletedItems] = useState([]);
  const [modalVisibale, setModalVisible] = useState(false);
  const [newItem, setNewItem] = useState('');

  const toggleModel = () => {
    setModalVisible(!modalVisibale);
  };

  const handleCheck = (title, idx) => {
    let remainingItems = [...pendingItems];
    remainingItems.splice(idx, 1);
    setPendingItems([...remainingItems]);
    setCompletedItems([...completedItems, { title }]);
  };

  const handleDelete = (idx) => {
    let remainingItems = [...completedItems];
    remainingItems.splice(idx, 1);
    setCompletedItems([...remainingItems]);
  };

  const handleUndo = (idx, title) => {
    let remainingItems = [...completedItems];
    remainingItems.splice(idx, 1);
    setCompletedItems([...remainingItems]);
    setPendingItems([...pendingItems, { title }]);
  };

  const handleAddItem = () => {
    if (!newItem) {
      alert('Please add a new item');
      return;
    }
    setPendingItems([...pendingItems, { title: newItem }]);
    setNewItem('');
    toggleModel();
  };
  return (
    <Fragment>
      <Header title="To List App" />

      {pendingItems.length == 0 && completedItems.length == 0 ? (
        <View style={styles.centerContainer}>
          <Title style={styles.title}>Please add new todo</Title>
        </View>
      ) : (
          <Fragment>
            <Card style={styles.pendingItem} transparent>
              <Title style={styles.title}>
                {pendingItems.length == 0 && 'No '} Pending Items
            </Title>

              <FlatList
                data={pendingItems}
                style={styles.flatListItem}
                renderItem={({ item, index }) => (
                  <PendingItems
                    title={item.title}
                    onCheck={() => handleCheck(item.title, index)}
                  />
                )}
              />
            </Card>
            {completedItems.length > 0 && (
              <Card style={styles.completedItems} transparent>
                <Title style={styles.title}>Completed Items</Title>
                <FlatList
                  style={styles.flatListItem}
                  data={completedItems}
                  renderItem={({ item, index }) => (
                    <CompletedItems
                      title={item.title}
                      onUndo={() => handleUndo(index, item.title)}
                      onDelete={() => handleDelete(index)}
                    />
                  )}
                />
              </Card>
            )}
          </Fragment>
        )}
      <Fab position="bottomRight" onPress={() => toggleModel()}>
        <AntDesign name="pluscircleo" />
      </Fab>
      <AddNewItem
        visible={modalVisibale}
        onRequestClose={() => {
          setNewItem('');
          toggleModel();
        }}
        onChangeText={(text) => setNewItem(text)}
        newItem={newItem}
        addItem={() => handleAddItem()}
      />
    </Fragment>
  );
};

export default todoList;
