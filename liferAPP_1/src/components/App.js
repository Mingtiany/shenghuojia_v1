/**
 * Created by xfzhang on 2016/11/27.
 * 应用主组件
  <div>
        <h2>Hello, React Router!</h2>
        <ul>
          <li><Link to="/about" activeClassName="active">About2</Link></li>
          <li><Link to="/repos" activeClassName="active">Repos2</Link></li>
        </ul>
        {this.props.children}
      </div>
 */
import React from 'react';
import Search from './Search';
import UserList from './UserList';
import {Link} from 'react-router';
import './App.css';

export default class App extends React.Component {
  constructor (props) {
    super(props);

  }

  render () {
    return (
       <div className="TopBar" >
        <Link to="/" activeClassName="logo" >生·活·家</Link>
        <div className="activeTable">
          <Link to="/denglu_zhuce" activeClassName="active">登录/注册|</Link>
          <Link to="/miyou" activeClassName="active">觅友|</Link>
          <Link to="/miju" activeClassName="active">觅居|</Link>
          <Link to="/jiaoyou" activeClassName="active">郊游|</Link>
          <Link to="/zhuchao" activeClassName="active">筑巢|</Link>
        </div>
        {this.props.children}
    </div>
    );
  }
}
