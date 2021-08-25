import React, {PureComponent} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {connect} from 'react-redux';
import {styles} from '../Styles';

class Post extends PureComponent {
  render() {
    return (
      <TouchableOpacity
        style={styles.itemView}
        onPress={() =>
          Actions.postDetail({post: this.props.posts[this.props.index]})
        }>
        <Text style={[styles.itemPrimaryChild, styles.itemText]}>
          {this.props.title}
        </Text>
        <Text
          style={[styles.itemSecondaryChild, styles.itemText]}
          onPress={() =>
            Actions.user({user: this.props.posts[this.props.index].user})
          }>
          - {this.props.user.username}
        </Text>
      </TouchableOpacity>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.postListreducer.posts,
  };
};

export default connect(mapStateToProps, null)(Post);
