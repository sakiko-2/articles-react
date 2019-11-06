import React from 'react';
import ArticlesList from '../components/ArticlesList';
import articleContent from '../components/article-content';

const ArticlesListPage = () => (
  <>
    <h1 className="title">Articles</h1>
    <ArticlesList articles={articleContent} />
  </>
);

export default ArticlesListPage;
