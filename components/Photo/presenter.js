import React from "react";
import PropTypes from "prop-types";
import { View, Text, TouchableOpacity, Image, Dimensions, StyleSheet } from "react-native";
import FadeIn from "react-native-fade-in-image";

const {width,height }= Dimensions.get("window");

const Photo = props => (
  <View style={styles.photo}>
    <TouchableOpacity>
      <View style={styles.header}>
        <FadeIn>
          <Image
            source={
              props.creator.profile_image
                ? {
                    uri: props.creator.profile_image
                  }
                : require("../../assets/images/noPhoto.jpg")
            }
            style={styles.avator}
          />
        </FadeIn>
      </View>
      <View>
        <Text style={styles.author}>{props.creator.username}</Text>
        {props.locations && <Text style={styles.author}>>{props.locations}</Text>} 
      </View>
    </TouchableOpacity>
    <FadeIn>
             
      <Image source={{ uri: props.file }}  />
    </FadeIn>
    <View>
      <View>
        <Text>
          {props.creator.username}
          <Text>{props.caption}</Text>
        </Text>
      </View>
      {props.comments.length > 0 && (
        <View>
          <TouchableOpacity>
            {props.comments.length === 1 ? (
              <Text>View 1 comment</Text>
            ) : (
              <Text>View all {props.comments.length} comments</Text>
            )}
          </TouchableOpacity>
        </View>
      )}
      <Text>{props.natural_time}</Text>
    </View>
  </View>
);




const styles = StyleSheet.create({
  photo: {
      width,
      marginBottom: 10
  },
  header: {
      paddingHorizontal: 15,
      flexDirection: "row",
      paddingVertical: 15,
      alignItems: "center",
      borderBottomColor: "#bbb",
      borderBottomWidth: StyleSheet.hairlineWidth,
      flex: 1
  },
  avatar: {
      width: 40,
      height: 40,
      borderRadius: 20,
      marginRight: 10
  },
  author: {
      fontWeight: "600",
      marginBottom: 3,
      fontSize: 15
  },
  locations: {
      fontSize: 13
  },
  photoMeta: {
      paddingHorizontal: 15
  },
  comment: {
      marginTop: 5
  },
  commentAuthor: {
      marginRight: 5,
      fontWeight: "600",
      fontSize: 14
  },
  message: {
      fontWeight: "400",
      fontSize: 15
  },
  commentsLink: {
      marginTop: 5
  },
  linkText: {
      fontSize: 15,
      color: "#999"
  },
  dateText: {
      fontSize: 12,
      color: "#999",
      marginTop: 10
  }
});

// 받을 정보들 세팅 PropTypes.shape 는 무엇일까

Photo.propTypes = {
  id: PropTypes.number.isRequired,
  creator: PropTypes.shape({
    profile_image: PropTypes.string,
    username: PropTypes.string.isRequired
  }).isRequired,
  locations: PropTypes.string.isRequired,
  file: PropTypes.string.isRequired,
  like_count: PropTypes.number.isRequired,
  caption: PropTypes.string.isRequired,
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      message: PropTypes.string.isRequired,
      creator: PropTypes.shape({
        profile_image: PropTypes.string,
        username: PropTypes.string.isRequired
      }).isRequired
    })
  ).isRequired,
  natural_time: PropTypes.string.isRequired,
  is_liked: PropTypes.bool.isRequired,
  is_vertical: PropTypes.bool.isRequired
};



export default Photo;