import React, { Component, PropTypes } from 'react';
import Detail_display from './detail_display';
import "./Miju_detail.css";
import Miju_detail_Miyou from "./Miju_detail_Miyou";
class Miju_detail extends Component {
  constructor (props) {
    super(props);
    // this.search = this.search.bind(this);
    this.state={
      house:{
      "title":"整租 | 雨花区 实拍房源 交通便利 家电齐全 洪园",
      "photo":"",
      "rent_price":"2500/月",
      "room_style":"3室2厅1卫",
      "rent_style":"整租",
      "room_area":"86平方米",
      "community":{"xiaoqu":"洪园","addr":"岳麓区 麓山南路327号"},
      "room_left":"4缺2",
      "room_facility":"洗衣机,空调,暖气",
      "location":"距离2号线迎宾路口地铁站1200米",
      "longitude":"",
      "latitude":"",
      "house_discribtion":"1.周边学校有地质中学 2.交通便利",
      "host":"李先生"
    },
    displayMiyou:"none",
    x:"",
    y:""
    };

  }

  handleMouseOver=(e)=>{

    this.setState({
      displayMiyou:"block",
      x:e.pageX,
      y:e.pageY
    });
  }
  handleMouseOut=()=>{
    this.setState({
      displayMiyou:"none",
   
    });
  }

  render () {
    return (
  <div className="myContent">
   <Miju_detail_Miyou show={this.state.displayMiyou} x={this.state.x} y={this.state.y}/>
    <table className="mytable" >
      <tbody>
      <tr>
        <td>
          <div className="basicImformation">
            <h2 className="title">{this.state.house.title}</h2>
            <div className="myProfilePhoto">
                  <div className="mydisplayPhoto"></div>
                  <div className="myMorePhoto"></div>                  
            </div>
             <div className="imformation" >
                  <p  style={{fontSize: 20,fontWeight:"bold"}}>{this.state.house.rent_price}</p>
                  <p>房型：{this.state.house.room_style} {this.state.house.room_area}</p>
                  <p>租赁方式：{this.state.house.rent_style}</p>
                  <p>位置：{this.state.house.location}</p>
                  <p>联系人：<div className="the_host" onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}>{this.state.house.host}</div></p>
                  </div>
             </div>
        </td>
      </tr>
      <tr>
        <td>
          <div className="room_facility">
            <span>房源设施：</span>
            <div><img src="picture/洗衣机.png" width="25"/>洗衣机</div>
            <div><img src="picture/空调.png" width="25"/>空调</div>
            <div><img src="picture/暖气.png" width="25"/>暖气</div>
          </div>
        </td>
      </tr>
      <tr>
          <td>
          <div className="house_discribtion">
            <span>房源描述：</span>
            <div>
              {this.state.house.house_discribtion}
            </div>
          </div>
        </td>
      </tr>
      <tr>
        <td>
          <div className="community">
            <span >小区详情：</span>
            <div>
              <p>小区：{this.state.house.community.xiaoqu}</p>
              <p>地址：{this.state.house.community.addr}</p>
            </div>
            <div className="map" >
              <img src="picture/map.png"/>
            </div>
          </div>
        </td>
      </tr>
      <tr>
        <td>
          <div className="similarHouse" >
            <span >相似房源：</span>
            <div className="display">
              <div className="displaycard" >
                <div className="dispPhoto"></div>
                <div className="disTag">
                  {"#五一广场 #电梯楼 #家具齐全 #小区 #<=3600/月"}
                </div>
              </div>
             <div className="displaycard" >
                <div className="dispPhoto"></div>
                <div className="disTag">
                  {"#五一广场 #电梯楼 #家具齐全 #小区 #<=3600/月"}
                </div>
              </div>
              <div className="displaycard" >
                <div className="dispPhoto"></div>
                <div className="disTag">
                  {"#五一广场 #电梯楼 #家具齐全 #小区 #<=3600/月"}
                </div>
              </div>
             <div className="displaycard" >
                <div className="dispPhoto"></div>
                <div className="disTag">
                  {"#五一广场 #电梯楼 #家具齐全 #小区 #<=3600/月"}
                </div>
              </div>
              <div className="displaycard" >
                <div className="dispPhoto"></div>
                <div className="disTag">
                  {"#五一广场 #电梯楼 #家具齐全 #小区 #<=3600/月"}
                </div>
              </div>

            </div>
          </div>
        </td>
        </tr>
      </tbody>
    </table>
  </div>
    );
  }
}

export default Miju_detail;