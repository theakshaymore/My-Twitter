import React from "react";
import "./Widgets.css";
import SearchIcon from "@material-ui/icons/Search";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
  TwitterMentionButton,
  TwitterHashtagButton,
} from "react-twitter-embed";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>

      <div className="widgets__widgetContainer">
        <h2>What's happening</h2>

        <TwitterTweetEmbed tweetId={"1139909185838014464"} />

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="hardik_yewale"
          options={{ height: 400 }}
        />
        <TwitterMentionButton screenName={"thisIsAkshayz"} />
        <TwitterHashtagButton tag={"thisIsAkshayz"} />

        <TwitterShareButton
          url={"https://www.facebook.com/profile.php?id=100007142521149"}
          options={{ text: "#reactjs is awesome", via: "thisIsAkshayz" }}
        />
      </div>
    </div>
  );
}

export default Widgets;
