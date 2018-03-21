import React, { Component, PropTypes } from 'react';
import axios from 'axios';
import NavLink from'../Miju/NavLink.js'
class Home_miju extends Component {
  constructor (props) {
    super(props);
    // this.search = this.search.bind(this);
    this.state = {
      loading: true,
      users: null,
      error: null
    };
  }
   componentWillMount(){

    const url = 'https://api.github.com/search/users?q=y';
    
    axios.get(url)
      .then((response) => {
        console.log("发送ajax成功")
        this.setState({ loading: false, users: response.data.items })
      })
      .catch((error)=>{
        console.log(error)
        this.setState({ loading: false, error: error.toString() })
      })
   }

     displayCard=(index)=>{
                 
                  return(
                    <NavLink to={'/miju/'+this.state.users[index].login}>
                      <div className="miju_card">
                        <img src={this.state.users[index].avatar_url} style={{width: '100px',height:'70px'}}/>
                        <div className="miju_card_text">
                          <p>{this.state.users[index].login}</p>
                        </div>
                      </div>
                      </NavLink>);
                    }
                 

     display=()=>{
                        
                   if (this.state.firstView) {
                         return <h2>Enter name to search</h2>;
                    } else if (this.state.loading) {
                         return <h2>Loading result...</h2>;
                    } else if (this.state.error) {
                         return <h2>{this.state.error}</h2>;
                   } else {
                    
                    return (
                          <div className="Table_miju_card">
                              {this.displayCard(1)}
                              {this.displayCard(2)}
                              {this.displayCard(3)}
                              {this.displayCard(4)}
                              {this.displayCard(5)}
                              {this.displayCard(6)}  
                          </div>
                        )}
                   }

  render () {
    return (
      <div className="module_miju">
        <table className="Table_miju">
        <tbody>
          <tr>
            <td className="miju_title">
                <h4>觅居</h4>
                <p>提供优质的房源</p>
            </td>
            <td>
                {this.display()}  
            </td>
            <td className="miju_more">
               <NavLink to="/miju/none/none"><h5>更多房源></h5></NavLink>
            </td>
          </tr>
        </tbody> 
        </table>
      </div>
    );
  }
}

export default Home_miju;