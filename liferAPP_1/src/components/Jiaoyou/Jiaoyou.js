import React, { Component } from 'react';
import Search_Jiaoyou from './Search_Jiaoyou';
import '../Search.css';
import JiaoyouList from './JiaoyouList'
class Jiaoyou extends Component {
  constructor (props) {
    super(props);
    // this.search = this.search.bind(this);
    this.state = {
      search_Name:'',
      search_City:'',
      search_party:'',
      search_Area:'',
      search_perform:'',
      search_exhibition:'',
      search_experience:''
    };
  }
 
componentWillMount(){
  this.setState({
  search_Name:this.props.searchName,
  search_City:this.props.searchCity
  });
}
   setSearch=(Name,City,Area,party,perform,
    exhibition,experience)=>{

        this.setState({
          search_Name:Name,
          search_City:City,
          search_Area:Area,
          search_party:party,
          search_perform:perform,
          search_exhibition:exhibition,
          search_experience:experience
});
  }

  render () {
    return (
      <div>
        <Search_Jiaoyou setSearch={this.setSearch}/>
        <JiaoyouList searchName={this.state.search_Name} searchCity={this.state.search_City} 
        party={this.state.search_party} perform={this.state.search_perform} exhibition={this.state.search_exhibition}
        experience={this.state.search_experience} hostname={this.props.hostname}/>
      </div>
    );
  }
}

export default Jiaoyou;