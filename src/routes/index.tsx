import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Client from '../pages/Client';
import Register from '../pages/Register';
import UpdataClients from '../pages/UpdataClients';


const Routes: React.FC = () => {
  return(
    <Switch>
      <Route path="/" exact component={Register} />
      <Route path='/clients' component={Client}/>
      <Route path="/updataclients/:id" component={UpdataClients} />
     </Switch>
  );
}

export default Routes;