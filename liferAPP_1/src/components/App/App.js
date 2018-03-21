/**
 * Created by xfzhang on 2016/11/27.
 * 应用主组件
 
 */
import React from 'react';
import {Link} from 'react-router';
import './App.css';
import axios from 'axios';

export default class App extends React.Component {
  constructor (props) {
    super(props);
     this.state={
      user:{"username":"","status":0,"avatar":""},
      error:"",
      socket:""
     };
  }


updateState=(newUser)=>{
this.setState({
  user:newUser
});

}

displayChildren=()=>{
  if(this.props.children.type.name==="Denglu_zhuce"){
    return(React.cloneElement(this.props.children, {updateState: this.updateState}));   
  }
  else{
    return(this.props.children);
  }
}

setTopBar=(newStatus)=>{
  if(this.state.user.status===0){
    return(<Link to="/denglu_zhuce" activeClassName="active">登录/注册|</Link>);
  }
  else if(this.state.user.status===1){
    return(<Link to="/Personal_page" ><img className="avatar" src={this.state.user.avatar}/></Link>);
  }
}
  
  render () {
    return (
    <div>
       <div className="TopBar" >
          <Link to="/" activeClassName="logo" >生·活·家</Link>
         <div className="activeTable">
            {this.setTopBar()}
            <Link to="/miyou" activeClassName="active">觅友|</Link>
           <Link to="/miju/none/none" activeClassName="active">觅居|</Link>
           <Link to="/jiaoyou" activeClassName="active">郊游|</Link>
            <Link to="/zhuchao" activeClassName="active">筑巢|</Link>
         </div>
       </div>
            {this.displayChildren()}

    </div>
    );
  }
}
