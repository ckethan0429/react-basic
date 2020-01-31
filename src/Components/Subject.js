import React, { Component } from 'react';

class Subject extends Component {
  render(){
    return (
      //reload되지않게 하기 + 생성한 이벤트 호출
      <header>
        <h1><a href='/' onClick={function(e){
          e.preventDefault();
          this.props.onChangePage();
        }.bind(this)}>{this.props.title}</a></h1>
        {this.props.sub}
      </header>  
    );
  }
}
export default Subject;