import {FlatList, SafeAreaView, Text, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import * as actionCreator from './redux/actionCreators';
import {connect} from 'react-redux';
import {styles} from './Styles';
import {Loader} from '../../util/Loader';
import {Actions} from 'react-native-router-flux';

const PostList = ({posts, getPostList, navigation}) => {
  useEffect(() => {
    getPostList();
  }, []);

  const getItemView = ({title, userId, user}, index) => (
    <TouchableOpacity
      style={styles.itemView}
      onPress={() => Actions.postDetail({post: posts[index]})}>
      <Text style={[styles.itemPrimaryChild, styles.itemText]}>{title}</Text>
      <Text
        style={[styles.itemSecondaryChild, styles.itemText]}
        onPress={() => Actions.user({user: posts[index].user})}>
        - {user.username}
      </Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.parent}>
      {posts.length === 0 ? <Loader /> : null}
      <FlatList
        keyExtractor={item => `${item.id}`}
        data={posts}
        initialNumToRender={20}
        renderItem={({item, index}) => getItemView(item, index)}
        style={styles.list}
      />
    </SafeAreaView>
  );
};

const mapStateToProps = state => {
  return {
    posts: state.postListreducer.posts,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getPostList: () => dispatch(actionCreator.getPostList()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
