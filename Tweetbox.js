import React, { useState } from 'react'
import './feed.css'
import db from './Firebase';
function Tweetbox() {
    const [tweetmsg, setTweetmsg] = useState("");
    const [tweetimg, setTweetimg] = useState("");
    const sendTweet = e => {
        e.preventDefault();
        db.collection('posts').add(
            {
                displayname: "Unknown",
                username: "Unknown",
                verified: false,
                text: tweetmsg,
                image: tweetimg
            }
        )
        setTweetmsg("");
        setTweetimg("");
    }
    return (
        <div className="tweetbox">
            <form >
                <div className="inputTweet">
                    <i className="fas fa-user-tie avatar"></i>
                    <input
                        onChange={e => setTweetmsg(e.target.value)}
                        type="text"
                        placeholder="What's happening ?"
                        value={tweetmsg}
                    />
                </div>
                <input
                    onChange={e => setTweetimg(e.target.value)}
                    value={tweetimg}
                    type="text"
                    placeholder="Optional: Enter image url"
                    className="inputImg" />
                <button
                    type="submit"
                    onClick={sendTweet}
                    className="tweetButton">
                    Tweet
                </button>
            </form>
        </div>
    )
}

export default Tweetbox
