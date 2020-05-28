import styles, { createGlobalStyle, keyframes } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
  margin: 0;
  padding: 0;
  font-family: Arial, Helvetica, sans-serif;
  }
`;


export const EventService = styles.div`
    display: inline-flex;
    max-width: 30rem;
    width: 18rem;
    height: 16rem;
    font-size: 2em;
    color: ghostwhite;
    border: none;
    box-shadow: -1px 1px 0.3em black;`;

export const MainContainer = styles.div`
  position: relative;
  overflow: auto;
  flex-flow: row;
  width: 100%;
  height: 100%;
`;

export const Thumbnail = styles.div`
  position: relative;
  display: flex;
  height: 70%;
`;

export const MiniTitle = styles.div`
  background: #303841;
  box-sizing: border-box;
  width: 100%;
  height: 30%;
  padding: 3%;
  font-size: 1rem;
  text-shadow: 0px 0px 5rem;
`;

export const MiniViewThumbnail = styles.img`
  position: absolute;
  object-fit: cover;
  object-position: center;
  right: 0%;
  height: -webkit-fill-available;
`;

export const AnnouncementService = styles(EventService)`
    margin-left: 0.5rem;`;

export const ArticlesWrapper = styles.div`
  background: #0d0f17f7;
  color: white;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 100;
  margin: 0 auto;
  text-align: center;
  overflow: scroll;
  padding-top: 5rem;
`;

export const ArticleItemArea = styles.div`
  width: 65vw;
  margin: 0 auto;
`;

export const OverlayFade = keyframes`
  0.0%{
      opacity: 0;
  }
  100%{
      opacity: 1;
  }
`;

export const OverlayStyle = styles.div`
  background: #14171fd4;
  font-size: 0.5em;
  position: absolute;
  top: 0;
  left: 0;
  padding-top: 40px;
  z-index: 50;
  overflow: hidden;
  width: 100%;
  height: 100%;
  color: white;
  box-sizing: border-box;
  padding: 1rem;
  cursor: pointer;
  animation: ${OverlayFade} 0.5s ease 0s 1 normal none;
  font-size: .8rem;
`;

export const OverlayCategory = styles.span`
  text-transform: uppercase;
  color: #4d9bec;
  font-weight: 400;
`;

export const ArticleItemStyle = styles.div`
  height: 50vw;
  display: grid;
  grid-template-areas:
      "thumbnail"
      "thumbnail"
      "thumbnail"
      "title"
      "body"
      "body"
      "body"
      "interactions"
      "interactions";
  font-size: 0.5em;
  color: #ffffff;
  padding-top: 3rem;
  max-height: 40rem;
  max-width: 50rem;
  margin: 0 auto;
`;

export const ArticleItemThumbnailContainer = styles.div`
  display: grid;
  grid-area: thumbnail;
  grid-row: 1 / span 3;
  align-items: center;
`;

export const ArticleItemThumbnail = styles.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

export const BlurBackgroundStyle = styles.img`
  filter: blur(5em);
  object-fit: cover;
  position: absolute;
  z-index: -5;
  width: 100%;
  height: 5rem;
  transform: scaleX(-1);
`;

export const ArticleItemTitle = styles.div`
  align-items: center;
  background: #37393f;
  display: grid;
  grid-area: title;
  grid-row: 4 / span 1;
  text-align: left;
  padding-left: 3.5em;
  box-shadow: 0px 0px 5px #1d1e21;
  z-index: 10;
  overflow: hidden;
  position: relative;
  align-content: center;
`;

export const TitleInfo = styles.div`
  font-size: 1.5em;
  color: #b3b3b3;
`;

export const TitleInfoCategory = styles.span`
  text-transform: uppercase;
  font-size: 1em;
  color: #51a7ff;
`;

export const ArticleItemBody = styles.div`
  background: #37393f;
  display: grid;
  grid-area: body;
  grid-row: 5 / span 3;
  align-items: baseline;
  text-align: left;
  padding: 2em;
  font-size: 1.75em;
  box-shadow: 0px 0px 5px #1d1e21;
  z-index: 9;
  position: relative;
  overflow: hidden;
`;

export const BlurBackground = styles.img`
  filter: blur(5em);
  object-fit: cover;
  position: absolute;
  width: 100%;
  z-index: -10;
