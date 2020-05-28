/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { mount, shallow, render } from 'enzyme';
import App from '../client/components/App';
import Announcements from '../client/components/Announcements';
import Overlay from '../client/components/Overlay';
import Articles from '../client/components/Articles';
import ArticleItem from '../client/components/ArticleItem';

const gameData = require('./game.js');

const { game, eventItem, announcementItem } = gameData;
const { name } = game;

describe('App', () => {
  it('should render the App component', () => {
    const component = mount(<App />);
    expect(component.find('#App-container').exists()).toBe(true);
    component.unmount();
  });

  it('should render the App component correctly with an announcement item', () => {
    const component = shallow(<App />);
    expect(component.find('.events').exists()).toBe(true);
    expect(component.find('.announcements').exists()).toBe(true);
    expect(component.find('#Announcements').exists()).toBe(true);
  });
});

describe('Announcements', () => {
  it('should render the Announcements component correctly with an event item', () => {
    const component = shallow(<Announcements game={game} item={eventItem} />);
    expect(component.find('#main-container').exists()).toBe(true);
  });

  it('should render the Announcements component with an empty game object', () => {
    const component = shallow(<Announcements game={{}} item={eventItem} />);
    expect(component.find('.empty').exists()).toBe(true);
  });
});

describe('Overlay', () => {
  it('should render the Overlay component correctly with props', () => {
    const component = shallow(<Overlay item={eventItem} />);
    expect(component.find('#overlay').exists()).toBe(true);
  });
});

describe('Articles', () => {
  it('should render the Articles component correctly with props', () => {
    const component = shallow(<Articles game={game} item={announcementItem} />);
    expect(component.find('#articles').exists()).toBe(true);
  });
});

describe('ArticleItem', () => {
  it('should render the ArticleItem component correctly with props', () => {
    const component = shallow(<ArticleItem
      game={game}
      name={name}
      announcement={announcementItem}
    />);
    expect(component.find('#article-item').exists()).toBe(true);
  });

  it('should not unmount article item when clicked', () => {
    const component = shallow(<ArticleItem
      game={game}
      name={name}
      announcement={announcementItem}
    />);
    component.find('.article-item-body').simulate('click');
    expect(component.find('#article-item').exists()).toBe(true);
  });

  it('should affect like count when disliked', () => {
    let wasCalled = false;
    const foo = () => {
      wasCalled = true;
    };
    const component = shallow(<ArticleItem
      game={game}
      name={name}
      announcement={announcementItem}
      updateLikes={foo}
    />);
    component.find('#discussion-thumbs-down').simulate('click');
    expect(wasCalled).toBe(true);
  });

  it('should affect like count when liked', () => {
    let wasCalled = false;
    const foo = () => {
      wasCalled = true;
    };
    const component = shallow(<ArticleItem
      game={game}
      name={name}
      announcement={eventItem}
      updateLikes={foo}
    />);
    component.find('#rate-up').simulate('click');
    expect(wasCalled).toBe(true);
  });
});
