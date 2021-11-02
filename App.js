/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {Router, Scene, Stack} from 'react-native-router-flux';
import PostDetail from './src/modules/PostDetail/PostDetail';
import PostList from './src/modules/Posts/PostList';
import UserList from './src/modules/UserDetail/UserDetail';
import {navigationBarBg} from './src/util/Colors';
export default function App() {
  return (
    <Router>
      <Stack
        key="rootStack"
        navigationBarStyle={{backgroundColor: navigationBarBg}}>
        <Scene
          key="posts"
          initial
          component={PostList}
          title="Posts"
          headerMode="none"
        />
        <Scene
          key="user"
          component={UserList}
          title="User"
          renderLeftButton={
            <Text onPress={} style={styles.back}>
              {'<-'}
            </Text>
          }
        />
        <Scene
          key="postDetail"
          component={PostDetail}
          title="Post"
          renderLeftButton={
            <Text onPress={} style={styles.back}>
              {'<-'}
            </Text>
          }
        />
      </Stack>
    </Router>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  back: {
    marginStart: 10,
    fontSize: 20,
  },
});
