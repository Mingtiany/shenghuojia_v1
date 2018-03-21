import React, { Component, PropTypes } from 'react';
import ajax from '../../utils/ajax';
import axios from 'axios';
import "./JiaoyouList.css"

class JiaoyouList extends Component {
  constructor (props) {
    super(props);
    this.state = {
      firstView: false,
      loading: false,
      activities: [{
      "id":"1",
      "name":"针对于WebStorm工具开发React工程详细配置",
      "time":"2018-01-03",
      "location":"五一广场 星巴克",
      "type":"技术交流会",
      "price":"活动费用",
      "organizer":"中南大学软件学院",
      "hot_number":"关注量",
      "QR_code":"二维码url",
      "followers":"",
      "photo":"https://avatars3.githubusercontent.com/u/1157266?v=4"
    },
    {
      "id":"2",
      "name":"针对于WebStorm工具开发React工程详细配置",
      "time":"2018-01-03",
      "location":"中南大学唱吧",
      "type":"技术交流会",
      "price":"活动费用",
      "organizer":"中南大学软件学院",
      "hot_number":"关注量",
      "QR_code":"二维码url",
      "followers":"",
      "photo":"https://avatars3.githubusercontent.com/u/1157266?v=4"
    },
    {
      "id":"3",
      "name":"针对于WebStorm工具开发React工程详细配置",
      "time":"2018-01-03",
      "location":"中南大学唱吧",
      "type":"技术交流会",
      "price":"活动费用",
      "organizer":"中南大学软件学院",
      "hot_number":"关注量",
      "QR_code":"二维码url",
      "followers":"",
      "photo":"https://avatars3.githubusercontent.com/u/1157266?v=4"
    },
    {
      "id":"4",
      "name":"针对于WebStorm工具开发React工程详细配置",
      "time":"2018-01-03",
      "location":"中南大学唱吧",
      "type":"技术交流会",
      "price":"活动费用",
      "organizer":"中南大学软件学院",
      "hot_number":"关注量",
      "QR_code":"二维码url",
      "followers":"",
      "photo":"https://avatars3.githubusercontent.com/u/1157266?v=4"
    }

    ],
      error: null
    };
  }
/*
  componentWillReceiveProps(nextProps)  {
    let searchName = nextProps.searchName;
     if(searchName!==''){
    const url = 'https://api.github.com/search/users?q='+searchName;
    this.setState({ firstView: false, loading: true });
    axios.get(url)
      .then((response) => {
        console.log(response)
        this.setState({ loading: false, activities: response.data.items })
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
            this.state.activities.map((activity) => (
              <div className="content" key={activity.id}>
                    <img className="photo_act" src={activity.photo}/>
                    <div className="detail_act">
                        <h5 >{activity.name}</h5>
                        <span>
                            <p>时间：{activity.time}</p>
                            <p>地点：{activity.location}</p>
                            <p>类型：{activity.type}</p>
                            <p>主办方：{activity.organizer}</p>
                        </span>
                        <p className="act_intro">WebStorm作为目前最流流行的前端IDE, 无论从运行速度还是开发的便捷性，无形之中提高了工作效率。</p>
                    </div>
            </div> 
            ))
          }

        </div>
      );
    }
  }
}
JiaoyouList.propTypes = {
  searchName: PropTypes.string.isRequired
};

export default JiaoyouList;
