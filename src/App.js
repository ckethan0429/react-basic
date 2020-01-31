import React, { Component } from 'react';
import './App.css';
import Subject from './Components/Subject';
import TOC from './Components/TOC';
import Content from './Components/Content';
import Control from './Components/Control';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      mode:'read',
      selected_content_id:2,
      subject:{title:'WEB', sub:'World Wide Web!'},
      welcome:{title:'Welcome', desc:'Hello, React!'},
      contents:[
        {id:1, title:'HTML', desc:'HTML is for information'},
        {id:2, title:'CSS', desc:'CSS is for design'},
        {id:3, title:'JavaScript', desc:'JavaScript is for interactive'}
      ]
    }
  }
  render(){
    var _title, _desc = null
    if(this.state.mode === 'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    }
    else if(this.state.mode === 'read'){
      var i = 0;
      while(i < this.state.contents.length){
        var data = this.state.contents[i];
        if(data.id === this.state.selected_content_id){
          _title = data.title;
          _desc = data.desc;
          break;
        }
        i = i+1;
      }
    }


    return (
      <div className="App">
        <Subject 
          title={this.state.subject.title} 
          sub={this.state.subject.sub}
          onChangePage={function(){
            this.setState({
              mode:'welcome',
            });
          }.bind(this)}
          ></Subject>
        {/* 이벤트 설치해서 reload 되지않도록하기 + state 속성 변경 */}
        
        
        {/* props를 배열로 받아서 넘겨버리기 -> 넘겨진 배열은 반복문을 이용해 표현*/}
        <TOC 
          onChangePage={function(id){
            this.setState({
              mode:'read',
              selected_content_id:Number(id)
          });
          }.bind(this)}
          data={this.state.contents}>
        </TOC>

        <Control onChangeMode={function(_mode){
          this.setState({
            mode:_mode
          });
        }.bind(this)}>
        </Control>
        
        <Content title={_title} desc={_desc}></Content>

      </div>
    );
  }
}

export default App;
