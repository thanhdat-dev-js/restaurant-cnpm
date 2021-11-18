import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Menu from './components/Menu';
import Clerk from './components/Clerk';
import Kitchen from './components/Kitchen';
import Login from './components/Login';
import Register from './components/Register';
import Admin from './components/Admin';
import Payment from './components/Payment';
import Reserve from './components/Reserve';
import ReserveList from './components/ReserveList';
import './scss/index.scss';
import UserProfile from './components/UserProfile';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/menu" exact component={Menu} />
          <Route path="/kitchen" exact component={Kitchen} />
          <Route path="/clerk" exact component={Clerk} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <Route path="/payment" exact component={Payment} />
          <Route path="/admin" exact component={Admin} />
          <Route path="/reserve" exact component={Reserve} />
          <Route path="/reservelist" exact component={ReserveList} />
          <Route path="/profile" exact component={UserProfile} />
          <Route path="*" component={() => <h1>404 NotFound</h1>} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
