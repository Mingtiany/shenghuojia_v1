import React, { Component, PropTypes } from 'react';

class Issue_Miyou extends React.Component{
    constructor (props) {
    super(props);
    // this.search = this.search.bind(this);
  }

  issue=()=>{
    this.props.hide();
  }

  render(){
          const show=this.props.show;
  	return(
  		<div id="issue_content" style={{marginLeft:"40%",display:show,width:400,height:300,border:"1px solid #000",position:"absolute",left:"1%",top:"40%",backgroundColor:"#9ff"}} >
  		<table  border="2" bordeColor="#000">
  		 <tbody>
  		   <tr>
  		    <td>状态：</td>
          <td>未租住</td>
  		   </tr>
  		   <tr>
  		    <td>tag:</td>
  		    <td><input type="text"/></td>
  		   </tr>
  		   <tr> 
  	     	<td>理想租金：</td>
  	     	<td><input type="text"/></td>
  	       </tr>
  	       <tr>	
  		    <td>所在区域：</td>
  		    <td><input type="text"/></td>
  		   </tr>
  		   <tr> 
  		    <td>所在沿线：</td>
  		    <td><input type="text"/></td>
  		   </tr> 
  		   <tr>
			<td>简介：</td>
  		    <td><textarea rows="3" cols="30"/></td>
  		   </tr>   
  		   <tr>
  		    <td><input type="checkbox"/>已租房？</td>
  		    <td><input type="button" value="发布" onClick={this.issue}/></td>
  		   </tr> 
  		 </tbody>
  		</table>
  		</div>
  		);
  }


}
Issue_Miyou.propTypes = {
  hide: PropTypes.func.isRequired
};
export default Issue_Miyou;