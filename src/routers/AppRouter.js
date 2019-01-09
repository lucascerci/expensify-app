var React = require('react');
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import Dashboard from '../components/Dashboard'
import Add from '../components/Add'
import Edit from '../components/Edit'
import Help from '../components/Help'
import NotFoundPage from '../components/NotFound'
import Header from '../components/Header'


const AppRouter = (props) => (
    <BrowserRouter>
        <div>
            <Header/>
            <Switch> 
                <Route path="/" component={Dashboard} exact={true}/>
                <Route path="/create" component={Add}/>
                <Route path="/edit/:id" component={Edit}/>
                <Route path="/help" component={Help}/>
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;