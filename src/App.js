import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArticlePage from './pages/ArticlePage';
import ArticlesListPage from './pages/ArticlesListPage';
import NotFoundPage from './pages/NotFoundPage';
import Layout from './components/Layout';
import './App.scss';

function App() {
  return (
    <Router>
      <div className="App">
        <Layout>
          <Switch>
            <Route path="/" component={HomePage} exact />
            <Route path="/about" component={AboutPage} />
            <Route path="/articles-list" component={ArticlesListPage} />
            <Route path="/article/:name" component={ArticlePage} />
            <Route component={NotFoundPage} />
          </Switch>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
