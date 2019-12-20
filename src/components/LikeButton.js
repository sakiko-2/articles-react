import React from 'react';
import { Heart } from 'react-feather';
import likeButtonStyles from './LikeButton.module.scss';

const LikeButton = ({ articleName, likes, setArticleInfo }) => {
  const likeArticle = async () => {
    const result = await fetch(`/api/articles/${articleName}/like`, {
      method: 'post',
    });
    const body = await result.json();
    setArticleInfo(body);
  };

  return (
    <div className={likeButtonStyles.container}>
      <span className={likeButtonStyles.like}>
        <Heart size={16} onClick={() => likeArticle()} />
      </span>
      <span className={likeButtonStyles.count}>{likes}</span>
    </div>
  );
};

export default LikeButton;
