import CardPizza from '../components/CardPizza/CardPizza';
import Categories from '../components/Categories';
import Sort from '../components/Sort';

const Home = ({ items }) => {
  return (
    <div className="container">
      <div className="content__top">
        <Categories items={[`Мясные`, `Вегетарианская`, `Гриль`, `Острые`, `Закрытые`]} />
        <Sort sort={[`популярности`, `цене`, `алфавиту`]} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {items.map((obj) => (
          <CardPizza key={obj.id} {...obj} />
        ))}
      </div>
    </div>
  );
};

export default Home;
