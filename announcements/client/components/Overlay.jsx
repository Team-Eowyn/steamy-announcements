/* eslint-disable import/extensions */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import React from 'react';
import { OverlayStyle, OverlayCategory } from './StyledComponents.jsx';

const Overlay = (props) => {
  const { item, toggleArticles } = props;
  const { category } = item;

  const loadPage = () => {
    toggleArticles(item._id);
  };

  return (
    <OverlayStyle onClick={loadPage}>
      <OverlayCategory>
        {category}
      </OverlayCategory>
      <br />
      <br />
      {(item.body.length > 500)
        ? `${item.body.slice(0, 500)} ...`
        : item.body }
    </OverlayStyle>
  );
};

export default Overlay;
