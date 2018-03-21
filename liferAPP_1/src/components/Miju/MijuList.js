import React, { Component, PropTypes } from 'react';
import ajax from '../../utils/ajax';
import axios from 'axios';
import NavLink from'./NavLink.js';
import "./MijuList.css"
class MijuList extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      firstView: false,
      loading: false,
      houses:[
      {
        "id":"1",
        "title":"整租 | 雨花区 实拍房源 交通便利 家电齐全 洪园",
        "photo":"https://avatars0.githubusercontent.com/u/1560937?v=4",
        "room_style":"3室2厅1卫",
        "community":"周边有地质中学，安静",
        "rent_style":"整租",
        "rent_price":"2500/月",
        "location":"岳麓区中南大学",
        "room_area":"86平方米",
        "room_facility":"洗衣机，空调，暖气",
        "host":"李先生"
      },
      {
        "id":"2",
        "title":"整租 | 雨花区 实拍房源 交通便利 家电齐全 洪园",
        "photo":"https://avatars0.githubusercontent.com/u/1560937?v=4",
        "room_style":"3室2厅1卫",
        "community":"周边有地质中学，安静",
        "rent_style":"整租",
        "rent_price":"2500/月",
        "location":"岳麓区中南大学",
        "room_area":"86平方米",
        "room_facility":"洗衣机，空调，暖气",
        "host":"李先生"
      },
      {
        "id":"3",
        "title":"整租 | 雨花区 实拍房源 交通便利 家电齐全 洪园",
        "photo":"https://avatars0.githubusercontent.com/u/1560937?v=4",
        "room_style":"3室2厅1卫",
        "community":"周边有地质中学，安静",
        "rent_style":"整租",
        "rent_price":"2500/月",
        "location":"岳麓区中南大学",
        "room_area":"86平方米",
        "room_facility":"洗衣机，空调，暖气",
        "host":"李先生"
      }
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
            this.state.houses.map((house) => {
              const to = '/miju/'+house.id
              return(    
                          <NavLink to={to} key={house.id}>
                           <div className="Miju_CardId">
                                  <div className="Miju_ProfilePhoto">
                                    <img className="Miju_displayPhoto"src={house.photo} />
                                    <div className="Miju_MorePhoto"></div>                  
                                  </div>
                                  <div className="Miju_imformation">
                                    <h3 className="Miju_name">{house.title}</h3>
                                    <div className="Miju_flag2">房东直租</div>
                                        <p  >房租：{house.rent_price}</p>
                                        <p  >房型：{house.room_style}</p>
                                        <p  >面积：{house.room_area}</p>
                                        <p  >家电：{house.room_facility}</p>
                                        <p  >位置：{house.location}</p>
                                        <p  >联系房东：{house.host}</p>

                                    </div>
                            </div>
                            </NavLink>
                            )})
                         }
                     </div>
                    
      );
    }
  }
}
MijuList.propTypes = {
  searchName: PropTypes.string.isRequired
};

export default MijuList;