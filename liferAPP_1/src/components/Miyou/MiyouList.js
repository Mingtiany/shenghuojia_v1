import React, { Component, PropTypes } from 'react';
import ajax from '../../utils/ajax';
import axios from 'axios';
import {Link} from 'react-router';
import "./MiyouList.css"

class MiyouList extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      firstView: false,
      loading: false,
      roommates:[
      {
          "_idcard":"1231323",
          "avater":"https://avatars2.githubusercontent.com/u/36024639?v=4",
          "nickname":"逍遥游",
          "condition":"#宅男#IT#游戏", 
          "location":"求租大学城附近",
          "want_rent_price":"<1500/月",       
          "isHost":"NO",
          "introduction":"一段笑死啊哦的介绍，哈哈十分十分"
      },
      {
          "_idcard":"1341323",
          "avater":"https://avatars2.githubusercontent.com/u/36024639?v=4",
          "nickname":"逍遥游",
          "condition":"#宅男#IT#游戏", 
          "location":"#求租大学城附近",
          "want_rent_price":"<1500/月",       
          "isHost":"NO",
          "introduction":"一段笑死啊哦的介绍，哈哈十分十分"
      },
      {
          "_idcard":"4531323",
          "avater":"https://avatars2.githubusercontent.com/u/36024639?v=4",
          "nickname":"逍遥游",
          "condition":"#宅男#IT#游戏", 
          "location":"#求租大学城附近",
          "want_rent_price":"<1500/月",       
          "isHost":"NO",
          "introduction":"一段笑死啊哦的介绍，哈哈十分十分"
      },
      {
          "_idcard":"12erwrw23",
          "avater":"https://avatars2.githubusercontent.com/u/36024639?v=4",
          "nickname":"逍遥游",
          "condition":"#宅男#IT#游戏", 
          "location":"#求租大学城附近",
          "want_rent_price":"<1500/月",       
          "isHost":"NO",
          "introduction":"一段笑死啊哦的介绍，哈哈十分十分"
      },
      ],
      error: null
    };
  }
/*
  componentWillReceiveProps(nextProps)  {
    let searchName = nextProps.searchName;
    if(searchName!=''){
    console.log('发送ajax请求', searchName);
    const url = `https://api.github.com/search/users?q=${searchName}`;
    this.setState({ firstView: false, loading: true });
    axios.get(url)
      .then((response) => {
        console.log(response)
        this.setState({ loading: false, users: response.data.items })
      })
      .catch((error)=>{
        console.log(error)
        this.setState({ loading: false, error: error.toString() })
      })
    }
  }
*/
  render () {

    if (this.state.firstView) {
      return <h2>Enter name to search</h2>;
    } else if (this.state.loading) {
      return <h2>Loading result...</h2>;
    } else if (this.state.error) {
      return <h2>{this.state.error}</h2>;
    } else {
      return (
        <div className="row">
          {
            this.state.roommates.map((roommate) => (
              <div className="CardId" key={roommate._idcard}>
                    <img className="ProfilePhoto" src={roommate.avater}/>
                    <div className="imformation">
                      <h3 className="username">{roommate.nickname}</h3>
                      <div className="flag1"><Link to={"/miju/:"+roommate._idcard}>有房源</Link></div>
                        <p >{roommate.location}{roommate.condition} </p>
                        <p >{roommate.want_rent_price}</p>
                    </div>
                    <div className="introduce">
                      <p>{roommate.introduction}</p>
                    </div>
                  </div>
            ))
          }

        </div>
      );
    }
  }
}
MiyouList.propTypes = {
  searchName: PropTypes.string.isRequired
};

export default MiyouList;
