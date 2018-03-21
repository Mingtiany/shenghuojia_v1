import React, { Component, PropTypes } from 'react';
import ajax from '../../utils/ajax';
import axios from 'axios';
import "./ZhuchaoList.css"


class ZhuchaoList extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      firstView: false,
      loading: false,
      articles: [
       {
        "id":"1",
        "photo":"https://avatars0.githubusercontent.com/u/966856?v=4",
        "post_name":"针对于WebStorm工具开发React工程详细配置",    
        "author":"天外野草",
        "content":"WebStorm作为目前最流流行的前端IDE, 无论从运行速度还是开发的便捷性，无形之中提高了工作效率，目前比较火爆的React也越来越被众多开发人员所采纳，但是WebStorm下的React工程经常会出现很多警告以及转换提示，下面我就对此做一些整理，方便更多同志使用。"
       },
       {
        "id":"2",
        "photo":"https://avatars0.githubusercontent.com/u/966856?v=4",
        "post_name":"针对于WebStorm工具开发React工程详细配置",    
        "author":"天外野草",
        "content":"WebStorm作为目前最流流行的前端IDE, 无论从运行速度还是开发的便捷性，无形之中提高了工作效率，目前比较火爆的React也越来越被众多开发人员所采纳，但是WebStorm下的React工程经常会出现很多警告以及转换提示，下面我就对此做一些整理，方便更多同志使用。"
       },
       {
        "id":"3",
        "photo":"https://avatars0.githubusercontent.com/u/966856?v=4",
        "post_name":"针对于WebStorm工具开发React工程详细配置",    
        "author":"天外野草",
        "content":"WebStorm作为目前最流流行的前端IDE, 无论从运行速度还是开发的便捷性，无形之中提高了工作效率，目前比较火爆的React也越来越被众多开发人员所采纳，但是WebStorm下的React工程经常会出现很多警告以及转换提示，下面我就对此做一些整理，方便更多同志使用。"
       },
       {
        "id":"4",
        "photo":"https://avatars0.githubusercontent.com/u/966856?v=4",
        "post_name":"针对于WebStorm工具开发React工程详细配置",    
        "author":"天外野草",
        "content":"WebStorm作为目前最流流行的前端IDE, 无论从运行速度还是开发的便捷性，无形之中提高了工作效率，目前比较火爆的React也越来越被众多开发人员所采纳，但是WebStorm下的React工程经常会出现很多警告以及转换提示，下面我就对此做一些整理，方便更多同志使用。"
       }
      ],
      error: null
    };
  }
/*
  componentWillMount() {
    
    console.log('发送ajax请求');
    const url = 'https://api.github.com/search/users?q=y';
    this.setState({ firstView: false, loading: true });
    axios.get(url)
      .then((response) => {
        console.log(response)
        this.setState({ loading: false, articles: response.data.items })
      })
      .catch((error)=>{
        console.log(error)
        this.setState({ loading: false, error: error.toString() })
      })
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
            this.state.articles.map((article) => (
              <div className="Zhuchao_content" key={article.id}>
                    <img className="Zhuchao_photo_act" src={article.photo} />
                    <div className="Zhuchao_detail_act">
                        <h3>{article.post_name}</h3>
                        <p className="p1">作者：{article.author}</p>
                        <p className="p2">{article.content}</p>
                    </div>
              </div>    
            ))
          }
         
        </div>
      );
    }
  }
}

export default ZhuchaoList;
