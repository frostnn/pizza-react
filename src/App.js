import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route } from 'react-router';
import Header from './components/Header';
import Content from './containers/Content';
import Wrapper from './containers/Wrapper';
import Cart from './pages/Cart';
import Home from './pages/Home';
import { setPizzas } from './redux/actions/pizzas';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get('http://localhost:3000/db.json').then(({ data }) => dispatch(setPizzas(data.pizza)));
  }, []);
  return (
    <Wrapper>
      <Header />
      <Content>
        <Route path="/" component={Home} exact />
        <Route path="/cart" component={Cart} exact />
      </Content>
    </Wrapper>
  );
};

export default App;
