import React, { Component, PropTypes } from 'react';
import {Link} from 'react-router'; 
import { Menu, Icon } from 'antd';
import "../antd.css"
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

// in render 

class Home_Search extends Component {
  constructor (props, context) {
    super(props, context);
    // this.search = this.search.bind(this);
    this.router = context.router;
    this.state={
      search_Name:'',
      search_City:'全部',
      search_Area:'',
      search_model:''
    };
  }

  search=()=>{
    var searchName=this.refs.Name.value.trim();
    var searchmodel=this.refs.model.value;
    var searchCity=this.state.search_City;
    var searchArea=this.state.search_Area;
    if(searchmodel==="模块"){
      alert("请选择模块");
      return
    }
    if(searchName===''){
      alert("输入搜索名字");
      return
    }
    if(searchCity==='选择您的城市'){
      alert("选择您的城市");
      return
    }
     this.setState({
      search_Name:searchName,
      search_model:searchmodel,
     });
     this.props.updateSearch(searchCity,searchArea,searchName);
     if(searchmodel==="觅居"){
     this.router.push('/miju/'+searchName+'/'+searchCity);  
     }
     else if(searchmodel==="觅友"){
     this.router.push("/miyou");  
     }
     else if(searchmodel==="郊游"){
     this.router.push("/jiaoyou");  
     }
     else if(searchmodel==="筑巢"){
     this.router.push("/zhuchao");  
     }

  }
  displayTip=()=>{
    var model=this.refs.model.value;
    if(model==="觅友"){
       this.refs.Name.placeholder="寻找理想室友";
    }
    else if(model==="觅居"){
       this.refs.Name.placeholder="寻找优质房源";
    }
    else if(model==="郊游"){
       this.refs.Name.placeholder="体验精彩生活";
    }
    else{
       this.refs.Name.placeholder="分享生活点滴";
    }
  }


handleClick=(e)=> {
 if(e.keyPath[0]==="区"){
  var area="";
 }
 else{
  var area=e.keyPath[0];
 }
  this.setState({search_City:e.keyPath[1],search_Area:area});
}

componentWillUnmount(){
   this.props.updateSearch("","","");
}

  render () {
    return (
        <div className="home_search">
          <table className="Table"> 
           <tbody>
            <tr>
              <td>
                 <Menu onClick={this.handleClick} style={{ width: 256 }} mode="vertical" >
                     <SubMenu key="全部" title={<span>{this.state.search_City}{this.state.search_Area}</span>} >
                        <Menu.Item key="区">全部</Menu.Item>
                        <SubMenu key="北京" title="北京市" name="ymt">
                           <Menu.Item key="东城区">东城区</Menu.Item>
                           <Menu.Item key="西城区">西城区</Menu.Item>
                           <Menu.Item key="海淀区">海淀区</Menu.Item>
                           <Menu.Item key="朝阳区">朝阳区</Menu.Item>
                           <Menu.Item key="丰台区">丰台区</Menu.Item>
                           <Menu.Item key="门头沟区">门头沟区</Menu.Item>
                           <Menu.Item key="石景山区">石景山区</Menu.Item>
                           <Menu.Item key="房山区">房山区</Menu.Item>
                           <Menu.Item key="通州区">通州区</Menu.Item>
                           <Menu.Item key="顺义区">顺义区</Menu.Item>
                           <Menu.Item key="昌平区">昌平区</Menu.Item>
                           <Menu.Item key="大兴区">大兴区</Menu.Item>
                           <Menu.Item key="怀柔区">怀柔区</Menu.Item>
                           <Menu.Item key="平谷区">平谷区</Menu.Item>
                           <Menu.Item key="延庆区">延庆区</Menu.Item>
                           <Menu.Item key="密云区">密云区</Menu.Item>
                           
                        </SubMenu>
                        <SubMenu key="上海" title="上海市">
                           <Menu.Item key="黄浦区">黄浦区</Menu.Item>
                           <Menu.Item key="徐汇区">徐汇区</Menu.Item>
                           <Menu.Item key="长宁区">长宁区</Menu.Item>
                           <Menu.Item key="静安区">静安区</Menu.Item>
                           <Menu.Item key="普陀区">普陀区</Menu.Item>
                           <Menu.Item key="虹口区">虹口区</Menu.Item>
                           <Menu.Item key="杨浦区">杨浦区</Menu.Item>
                           <Menu.Item key="闵行区">闵行区</Menu.Item>
                           <Menu.Item key="宝山区">宝山区</Menu.Item>
                           <Menu.Item key="嘉定区">嘉定区</Menu.Item>
                           <Menu.Item key="浦东区">浦东区</Menu.Item>
                           <Menu.Item key="金山区">金山区</Menu.Item>
                           <Menu.Item key="松江区">松江区</Menu.Item>
                           <Menu.Item key="青浦区">青浦区</Menu.Item>
                           <Menu.Item key="奉贤区">奉贤区</Menu.Item>
                           <Menu.Item key="崇明区">崇明区</Menu.Item>
                        </SubMenu>
                        <SubMenu key="广州" title="广州市">
                           <Menu.Item key="越秀区">越秀区</Menu.Item>
                           <Menu.Item key="海珠区">海珠区</Menu.Item>
                           <Menu.Item key="荔湾区">荔湾区</Menu.Item>
                           <Menu.Item key="天河区">天河区</Menu.Item>
                           <Menu.Item key="白云区">白云区</Menu.Item>
                           <Menu.Item key="黄埔区">黄埔区</Menu.Item>
                           <Menu.Item key="花都区">花都区</Menu.Item>
                           <Menu.Item key="番禺区">番禺区</Menu.Item>
                           <Menu.Item key="萝岗区">萝岗区</Menu.Item>
                           <Menu.Item key="南沙区">南沙区</Menu.Item>
                        </SubMenu>
                        <SubMenu key="长沙" title="长沙市">
                           <Menu.Item key="天心区">天心区</Menu.Item>
                           <Menu.Item key="岳麓区">岳麓区</Menu.Item>
                           <Menu.Item key="雨花区">雨花区</Menu.Item>
                           <Menu.Item key="芙蓉区">芙蓉区</Menu.Item>
                           <Menu.Item key="开福区">开福区</Menu.Item>
                           <Menu.Item key="望月区">望月区</Menu.Item>
                           <Menu.Item key="长沙县">长沙县</Menu.Item>
                           <Menu.Item key="宁乡县">宁乡县</Menu.Item>
                           <Menu.Item key="浏阳市">浏阳市</Menu.Item>
                        </SubMenu>
                     </SubMenu>
                  </Menu>
              </td>
              <td>
                <select className="selectmodel" ref="model" onChange={this.displayTip}>
                  <option>觅友</option>
                  <option selected="selected">觅居</option>
                  <option>郊游</option>
                  <option>筑巢</option>
                </select>
              </td>
              <td>
                <input type="text" className="searchText" ref="Name" name="" placeholder="寻找优质房源"/>
              </td>
              <td className="searchButtonTd">         
               <input className="searchButton" type="button" name="" value="搜索" onClick={this.search}/>
              </td>
            </tr>
          </tbody>
          </table> 
        </div>
    );
  }
}
Home_Search.propTypes = {
  updateSearch: PropTypes.func.isRequired
};
Home_Search.contextTypes = {
router: PropTypes.object.isRequired
};
export default Home_Search;