var React = require('react');
var ReactDOM = require('react-dom');
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';


const ExpenseDashboardPage = () => (
    <div>
        This is from my dashboard component
    </div>
);

const AddExpensePage = () => (
    <div>
        This is from add  component
    </div>
);


const EditExpensePage = () => (
    <div>
        This is from edit expense page
    </div>
);

const HelpPage = () => (
    <div>
        This is from help page
    </div>
);

const NotFoundPage = () => (
    <div>
        404 - <Link to="/">Go Home</Link>
    </div>
);

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <ul>
            <li> <NavLink exact={true} activeClassName="is-active" to="/">Dashboard</NavLink> </li>
            <li> <NavLink activeClassName="is-active" to="/create">Create</NavLink> </li>
            <li> <NavLink activeClassName="is-active" to="/edit">Edit</NavLink> </li>
            <li>  <NavLink activeClassName="is-active"to="/help">Help</NavLink> </li>
        </ul>
    </header>
)

// link to home page
// link to the create expense page
// link to the edit page
//linking to the help

const routes = (
    <BrowserRouter>
        <div>
            <Header />
            <Switch> 
                <Route path="/" component={ExpenseDashboardPage} exact={true}/>
                <Route path="/create" component={AddExpensePage}/>
                <Route path="/edit" component={EditExpensePage}/>
                <Route path="/help" component={HelpPage}/>
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));
  