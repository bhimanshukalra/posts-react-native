import {FlatList, SafeAreaView} from 'react-native';
import React, {useEffect} from 'react';
import * as actionCreator from './redux/actionCreators';
import {connect} from 'react-redux';
import {styles} from './Styles';
import {Loader} from '../../util/Loader';
import Post from './components/Post';

const PostList = ({posts, getPostList, navigation}) => {
  useEffect(() => {
    getPostList();
  }, []);

  return (
    <SafeAreaView style={styles.parent}>
      {posts.length === 0 ? <Loader /> : null}
      <FlatList
        keyExtractor={item => `${item.id}`}
        data={posts}
        initialNumToRender={20}
        // renderItem={({item, index}) => getItemView(item, index)}
        renderItem={({item, index}) => (
          <Post title={item.title} user={item.user} index={index} />
        )}
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
