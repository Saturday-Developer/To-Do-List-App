import React from 'react';
import { Card, Text, View } from 'native-base';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import styles from './styles';
import { constants } from '../../utility';

const PendingItems = ({ title, onCheck }) => {
    return (
        <Card style={styles.card}>
            <View style={styles.left}>
                <Text>{title}</Text>
            </View>
            <View style={styles.right}>
                <EntypoIcon
                    name="check"
                    size={constants.sm_iconSize}
                    onPress={onCheck}
                />
            </View>
        </Card>
    );
};

export default PendingItems;
