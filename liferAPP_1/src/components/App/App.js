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
      status:0,
      user:"",
      error:""
     };
  }

  componentWillMount(){
     const url = `https://localhost/static/userData.json`;
    axios.get(url)
      .then((response) => {
        console.log(response)
        
      })
      .catch((error)=>{
        console.log(error)
        this.setState({ error: error.toString() })
      })
  }

setTopBar=(newStatus)=>{
  if(this.state.status===0){
    return(<Link to="/denglu_zhuce" activeClassName="active">登录/注册|</Link>);
  }
  else if(this.state.status===1){
    return(<Link to="/Personal_page" ><img className="avatar" src="https://avatars2.githubusercontent.com/u/36024639?v=4"/></Link>);
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
            {this.props.children}

    </div>
    );
  }
}
