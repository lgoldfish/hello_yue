import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import './index.css';
import App from './App';
import Theme from "./routers/Theme"
import findInvite from "./routers/FindInvite"
import Invite from "./routers/Invite"
import Community from "./routers/Community"
import MySetting from "./routers/MySetting"
import Error from "./routers/Error"
import NaviBar from "./component/NaviBar"
import registerServiceWorker from './registerServiceWorker';
ReactDOM.render(<Router>
    <div>
    <div className="Nav-bar-box">
          <NaviBar />
        </div>
            <Switch>
                <Route exact path="/" component={App} />
                <Route exact path="/findInvite" component={findInvite} />
                <Route exact path="/invite" component={Invite} />
                <Route exact path="/community" component={Community} />
                <Route exact path="/mysetting" component={MySetting} />
                <Route exact path="/theme" component={Theme} />
                <Route component={Error} />
        </Switch>
    </div>
</Router>, document.getElementById('root'));
registerServiceWorker();
