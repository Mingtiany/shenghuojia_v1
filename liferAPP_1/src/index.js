
import React from 'react';
import { render } from 'react-dom';
import {Router, Route, hashHistory, IndexRoute} from 'react-router'
import App from './components/App/App';
import Home from './components/Home/Home';
import Denglu_zhuce from './components/Denglu_zhuce/Denglu_zhuce';
import Miju from './components/Miju/Miju';
import Miyou from './components/Miyou/Miyou';
import Jiaoyou from './components/Jiaoyou/Jiaoyou';
import Zhuchao from './components/Zhuchao/Zhuchao';
import Miju_detail from './components/Miju_detail/Miju_detail';
import Personal_page from './components/Personal_page/Personal_page';

render((

  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/denglu_zhuce" component={Denglu_zhuce}/>
      <Route path="/Personal_page" component={Personal_page}/>
      <Route path="/miju/:searchName/:searchCity" component={Miju}/>
      <Route path="/miju/:id" component={Miju_detail}/>
      <Route path="/miyou" component={Miyou}/>
      <Route path="/jiaoyou" component={Jiaoyou}/>
      <Route path="/zhuchao" component={Zhuchao}/>
    </Route>
  </Router>
), document.getElementById('app'))