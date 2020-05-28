/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable import/extensions */
/* eslint-disable no-underscore-dangle */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import {
  ArticleItemStyle,
  ArticleItemThumbnailContainer,
  ArticleItemThumbnail,
  ArticleItemTitle,
  BlurBackgroundStyle,
  TitleInfo,
  TitleInfoCategory,
  ArticleItemBody,
  BlurBackground,
  ArticleItemIteractions,
  InteractionsInner,
  InteractionsRatings,
  DiscussText,
  DiscussionThumbsDown,
  RateDown,
  RateUp,
  InteractionsComments,
  CommentCount,
  InteractionsShare,
  ShareText,
  ShareLink,
  Link,
  Copy,
  CopyText,
} from './StyledComponents.jsx';

const s3img = 'https://steamy-announcements.s3.us-east-2.amazonaws.com/img/';

const ArticleItem = (props) => {
  const {
    announcement, game, name, updateLikes,
  } = props;
  const {
    rateUp, rateDown, likes, commentCount,
  } = announcement;

  const rateDownStyle = {
    filter: 'none',
  };
  const rateUpStyle = {
    height: '1.2em',
    filter: 'none',
  };

  if (rateDown === true) {
    rateDownStyle.filter = 'invert(30%) sepia(100%) saturate(5049%) hue-rotate(330deg) brightness(90%) contrast(100%)';
  }

  if (rateUp === true) {
    rateUpStyle.filter = 'invert(7%) sepia(55%) saturate(3000%) hue-rotate(70deg) brightness(90%) contrast(100%)';
  }

  const weekdays = {
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday',
    7: 'Sunday',
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

  const day = weekdays[new Date(announcement.postDate).getDay()];
  const month = months[new Date(announcement.postDate).getMonth()];
  const monthDay = new Date(announcement.postDate).getDate();

  const stopBubble = (e) => {
    e.stopPropagation();
  };

  const updateRate = (action) => {
    if (action === 'like') {
      if (rateUp === true) { // reset like to neutral
        updateLikes({ rateUp: 'reset', rateDown: null }, game.gameNumber, announcement._id);
      }
      if (rateUp === null || rateUp === false) {
        if (rateDown === null) {
          updateLikes({ rateUp: true, rateDown: null }, game.gameNumber, announcement._id);
        }
        if (rateDown === true) {
          updateLikes({ rateUp: true, rateDown: 'doubleReset' }, game.gameNumber, announcement._id);
        }
      }
    }

    if (action === 'dislike') {
      if (rateDown === true) { // reset dislike to neutral
        updateLikes({ rateUp: null, rateDown: 'reset' }, game.gameNumber, announcement._id);
      }
      if (rateDown === null || rateDown === false) {
        if (rateUp === null) {
          updateLikes({ rateUp: null, rateDown: true }, game.gameNumber, announcement._id);
        }
        if (rateUp === true) {
          updateLikes({ rateUp: 'doubleReset', rateDown: true }, game.gameNumber, announcement._id);
        }
      }
    }
  };

  const like = () => {
    updateRate('like');
  };

  const dislike = () => {
    updateRate('dislike');
  };

  const [showShare, setShowShare] = useState(false);

  const toggleShare = () => {
    setShowShare(!showShare);
  };

  const copyToClipBoard = () => {
    const el = document.createElement('textarea');
    el.value = announcement.url;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  };

  return (
    <ArticleItemStyle onClick={stopBubble}>
      <ArticleItemThumbnailContainer>
        <ArticleItemThumbnail alt="thumbnail" src={announcement.thumbnailUrl} />
      </ArticleItemThumbnailContainer>
      <ArticleItemTitle>
        <BlurBackgroundStyle alt="blur background" src={announcement.thumbnailUrl} />
        <TitleInfo>
          <TitleInfoCategory>
            {announcement.category}
          </TitleInfoCategory>
              &nbsp;by
          {' '}
          { name }
            &nbsp;
          <span style={{ color: '#e2e2e2' }}>POSTED</span>
            &nbsp;
          {day}
          ,
          {' '}
          {month}
          {' '}
          {monthDay}
        </TitleInfo>
        <span style={{ fontSize: '3em' }}>{announcement.title}</span>
      </ArticleItemTitle>
      <ArticleItemBody>
        <BlurBackground src={announcement.thumbnailUrl} id={announcement._id} />
        {announcement.body}
      </ArticleItemBody>
      <ArticleItemIteractions>
        <InteractionsInner>
          <InteractionsRatings>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img src={`${s3img}thumbs-up-blue.png`} alt="" style={{ display: 'inline-flex', height: '1.5em' }} />
              <div style={{ marginLeft: '5%' }}>
                {likes}
              </div>
            </div>
            <div style={{ display: 'inline-flex', width: '60%', justifyContent: 'space-evenly' }}>
              <RateUp onClick={like}>
                <img
                  src={`${s3img}discussion-thumbs-up.png`}
                  alt=""
                  style={rateUpStyle}
                />
                &nbsp;Rate Up
              </RateUp>
              <RateDown>
                <DiscussionThumbsDown
                  src={`${s3img}discussion-thumbs-up.png`}
                  alt=""
                  style={rateDownStyle}
                  onClick={dislike}
                />
              </RateDown>
            </div>
          </InteractionsRatings>
          <InteractionsComments>
            <img
              src={`${s3img}blue-bubble.png`}
              alt=""
              style={{
                display: 'inline-flex',
                height: '1.5em',
                paddingLeft: '.5rem',
              }}
            />
            &nbsp;
            <CommentCount>
              {commentCount}
            </CommentCount>
            <DiscussText>Discuss</DiscussText>
          </InteractionsComments>
          <InteractionsShare onClick={toggleShare}>
            <img src={`${s3img}share-logo.png`} alt="" style={{ display: 'inline-flex', height: '3em' }} />
            <ShareText>Share</ShareText>
            {(showShare) ? (
              <ShareLink>
                <Link>{announcement.url}</Link>
                <Copy type="submit" onClick={copyToClipBoard}><CopyText>Copy link</CopyText></Copy>
              </ShareLink>
            ) : null}
          </InteractionsShare>
        </InteractionsInner>
      </ArticleItemIteractions>
    </ArticleItemStyle>
  );
};

export default ArticleItem;
