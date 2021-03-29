import { useEffect, useState } from 'react';
import { Route } from 'react-router';
import Header from './components/Header';
import Content from './containers/Content';
import Wrapper from './containers/Wrapper';
import Cart from './pages/Cart';
import Home from './pages/Home';

const App = () => {
  const [pizza, setPizza] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3000/db.json')
      .then((resp) => resp.json())
      .then((data) => setPizza(data.pizza));
  }, []);
  return (
    <Wrapper>
      <Header />
      <Content>
        <Route path="/" render={() => <Home items={pizza} />} exact />
        <Route path="/cart" component={Cart} exact />
      </Content>
    </Wrapper>
  );
};

export default App;
