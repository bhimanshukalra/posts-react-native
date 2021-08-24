import { FlatList, SafeAreaView, Text, View } from "react-native";
import { connect } from "react-redux";
import React, { useEffect } from "react";
import { styles } from "./Styles";
import * as actionCreator from "./redux/actionCreators";
import { Loader } from "../../util/Loader";

const PostDetail = ({ post, comments, getCommentList }) => {
  useEffect(() => {
    getCommentList(post.id);
  }, []);

  getItemView = ({ name, body, email }) => (
    <View style={styles.itemView}>
      <Text
        style={styles.itemText}
      >{`Name: ${name}\nBody: ${body}\nEmail: ${email}`}</Text>
    </View>
  );

  getCommentsView = () => (
    <View style={styles.listParent}>
      <Text style={styles.heading}>Comments:</Text>
      <FlatList
        keyExtractor={(item) => `${item.id}`}
        data={comments}
        initialNumToRender={20}
        renderItem={({ item }) => getItemView(item)}
      />
    </View>
  );
  getPostView = () => (
    <View style={styles.itemView}>
      <Text style={styles.itemText}>{post.title}</Text>
      <View>
        <Text style={[styles.itemText, styles.itemSecondaryChild]}>
          - {post.user.username}
        </Text>
      </View>
    </View>
  );
  return (
    <SafeAreaView style={styles.parent}>
      <View style={styles.wrapper}>
        {getPostView()}
        {comments.length == 0 ? <Loader /> : getCommentsView()}
      </View>
    </SafeAreaView>
  );
};

const mapStateToProps = (state) => {
  return {
    comments: state.postDetailReducer.comments,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCommentList: (id) => dispatch(actionCreator.getCommentList(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail);
