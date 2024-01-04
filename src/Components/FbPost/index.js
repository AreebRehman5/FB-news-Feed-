// FbPosts.js

import React, { useState } from 'react';
import FbImageLibrary from 'react-fb-image-grid';
import './style.css';

function FbPosts(props) {
    const { thumbnail, brand, description, images } = props.postObj;

    const [likeCount, setLikeCount] = useState(0);
    const [commentCount, setCommentCount] = useState(0);
    const [shareCount, setShareCount] = useState(0);
    const [selectedEmoji, setSelectedEmoji] = useState(null);
    const [showEmojis, setShowEmojis] = useState(false);
    const emojisToShow = ['😍', '👍', '❤️', '😆', '😲', '😢', '😠'];

    const LikeClick = () => {
        setLikeCount(likeCount + 1);
    };

    const CommentClick = () => {
        setCommentCount(commentCount + 1);
    };

    const ShareClick = () => {
        setShareCount(shareCount + 1);
    };

    const EmojiSelect = (emoji) => {
        setSelectedEmoji(emoji);
        setShowEmojis(false); // Hide emojis on selection
    };

    const showEmojisOnHover = () => {
        setShowEmojis(true);
    };

    return (
   
        <div className="fb-post">
            <div className="fb-post-content">
                <img className="fb-thumbnail" src={thumbnail} alt="thumbnail" />
                <span className="fb-brand">{brand}</span>
                <div>
                    <span className="fb-description">{description}</span>
                </div>
                <div className="fb-post-grid">
                    <FbImageLibrary images={images} />
                </div>
                <div className="fb-image-count">+{images.length} more</div>
            </div>
            <div className="fb-counts">
                <span className='counts'>{likeCount} Likes {selectedEmoji}</span>
                <span className='counts'>{commentCount} Comments</span>
                <span className='counts'>{shareCount} Shares</span>
            </div>

            <div className="fb-options">
                <button onClick={LikeClick} onMouseOver={showEmojisOnHover}>
                    <span><i className="fa-solid fa-thumbs-up"></i></span>
                    Like
                    {showEmojis && (
                        <span className="emoji-popup">
                            {emojisToShow.map((emoji, index) => (
                                <span key={index} onClick={() => EmojiSelect(emoji)}>
                                    {emoji}
                                </span>
                            ))}
                        </span>
                    )}
                </button>
                <button onClick={CommentClick}>
                    <span><i className="fa-regular fa-comment"></i></span>
                    Comment
                </button>
                <button onClick={ShareClick}>
                    <span><i className="fa-solid fa-share-nodes"></i></span>
                    Share
                </button>
            </div>
        </div>
    );
}

export default FbPosts;
