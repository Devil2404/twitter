import React from 'react'
import './post.css'
function Post({
    displayname,
    username,
    verified,
    text,
    image
}) {
    return (
        <div className="post">
            <div className="postdp">
                <i className="fas fa-user-tie avatar"></i>
            </div>
            <div className="postbody">
                <div className="postheader">
                    <div className="headertxt">
                        <h3>
                            {displayname}{''}
                            {
                                verified &&
                                <i className="fas fa-check-circle"></i>
                            }
                            <span>{username}</span>
                        </h3>
                    </div>
                </div>
                <div className="postcontent">
                    <p>{text}</p>
                    <div className="img">
                        <img src={image} alt="" />
                    </div>
                </div>
                <div className="postfooter">
                    <i className="far fa-comment"></i>
                    <i className="fas fa-retweet"></i>
                    <i className="far fa-heart"></i>
                    <i className="fas fa-share"></i>
                </div>
            </div>
        </div>
    )
}

export default Post
