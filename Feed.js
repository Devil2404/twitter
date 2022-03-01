import React, { useEffect, useState } from 'react'
import './feed.css'
import Tweetbox from './Tweetbox'
import Post from './Post'
import db from './Firebase'
function Feed() {

    const [posts, setPosts] = useState([]);
    useEffect(() => {
        db.collection('posts').onSnapshot(snapshot => {
            setPosts(snapshot.docs.map(doc => doc.data()))
        })
    }, [])

    return (
        <div className="feed">
            <div className="header">
                <h2>Home</h2>
            </div>
            <Tweetbox />
            {posts.map(post => (
                <Post
                    key={Math.floor(Math.random() * 10000)}
                    displayname={post.displayname}
                    username={post.username}
                    verified={post.verified}
                    text={post.text}
                    image={post.image}
                />
            ))}
        </div>
    )
}

export default Feed
