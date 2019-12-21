import React from 'react';
import { Link } from 'react-router-dom';
import articleListStyles from './ArticlesList.module.scss';

const ArticlesList = ({ articles }) => {
  const scrollToTop = () => (window.scrollTo(0, 0));

  return (
    <>
      {articles.map((article, key) => (
        <div className={articleListStyles.container} key={key}>
          <Link
            key={key}
            to={`/article/${article.name}`}
            onClick={() => scrollToTop()}
          >
            <h3 className="subtitle">{article.title}</h3>
            <p className={articleListStyles.description}>
              {article.content[0].substring(0, 150)}
              ...
            </p>
          </Link>
        </div>
      ))}
    </>
  );
};

export default ArticlesList;
