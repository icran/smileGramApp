import React from "react";
import PropTypes from "prop-types";
import {
  View,
  Text,
  ScrollView,
  RefreshControl,
  StyleSheet
} from "react-native";
import Photo from "../../components/Photo";

const FeedScreen = props => (
  <ScrollView
    refreshControl={
      <RefreshControl 
        refreshing={props.isFetching} 
        onRefresh={props.refresh} 
        tintColor={"black"}
      />
    }
    contentContainerStyle={styles.container}
    >
    
    <View style={styles.container}>
      {props.feed &&
        props.feed.map(photo => <Photo {...photo} key={photo.id} />)}
        
    </View>
  </ScrollView>
);
// props.feed.map( 4-26 7:00 설명
// 피드는 map state to props 에서 오고 이는 리듀서에서 오고 이는 get feed 에서 온다. 
// 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  }
});

FeedScreen.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  refresh: PropTypes.func.isRequired,
  feed: PropTypes.array.isRequired
};

export default FeedScreen; 