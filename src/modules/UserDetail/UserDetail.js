import {SafeAreaView, Text, View} from 'react-native';
import React from 'react';
import {styles} from './Styles';

const UserDetail = ({user}) => {
  const getItemView = ({username, name, email, website, company}) => {
    return (
      <View style={styles.itemView}>
        <Text style={styles.itemText}>Username: {username}</Text>
        <Text style={styles.itemText}>Name: {name}</Text>
        <Text style={styles.itemText}>Email: {email}</Text>
        <Text style={styles.itemText}>Website: {website}</Text>
        <Text style={styles.itemText}>Company name: {company.name}</Text>
        <Text style={styles.itemText}>
          Company catch phrase: {company.catchPhrase}
        </Text>
        <Text style={styles.itemText}>Company bs: {company.bs}</Text>
      </View>
    );
  };
  return <SafeAreaView style={styles.parent}>{getItemView(user)}</SafeAreaView>;
};

export default UserDetail;
