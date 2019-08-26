import React from 'react';
import { inject, observer } from 'mobx-react';

class Title  extends React.Component {
    render() {
        return (
            <h1> {this.props.name + "님의 개발에 대해 후기입니다." }</h1>
        )
    }
}

class Comment extends React.Component {
  render() {
      return (
      <div>
          <h4>
              {this.props.who} {this.props.comment}
          </h4>
      </div>
      );
    }
}

class CareerBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: false,
      who: '저는 제로웹 CTO 조슈아 입니다.',
      comment:'주원님과 개발을 하는것은 굉장히 의미 있는시간이었습니다. 데이터베이스 세션관리가 가장 어려웠는데 세션 레퍼를 만드므로서 ....'
    };
  }


  addComment = (event) => {
    this.props.cs.add( { 
      who:this.state.who,
      comment:this.state.comment,
    })
    this.setState({who:'', comment:'', input:false });
    event.preventDefault();
  }

  renderInput() {
    if( this.state.input === false ) {
      return (
      <button onClick={ () => this.setState({input:!this.state.input})}
        style={{background: "#fff",padding: "5px", width:"100px", height:"30px"}}> 코멘트 입력 </button>
      )
    }
    let divStyle = {margin:"5px"};
    return (
      <form onSubmit={this.addComment}>
        <div style={divStyle}>
        <label> 소속, 이름, 직책 등을 입력하세요: </label>
        </div>
        <div style={divStyle}>
          <input type="text" 
          style={{background: "#fff",padding: "5px", width:"500px"}}
          value={this.state.who} onChange={(event) =>  this.setState({who: event.target.value})}/>
        </div>

        <div style={divStyle}>
          <label>
            코멘트를 입력하세요:
          </label>
        </div>
        <div style={divStyle}>
          <textarea 
          style={{background: "#fff",padding: "5px"}}
          value={this.state.comment} onChange={ (event) => this.setState({comment: event.target.value})}
          cols={100} rows={10} />
        </div>
        <button type="submit" value="Submit" 
        style={{background: "#fff",padding: "5px", width:"100px", height:"30px"}}> summit </button>
    </form>
    );
  }

  render() {
    let divStyle = {margin:"5px"};
    return (
      <div align="left" style={{margin: '10px'}}>
        <div style={divStyle}>
          <Title name={this.props.cs.name}/> 
        </div>

        <div style={divStyle}>
          {this.props.cs.comments.map((c, index) => {
              return <Comment key={index} who={c.who} comment={c.comment} />
          })}
        </div>

        <div>
          {this.renderInput()}
        </div>
      </div>
    );
  }
}  

export default inject(({career}) => ({
  cs: career,
}))(observer(CareerBoard));