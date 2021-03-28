import { useState } from 'react';
import classNames from 'classnames';
const Categories = ({ items }) => {
  const [active, setActive] = useState(null);
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
              onClick={() => setActive(index)}
              key={`${title}_${index}`}>
              {title}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Categories;
