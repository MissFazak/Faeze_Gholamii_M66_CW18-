import React, { Component } from 'react'

export default class Clock2 extends Component {
    constructor(props){
        super(props);

        this.state = {
            time :new Date(),
            color:''
        }
     }

    tick =() => {
        this.setState({
            time :new Date()
        });
    }

    componentDidMount(){
        this.timerId = setInterval(() => this.tick(),1000);
    }

    componentWillUnmount(){
        clearInterval(this.timerId);
    }

    componentDidUpdate(prevProps,prevState){
        if(this.state.time !== prevState.time){
            this.generate();

        }
    }
    
  generate() {
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    this.setState({ color: `#` + randomColor });
    console.log(this.state.color);
  }

  render() {
    return (
      <div style={{color:this.state.color,fontSize:'2rem'}}>
          {this.state.time.toLocaleTimeString()}
      </div>
    )
  }
}
