/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-underscore-dangle */
/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import ArticleItem from './ArticleItem.jsx';
import { ArticlesWrapper, ArticleItemArea } from './StyledComponents.jsx';

const Articles = (props) => {
  const {
    game, toggleArticles, scroll, updateLikes,
  } = props;
  const { name } = game;
  const collection = game.announcements;
  collection.sort((a, b) => (new Date(b.postDate)) - (new Date(a.postDate)));

  useEffect((() => {
    const element = document.getElementById(scroll);
    element.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }), []);

  return (
    <ArticlesWrapper onClick={toggleArticles}>
      <ArticleItemArea>
        {collection.map((announcement) => (
          <ArticleItem
            game={game}
            name={name}
            announcement={announcement}
            key={announcement._id}
            updateLikes={updateLikes}
          />
        ))}
      </ArticleItemArea>
    </ArticlesWrapper>
  );
};

export default Articles;
