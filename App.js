import React from 'react';
import { SafeAreaView } from 'react-native';
import { TodoList } from './src/container';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TodoList />
    </SafeAreaView>
  );
};

export default App;
