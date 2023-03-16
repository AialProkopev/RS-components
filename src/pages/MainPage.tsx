import React from 'react';
import SearchBar from '../components/SearchBar';
import Card from '../components/Card';
import { CardItemType } from '../types/CardItemType';
import { cards } from '../data/cards';

class MainPage extends React.Component {
  render() {
    return (
      <div className="main-page">
        <SearchBar />
        <div className="main-page__cards">
          {cards.map((item: CardItemType) => (
            <Card key={item.id} id={item.id} name={item.name} img={item.img} price={item.price} />
          ))}
        </div>
      </div>
    );
  }
}

export default MainPage;
