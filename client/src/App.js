import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Menu from './components/Menu';
import Clerk from './components/Clerk';
import Kitchen from './components/Kitchen';
import Login from './components/Login';
import Register from './components/Register';
import Admin from './components/Admin';
import Payment from './components/Payment';
import './scss/index.scss';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/menu" component={Menu} />
          <Route path="/kitchen" component={Kitchen} />
          <Route path="/clerk" component={Clerk} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/payment" component={Payment} />
          <Route path="/admin" component={Admin} />
          <Route path="*" component={() => <h1>404 NotFound</h1>} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
