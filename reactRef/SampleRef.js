import React, { Component } from 'react'

export default class SampleRef extends Component {
    constructor(props){
        super(props);


        this.myRef = React.createRef();   
     }

  render() {
    return (
      <div>
          <p ref={this.myRef} onClick={() => console.log(this.myRef.current)}>this is sample</p>
      </div>
    )
  }
}



