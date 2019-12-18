import React, { useState, useEffect } from 'react';
import ArticleList from '../components/ArticlesList';
import articleContent from '../components/article-content';
import LikeButton from '../components/LikeButton';
import Loader from '../components/Loader';
import NotFoundPage from './NotFoundPage';
import articlePageStyles from './ArticlePage.module.scss';

const ArticlePage = ({ match }) => {
  const name = match.params.name;
  const article = articleContent.find((article) => article.name === name);

  const [articleInfo, setArticleInfo] = useState();

  const otherArticles = articleContent.filter((article) => article.name !== name);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(`/api/articles/${name}`);
      const body = await result.json();
      setArticleInfo(body);
    };
    fetchData();
  }, [name]);

  const renderLikeButton = () => (
    !articleInfo
      ? <Loader />
      : (
        <LikeButton
          articleName={name}
          likes={articleInfo.likes}
          setArticleInfo={setArticleInfo}
        />
      )
  );

  if (!article) {
    return (
      <NotFoundPage />
    );
  }

  return (
    <>
      <div className={articlePageStyles.article}>
        <h1 className="title">{article.title}</h1>
        {article.content.map((paragraph, key) => (
          <p key={key} className={articlePageStyles.content}>
            {paragraph}
          </p>
        ))}
        {renderLikeButton()}
      </div>
      <ArticleList articles={otherArticles} />
    </>
  );
};

export default ArticlePage;
