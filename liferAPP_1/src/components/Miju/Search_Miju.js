import React, { Component, PropTypes } from 'react';
import Issue_Miju from"./Issue_Miju";
import Issue_Miyou from "../Miyou/Issue_Miyou";
import { Menu, Icon } from 'antd';
import "../antd.css"
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class Search_Miju extends Component {
  constructor (props) {
    super(props);
    // this.search = this.search.bind(this);
    this.state={
      user:null,
      show:"none",
      showMiyou:"none",
      search_City:'全部',
      search_Area:''
    };
  }
  componentWillMount(){
    this.setState({user:this.props.user});
  }


  search=()=>{
    var Name=this.refs.Name.value.trim();
    var City=this.state.search_City;
    var Area=this.state.search_Area;
    if(this.refs.zhengzu.checked){
      var zhengzu="整租";
    }
    else{
      var zhengzu="";
    }
    if(this.refs.danjian.checked){
      var danjian="单间";
    }
    else{
      var danjian="";
    }
    if(this.refs.xiaoqu.checked){
      var xiaoqu="1";
    }
    else{
      var xiaoqu="0";
    }
    if(this.refs.dianti.checked){
      var dianti="1";
    }
    else{
      var dianti="0";
    }
     if(this.refs.jingzhuangxiu.checked){
      var jingzhuangxiu="1";
    }
    else{
      var jingzhuangxiu="0";
    }
     if(this.refs.jingditie.checked){
      var jingditie="1";
    }
    else{
      var jingditie="0";
    }

    this.props.setSearch(Name,City,Area,zhengzu,danjian,
    xiaoqu,dianti,jingzhuangxiu,jingditie);
  }


 issue_miju=()=>{
  var status=this.state.user.status;
  if(status==2){
      this.setState({
        show:"block"
      });
    }
    else if(status==1){
      alert("请实名认证");
    }
     else {
      alert("请登录");
    }
  }
  hide_issue=()=>{
      this.setState({
        show:"none"
      });
  }

 hide_Miyou_issue=()=>{
      this.setState({
        showMiyou:"none"
      });
  }
 display_issue_miyou=()=>{
      this.setState({
        showMiyou:"block"
      });
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


  render () {
    return (
        <div className="contain">
        <Issue_Miju show={this.state.show} hide={this.hide_issue} display_miyou={this.display_issue_miyou} flag={"0"} hostname={this.props.hostname}/>
        <Issue_Miyou show={this.state.showMiyou} hide={this.hide_Miyou_issue} flag={"1"} hostname={this.props.hostname}/>
        <div className="search_1">
          <p className="search_title">寻找您的理想房源></p>
          <table className="Table">
           <tbody> 
            <tr>
              <td>
                 <Menu onClick={this.handleClick} style={{ width: 256 }} mode="vertical" >
                     <SubMenu key="全部" title={<span>{this.state.search_City}{this.state.search_Area}</span>} >
                        <Menu.Item key="区">全部</Menu.Item>
                        <SubMenu key="北京" title="北京市">
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
                <input type="text" className="searchText" ref="Name" name="" placeholder="输入您心仪的居住区域或小区名字"/>
              </td>
              <td className="searchButtonTd">
                <input className="searchButton" type="button" name="" value="搜索" onClick={this.search}/>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
        <div className="release_miju" onClick={this.issue_miju}>发布房源信息</div>
        <br/>
        <div className="search_2">
          <span>更多选择筛选条件：</span>
          <input type="checkbox" name="" ref="zhengzu" value="zhengzu"/>整租
          <input type="checkbox" name="" ref="danjian" value="danjian"/>单间
          <input type="checkbox" name="" ref="xiaoqu" value="xiaoqu"/>小区
          <input type="checkbox" name="" ref="dianti" value="dianti"/>电梯
          <input type="checkbox" name="" ref="jingzhuangxiu" value="jingzhuangxiu"/>精装修
          <input type="checkbox" name="" ref="jingditie" value="jingditie"/>近地铁
        </div>
      </div>
    );
  }
}
Search_Miju.propTypes = {
  setSearch: PropTypes.func.isRequired
};

export default Search_Miju;