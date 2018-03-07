import React, { Component, PropTypes } from 'react';
import "./Denglu_zhuce.css"

class Denglu_zhuce extends Component {
  constructor (props) {
    super(props);
    // this.search = this.search.bind(this);
  }

  render () {
    return (
      <div className="contain1">
        <p className="title">生·活·家</p>
          <input type="text" name="account" placeholder="   账号" className="input"/><br/>
          <input type="password" name="password" placeholder="   密码" className="input"/><br/>
          <input type="button" name="login" value="登录" className="button" onClick={this.login}/>
      </div>
    );
  }
}

export default Denglu_zhuce;