import React, { Component, PropTypes } from 'react';

class Issue_Miju extends React.Component{
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
  		<div id="issue_content" style={{marginLeft:"40%",display:show,width:400,height:500,border:"1px solid #000",position:"absolute",left:"1%",top:"40%",backgroundColor:"#9ff"}} >
  		<table  border="2" bordeColor="#000">
  		 <tbody>
  		   <tr>
  		    <td>状态：</td>
          <td>寻室友</td>
  		   </tr>
  		   <tr>
  		    <td>标题：</td>
  		    <td><input type="text"/></td>
  		   </tr>
         <tr>
          <td>租赁方式：</td>
          <td><select><option>合租</option><option>整租</option></select></td>
         </tr>
         <tr> 
          <td>剩余房间：</td>
          <td><input type="text"/></td>
         </tr>
  		   <tr> 
  	     	<td>租金：</td>
  	     	<td><input type="text"/></td>
  	       </tr>
  		   <tr> 
  		    <td>房型：</td>
  		    <td><input type="text"/></td>
  		   </tr> 
         <tr>
          <td>面积：</td>
          <td><input type="text"/></td>
         </tr> 
  		   <tr>
		    	<td>位置：</td>
  		    <td><input type="text"/></td>
  		   </tr>   
         <tr>
          <td>联系人：</td>
          <td><input type="text"/></td>
         </tr>  
         <tr>
          <td>联系电话：</td>
          <td><input type="text"/></td>
         </tr> 
         <tr>
          <td>房源设施：</td>
          <td><input type="text"/></td>
         </tr>
         <tr>
          <td>小区名：</td>
          <td><input type="text"/></td>
         </tr>
         <tr>
          <td>小区地址：</td>
          <td><input type="text"/></td>
         </tr>
         <tr>
          <td>房源图片：</td>
          <td><div style={{width:50,height:50,border:"1px solid #000"}}></div></td>
         </tr>

  		   <tr>
  		    <td><input type="checkbox"/>需要找人合租？</td>
  		    <td><input type="button" value="发布" onClick={this.issue}/></td>
  		   </tr> 
  		 </tbody>
  		</table>
  		</div>
  		);
  }


}
Issue_Miju.propTypes = {
  hide: PropTypes.func.isRequired
};
export default Issue_Miju;