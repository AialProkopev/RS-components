import React from 'react';
import { CardItemType } from '../../types/CardItemType';

class Card extends React.Component<CardItemType> {
  constructor(props: CardItemType) {
    super(props);
  }
  render() {
    return (
      <div className="card">
        <img className="card__img" src={this.props.img} />
        <h3 className="card__title">{this.props.name}</h3>
        <span className="card__price">{this.props.price} $</span>
      </div>
    );
  }
}

export default Card;
