import { useState } from 'react';
import classNames from 'classnames';
const Categories = ({ items, onClickItem }) => {
  const [active, setActive] = useState(null);
  const onSelectItem = (index) => {
    onClickItem(index);
    setActive(index);
  };
  return (
    <div className="categories">
      <ul>
        <li className={classNames(active === null ? 'active' : '')} onClick={() => setActive(null)}>
          Все
        </li>
        {items &&
          items.map((title, index) => (
            <li
              className={classNames(active === index ? 'active' : '')}
              onClick={() => onSelectItem(index)}
              key={`${title}_${index}`}>
              {title}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Categories;
