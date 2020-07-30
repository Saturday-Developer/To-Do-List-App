import React from 'react';
import { Card, Text, View } from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';
import { constants } from '../../utility';

const CompletedItems = ({ title, onUndo, onDelete }) => {
  return (
    <Card style={styles.card}>
      <View style={styles.left}>
        <Text>{title}</Text>
      </View>
      <View style={styles.right}>
        <FontAwesome
          name="undo"
          size={constants.sm_iconSize}
          onPress={onUndo}
        />
        <MaterialIcons
          name="delete"
          size={constants.sm_iconSize}
          onPress={onDelete}
        />
      </View>
    </Card>
  );
};

export default CompletedItems;
