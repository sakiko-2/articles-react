import React from 'react';
import ArticleList from '../components/ArticlesList';
import NotFoundPage from '../pages/NotFoundPage';
import articleContent from '../components/article-content';

const ArticlePage = ({ match }) => {
  const name = match.params.name;
  const article = articleContent.find(article => article.name === name);
  const otherArticles = articleContent.filter(article => article.name !== name);

  if (!article) {
    return (
      <NotFoundPage />
    );
  }

  return (
    <>
      <h1>{article.title}</h1>
      {article.content.map((paragraph, key) => (
        <p key={key}>{paragraph}</p>
      ))}
      <ArticleList articles={otherArticles} />
    </>
  );
};

export default ArticlePage;
