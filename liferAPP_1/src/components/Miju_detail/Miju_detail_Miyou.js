import React, { Component } from 'react';
import "./Miju_detail_Miyou.css"
class Miju_detail_Miyou extends Component {
  constructor (props) {
    super(props);
    this.state = {
      host:
      {
          "_idcard":"1231323",
          "avater":"https://avatars2.githubusercontent.com/u/36024639?v=4",
          "nickname":"逍遥游",
          "condition":"#宅男#IT#游戏", 
          "location":"求租大学城附近",
          "want_rent_price":"<1500/月",       
          "isHost":"NO",
          "introduction":"一段笑死啊哦的介绍，哈哈十分十分"
      }
    };
  }

  render () {
    const show=this.props.show;
    const x=this.props.x+5;
    const y=this.props.y+5;
    var host=this.state.host;
    return (
      <div style={{display:show,width:400,height:200,position:"absolute",top:y,left:x,backgroundColor:"#89f",opacity:0.8}}>
        <div className="Muju_detail_CardId">
                    <img className="Muju_detail_ProfilePhoto" src={host.avater}/>
                    <div className="Muju_detail_imformation">
                      <h3 className="Muju_detail_username">{host.nickname}</h3>
                      <div className="Muju_detail_flag1">有房源</div>
                        <p >{host.location}{host.condition} </p>
                        <p >{host.want_rent_price}</p>
                    </div>
                    <div className="Muju_detail_introduce">
                      <p>{host.introduction}</p>
                    </div>
        </div>
      </div>
    );
  }
}

export default Miju_detail_Miyou;