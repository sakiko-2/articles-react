import React, { useState, useEffect } from 'react';
import ArticleList from '../components/ArticlesList';
import articleContent from '../components/article-content';
import LikeButton from '../components/LikeButton';
import NotFoundPage from '../pages/NotFoundPage';

const ArticlePage = ({ match }) => {
  const name = match.params.name;
  const article = articleContent.find(article => article.name === name);
  
  const [articleInfo, setArticleInfo] = useState({ likes: 0 });
  
  const otherArticles = articleContent.filter(article => article.name !== name);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(`/api/articles/${name}`);
      const body = await result.json();
      setArticleInfo(body);
    };
    fetchData();
  }, [name]);

  if (!article) {
    return (
      <NotFoundPage />
    );
  }

  return (
    <>
      <h1 className="title">{article.title}</h1>
      {article.content.map((paragraph, key) => (
        <p key={key}>{paragraph}</p>
      ))}
      <LikeButton
        articleName={name}
        likes={articleInfo.likes}
        setArticleInfo={setArticleInfo}
      />
      <ArticleList articles={otherArticles} />
    </>
  );
};

export default ArticlePage;
