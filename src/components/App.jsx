import React from 'react';
import Header from './Header';
import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';

const schedule = {
  marginLeft: '250px'
};

function App(){
  return (
    <div>
      <Header/>
        <Switch>
          <div style={schedule}>
          <Route exact path='/' component={Schedule} />
          <Route path='/newticket' component={NewTicketForm} />
        </div>
          <Route component={Error404} />
        </Switch>
    </div>
  );
}

export default App;