`;

export const BlurBackgroundTitle = styles(BlurBackground)`
  z-index: -5;
  height: 5rem;
  transform: scaleX(-1);
`;

export const ArticleItemIteractions = styles.div`
  background: #3d4148;
  display: flex;
  flex-flow: row;
  grid-area: interactions;
  justify-content: flex-start;
  grid-row: 8 / span 2;
  align-items: center;
  height: 75%;
  z-index: 11;
  box-shadow: 0px 0px 5px #1d1e21;
`;

export const InteractionsInner = styles.div`
  display: inline-flex;
  flex-flow: row;
  box-sizing: content-box;
  height: 60%;
  width: 100%;
  align-items: center;
`;

export const InteractionsRatings = styles.div`
  align-items: center;
  background: #2b2d33;
  display: inline-flex;
  height: 85%;
  justify-content: space-evenly;
  width: 40%;
  font-size: 2em;
  font-weight: 700;
  color: #4d9bec;
  margin-left: 1em;
  border: 1px solid #2b598ab5;
`;

export const RateDown = styles.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: .9em;
  height: 50%;
  text-shadow: 2px 2px 5px #0c0707;
`;

export const DiscussionThumbsDown = styles.img`
  height: 1.2em;
  transform: rotate(180deg);
  cursor: pointer;
  &hover: {
    height: 1.2em;
    transform: rotate(180deg);
    cursor: pointer;
    filter: invert(30%) sepia(100%) saturate(5049%) hue-rotate(330deg) brightness(90%) contrast(100%);
  }
`;

export const RateUp = styles.div`
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1em;
  font-weight: 400;
  cursor: pointer;
  height: 50%;
  text-shadow: 2px 2px 5px #0c0707;
  padding-right: .5rem;
`;

export const InteractionsComments = styles.div`
  align-items: center;
  background: #2b2d33;
  display: inline-flex;
  height: 85%;
  justify-content: center;
  width: 20%;
  font-size: 2em;
  font-weight: 700;
  margin-left: 2em;
  border: 1px solid #2b598ab5;
`;

export const CommentCount = styles.span`
  font-size: 1em;
  color: #4d9bec;
  padding-right: 1rem;
`;

export const InteractionsShare = styles.div`
  display: inline-flex;
  flex-flow: row;
  background: #2b2d33;
  height: 85%;
  width: 15%;
  align-items: center;
  justify-content: space-evenly;
  margin-left: 12em;
  margin-right: 2em;
  cursor: pointer;
  border: 1px solid #2b598ab5;
  position: relative;
`;

export const ShareText = styles.span`
  color: #ffffff;
  font-size: 2em;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 400;
  cursor: pointer;
  height: 50%;
  text-shadow: 2px 2px 5px #0c0707;
  padding-right: .5rem;
`;

export const ShareLink = styles.div`
  position: absolute;
  top: -3rem;
  width: 15rem;
  color: white;
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-template-areas: "link button";
  align-content: center;
  background: #2b2d32;
  height: 2rem;
  border: 1px solid #274d73;
  font-size: 1.5em;
`;

export const Link = styles.div`
  display: flex;
  align-items: center;
  grid-area: link;
  justify-content: center;
`;

export const Copy = styles.button`
  grid-area: button;
  background: #4d9bec;
  margin-right: 10%;
  font-weight: 700;
  height: 1.75em;
  border-radius: 0.75em;
  width: 5em;
  border: none;
  color: white;
`;

export const DiscussText = styles.span`
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1em;
  font-weight: 400;
  cursor: pointer;
  height: 50%;
  text-shadow: 2px 2px 5px #0c0707;
  padding-right: .5rem;
`;

export const CopyText = styles.span`
  font-size: 0.7em;
  align-content: center;
  display: grid;
`;

export const Heading2 = styles.h2`
  background-image: url(https://steamstore-a.akamaihd.net/public/images/v6/maincol_gradient_rule.png);
  background-position: left bottom;
  background-repeat: no-repeat no-repeat;
  color: #fff;
  font-family: "Motiva Sans", sans-serif;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 2px;
  line-height: 26px;
  margin: 0 0 10px;
  padding: 2px 0 0;
  text-transform: uppercase;
`;
