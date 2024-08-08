"use client"
import { Component } from "react"
import Button from '@mui/material/Button';
import "./styles.css"


class Home extends Component{

  constructor(){
    super();
    this.state ={
      count: 1
    }
  }

  componentDidMount(){
    console.log ("me renderizo")
  }


  componentDidUpdate(){
    console.log ("me actualize")
  }

  aumentar= () =>{
    this.setState({
      count: this.state.count + 1
    })
  }

  disminuir= ()=>{
    this.setState({
      count: this.state.count - 1
    })
  }

  render() {
   return ( //arbol de componentes
    <div className="container">
       <p>hello world x{this.state.count}.!</p>
       <Button onClick={this.aumentar}>aumentar</Button>
       <Button onClick={this.disminuir}>disminuir</Button>
    </div>
   );
  }

}

export default Home;