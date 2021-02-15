import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import SignIn from './Components/Auth/SignIn';
import AuthProvider from './Context/AuthContext';
import PrivateRoute from './Components/Auth/PrivateRoute';
import Factions from './Components/Pages/Factions';
import Tech from './Components/Pages/Tech';
import Draft from './Components/Pages/Draft';
import Dash from './Components/Pages/Dash';
import FactionDetail from './Components/Faction Components/FactionDetail';
import Account from './Components/Pages/Account';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <div className="App">
          <Switch>
            <PrivateRoute exact path='/' component={Dash}/>
            <PrivateRoute exact path='/factions' component={Factions}/>
            <PrivateRoute path='/factions/:id' component={FactionDetail}/>
            <PrivateRoute path='/tech' component={Tech}/>
            <PrivateRoute path='/draft' component={Draft}/>
            <PrivateRoute path='/account' component={Account}/>
            <Route path='/signin' component={SignIn}/>
          </Switch>
        </div>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
