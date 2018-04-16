/**
 * Created by xfzhang on 2016/11/27.
 * 应用主组件
 
 */
import React from 'react';
import {Link} from 'react-router';
import './App.css';
import Denglu from '../Denglu_Zhuce/Denglu';
import Zhuce from '../Denglu_Zhuce/Zhuce';
import axios from 'axios';

export default class App extends React.Component {
  constructor (props) {
    super(props);
     this.state={
        userInfo:{"account":"","status":0,"avatar":""},
        display_D: "none",
        display_Z: "none",
        display: "none",
        error:"",
        socket:"",
        searchName:"",
        searchArea:"",
        searchCity:"",
        hostname:"http://shenghuojia.studio712.cn/server"
     };
  }


    setAccount=(userInfo)=>{
        this.setState({
            userInfo:userInfo
        });
    }


updateSearch=(newsearchCity,newsearchArea,newsearchName)=>{
  this.setState({
    searchCity:newsearchCity,
    searchArea:newsearchArea,
    searchName:newsearchName
  });
}

displayChildren=()=>{
   if(this.props.children.type.name==="Denglu_zhuce"){
    return(React.cloneElement(this.props.children, {updateState: this.updateState,hostname: this.state.hostname}));   
  }
  else if(this.props.children.type.name==="Miju"){
    return(React.cloneElement(this.props.children, {user: this.state.user,hostname: this.state.hostname}));   
  }
  else if(this.props.children.type.name==="Miyou"){
    return(React.cloneElement(this.props.children, {hostname: this.state.hostname,searchName:this.state.searchName,searchCity:this.state.searchCity}));   
  }
  else if(this.props.children.type.name==="Home"){
    return(React.cloneElement(this.props.children, {hostname: this.state.hostname,updateSearch: this.updateSearch}));   
  }
  else if(this.props.children.type.name==="Jiaoyou"){
    return(React.cloneElement(this.props.children, {hostname: this.state.hostname,searchName:this.state.searchName,searchCity:this.state.searchCity}));   
  }
  else{
    return(React.cloneElement(this.props.children, {hostname: this.state.hostname}));   
  }
}

    setDialog=(name,display)=>{
      console.log(name);
        if(name=="Dialog_D"){
            if(display===0){
                this.setState({
                    display_D: "none"
                });
            }else if(display===1){
                this.setState({
                    display_D: "block",
                    display_Z:"none"
                });
            }
        }else if(name=="Dialog_Z"){
            if(display===0){
                this.setState({
                    display_Z: "none"
                });
            }else if(display===1){
                this.setState({
                    display_Z: "block",
                    display_D:"none"
                });
            }
        }

    }

     setTopBar=()=>{
        if(this.state.userInfo.status===0){
            return(<Link onClick={()=>{this.setDialog("Dialog_D",1)}}>登录/注册|</Link>);
        }
        else if(this.state.userInfo.status===1){
            return(<Link to="/Personal_page" ><img className="avatar" src={this.state.userInfo.avatar}/></Link>);
        }
        else{
            return(<Link to="/Personal_page" ><img className="avatar" src={this.state.userInfo.avatar}/></Link>);
        }
    }

   
  
  render (){
    return (
    <div>
       <div className="TopBar" >
          <Link to="/" activeClassName="logo" >生·活·家</Link>
         <div className="activeTable">
            {this.setTopBar()}
             &nbsp;|&nbsp;<Link to="/miyou" activeClassName="active">觅友</Link> |&nbsp;
           <Link to="/miju/none/none" activeClassName="active">觅居</Link> |&nbsp;
           <Link to="/jiaoyou" activeClassName="active">郊游</Link> |&nbsp;
            <Link to="/zhuchao" activeClassName="active">筑巢</Link>
         </div>
       </div>

        <Denglu setDialog={this.setDialog} setAccount={this.setAccount} display_D={this.state.display_D}/>
        <Zhuce setDialog={this.setDialog} setAccount={this.setAccount} display_Z={this.state.display_Z}/>
        {this.displayChildren()}

    </div>
    );
  }
}
