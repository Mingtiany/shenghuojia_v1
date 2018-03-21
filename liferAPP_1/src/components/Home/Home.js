import React, { Component } from 'react';
import Home_Search from './Home_Search';
import Home_miju from './Home_miju';
import Home_miyou from './Home_miyou';
import Home_jiaoyou from './Home_jiaoyou';
import Home_zhuchao from './Home_zhuchao';
import '../Search.css';

class Home extends Component {

  render () {
    return (
      <div>
        <Home_Search/>
        <div className="moduleTable">   
            <Home_miyou/>
            <Home_miju/>
            <Home_jiaoyou/>
            <Home_zhuchao/>
        </div>
      </div>
    );
  }
}

export default Home;