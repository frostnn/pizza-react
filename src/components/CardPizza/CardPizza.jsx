import { useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const CardPizza = ({ name, ImageUrl, price, sizes, dough }) => {
  const [activeType, setActiveType] = useState(0);
  const [activeDough, setDough] = useState(0);
  const onSelectType = (index, state) => state(index);

  return (
    <div className="pizza-block">
      <img className="pizza-block__image" src={ImageUrl} alt="Pizza" />
      <h4 className="pizza-block__title">{name}</h4>
      <div className="pizza-block__selector">
        <ul>
          {dough &&
            dough.map((items, i) => (
              <li
                key={`${items}_${i}`}
                className={classNames(activeDough === i ? 'active' : 'disabled')}
                onClick={() => onSelectType(i, setDough)}>
                {items}
              </li>
            ))}
        </ul>
        <ul>
          {sizes &&
            sizes.map((items, i) => (
              <li
                key={`${items}_${i}`}
                className={classNames(activeType === i ? 'active' : 'disabled')}
                onClick={() => onSelectType(i, setActiveType)}>
                {items} см.
              </li>
            ))}
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">от {price} ₽</div>
        <div className="button button--outline button--add">
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          <span>Добавить</span>
          <i>2</i>
        </div>
      </div>
    </div>
  );
};
CardPizza.propTypes = {
  name: PropTypes.string.isRequired,
  ImageUrl: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  types: PropTypes.arrayOf(PropTypes.number).isRequired, //только массив чисел
  sizes: PropTypes.arrayOf(PropTypes.number).isRequired,
};
export default CardPizza;
