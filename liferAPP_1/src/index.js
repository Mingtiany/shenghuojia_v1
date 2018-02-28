import './index.css';
import React from 'react';
import { render } from 'react-dom';
import {Router, Route, hashHistory, IndexRoute} from 'react-router'
import App from './components/App';
import Home from './components/Home';
import Denglu_zhuce from './components/Denglu_zhuce';
import Miju from './components/Miju';
import Miyou from './components/Miyou';
import Jiaoyou from './components/Jiaoyou';
import Zhuchao from './components/Zhuchao';

render((

  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/denglu_zhuce" component={Denglu_zhuce}/>
      <Route path="/miju" component={Miju}/>
      <Route path="/miyou" component={Miyou}/>
      <Route path="/jiaoyou" component={Jiaoyou}/>
      <Route path="/zhuchao" component={Zhuchao}/>
    </Route>
  </Router>
), document.getElementById('app'))