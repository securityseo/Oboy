import React, { Component } from 'react'
import './counter.css'
export default class App extends Component {
  constructor(props){
    super(props)
    this.state={
      qiymat:1,
      puli:12,
    }
  }
  render (){
    const minus = () =>{
      if(this.state.qiymat>1){
        this.setState({ qiymat: this.state.qiymat - 1} )
        this.setState({ puli: this.state.puli - 12} )
      }
    }
    const pilus = () =>{
      this.setState({ qiymat: this.state.qiymat + 1} ) 
      this.setState({ puli: this.state.puli + 12} )
    }
    return(
      <div className='counter_container'>
      <button className='counter_btn' onClick={minus}>-</button>
      {this.state.qiymat}
      <button className='counter_btn' onClick={pilus}>+</button>
      {this.state.puli}
      </div>
    )
  }
}