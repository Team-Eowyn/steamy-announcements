/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
import React, { useState } from 'react';

import Overlay from './Overlay.jsx';
import {
  MainContainer,
  Thumbnail,
  MiniTitle,
  MiniViewThumbnail,
} from './StyledComponents.jsx';

const Announcements = (props) => {
  const [hover, setHover] = useState(false);
  const { game, toggleArticles, item } = props;

  const renderOverlay = () => {
    setHover(true);
  };

  const unMountOverlay = () => {
    setHover(false);
  };

  const weekdays = {
    0: 'Sunday',
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday',
  };

  const months = {
    1: 'January',
    2: 'February',
    3: 'March',
    4: 'April',
    5: 'May',
    6: 'June',
    7: 'July',
    8: 'August',
    9: 'September',
    10: 'October',
    11: 'November',
    12: 'December',
  };

  const parseDate = (date) => {
    const parsed = new Date(date);
    const day = weekdays[parsed.getDay()].slice(0, 3);
    const month = months[parsed.getMonth()];
    const monthDay = parsed.getDate();
    const year = parsed.getFullYear();
    const time = parsed.toLocaleString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
      timezone: 'PDT',
      timeZoneName: 'short',
    });
    return `${day}, ${month} ${monthDay}, ${year} ${time}`;
  };


  // DOES NOT RENDER UNTIL THE INITIAL GET REQUEST IS COMPLETE
  if (game.announcements === undefined) {
    return (<span className="empty"> </span>);
  }

  return (
    <MainContainer
      onMouseOver={renderOverlay}
      onFocus={renderOverlay}
      onMouseEnter={renderOverlay}
      onMouseLeave={unMountOverlay}
    >
      <Thumbnail>
        <MiniViewThumbnail src={item.thumbnailUrl} alt="" />
      </Thumbnail>
      <MiniTitle>
        { item.title }
        <br />
        <span style={{ fontSize: '0.8em', color: 'darkgray' }}>{parseDate(item.postDate)}</span>
      </MiniTitle>
      { (hover) ? <Overlay item={item} toggleArticles={toggleArticles} /> : null }
    </MainContainer>
  );
};

export default Announcements;
