import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './common/header';
import store from './store';
import Home from './pages/home';
import Detail from './pages/detail';

function App() {
  return (
    <Provider store={store}>
      <Header />
      <BrowserRouter>
        <Route path="/" exact render={() => <Home />}></Route>
        <Route path="/detail" exact render={() => <Detail />}></Route>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
