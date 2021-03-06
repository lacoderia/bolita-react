import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

import PrivateTemplate from '../../templates/privateTemplate';
import NextGames from '../../components/dashboard/nextGames';
import Tickets from '../../components/dashboard/tickets';
import Results from '../../components/dashboard/results';

class DashboardView extends Component {
    
  render() {
    return(
      <PrivateTemplate>
        <Route path="/dashboard/proximos" component={NextGames}/>
        <Route path="/dashboard/jugadas" component={Tickets}/>
        <Route path="/dashboard/resultados" component={Results}/>
      </PrivateTemplate>
    )
  }
  
};

export default DashboardView;