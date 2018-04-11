import React, { Component, PropTypes } from 'react';
import "./Denglu_zhuce.css"
class Denglu_zhuce extends Component {
  constructor (props, context) {
    super(props, context);
    this.router = context.router;
    this.state = {
     user:{"username":"ymt","password":"ymt","status":"2",
     "avatar":"https://avatars2.githubusercontent.com/u/36024639?v=4"}
    };
  }

  login=()=>{
    var user=this.refs.user.value.trim();
    var pass=this.refs.pass.value.trim();
    if(user===""){
      alert("请输入账号!");
      this.refs.user.focus();
      return
    }
    else if(pass===""){
      alert("请输入密码!");
      this.refs.pass.focus();
      return
    }
    if((user===this.state.user.username)&&(pass===this.state.user.password)){
      var user={"username":this.state.user.username,"status":this.state.user.status,"avatar":this.state.user.avatar}
      this.props.updateState(user);
      this.router.push('/'); 
    }
    else {
      alert("用户名或密码错误！");
      this.refs.user.focus();
      return
    }
  }

  render () {
    return (
      <div className="contain1">
        <p className="Denglu_title">生·活·家</p>
          <input type="text" name="account" ref="user" placeholder="   账号" className="input_user"/><br/>
          <input type="password" name="password" ref="pass" placeholder="   密码" className="input_pass"/><br/>
          <input type="button" name="login" value="登录" className="button" onClick={this.login}/>
      </div>
    );
  }
}
Denglu_zhuce.contextTypes = {
router: PropTypes.object.isRequired
};
Denglu_zhuce.propTypes = {
  updateState: PropTypes.func.isRequired
};
export default Denglu_zhuce;