import React from 'react';
import './Sass/App.scss';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import NavBar from './Components/Layout/NavBar'
import Dashboard from './Components/Dashboard/Dashboard'
import TeamDetails from './Components/Team/TeamDetails'
import SignIn from './Components/Auth/SignIn'
import SignUp from './Components/Auth/SignUp'
import CreateTeam from './Components/Team/CreateTeam'
import EditTeam from './Components/Team/EditTeam'
import Footer from './Components/Layout/Footer'
import AddPlayersToTeam from './Components/Team/AddPlayersToTeam'
import FranchiseTag from './Components/Team/FranchiseTag'
import LeagueHistoryDash from './Components/History/LeagueHistoryDash'
import AddSeason from './Components/Admin/AddSeason'


// const myClient = new Client({leagueId:593104})
// myClient.setCookies({
//   espnS2:'AEAeurSaCWWo0omuDXoPkuMNMj4b1aqw1BOdQUuN%2BWUXoSHyP9OB0zDCI641KjAASD7VXu0ImcdZSIi0PBIlFkMFqz5gTN%2ByI9MZSDhSTVnfbphSSKhlx30FZYYHvE641LA1gevEPPif322q6im6x07g7l4aWvBnrpTm35JiXNA0u%2F9PqqqadYF2A1XXb5X05DDMGBhShuWldrttMizpMLeThLwhQ2Pfe9I%2Bgsob1m%2Bj2J88BxITSNUOGPAEiy%2BOTXmerMztYF%2BA4WboU4bpAm05',
//   SWID:'{BC2381A6-64A5-46BE-A381-A664A5F6BE89}'
// })

function App() {

  // console.log(myClient.getLeagueInfo(2018))

  return (
    <BrowserRouter>
      <div className="App">
        <NavBar/>
        <Switch>
          <Route exact path='/' component={Dashboard}/>
          <Route exact path='/team/:id' component={TeamDetails}/>
          <Route exact path='/signin' component={SignIn}/>
          <Route exact path='/signup' component={SignUp}/>
          <Route exact path='/create' component={CreateTeam}/>
          <Route exact path='/edit/:id' component={EditTeam}/>
          <Route exact path='/update' component={AddPlayersToTeam}/>
          <Route exact path='/franchisetag' component={FranchiseTag}/>
          <Route exact path='/history' component={LeagueHistoryDash}/>
          <Route exact path='/updateseason' component={AddSeason}/>
        </Switch>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
