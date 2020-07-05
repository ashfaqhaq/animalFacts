import React, { Component } from 'react'
import catSrc from './img/cat.jpeg';

export class App extends Component {

  state={
      animal:'',
      fact:'',
      image:''
  }
  
  handleSubmit(prop){
    // e.preventDefault()
    this.setState({
      animal:prop
    })
   
    const animal=this.state.animal
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
  const url = `https://some-random-api.ml/facts/${animal}`;
   fetch(proxyurl+url)
   .then(console.log("working"))
   .then(resp=>resp.json())
   .then(data=>{
     console.log(data)
     console.log(data.fact);
     this.setState({
       fact:data.fact
     })
     
   })
   
  }
  handleChange(e){
    console.log(e.target.value)
    this.setState({
      animal:e.target.value
    })
   }
  render() {
    return (
      <div>
        <h1> Animal Facts </h1>
        <div className="container">
        


        
         <img title="my-img"
         src={catSrc}
         width="25%" height="25%"
         onClick= {()=>{
          this.handleSubmit('cat')
        }}>
        </img>
        <img title="my-img"
         src={catSrc}
         width="25%" height="25%"
         onClick= {()=>{
          this.handleSubmit('cat')
        }}>
        </img>
        <img title="my-img"
         src={catSrc}
         width="25%" height="25%"
         onClick= {()=>{
          this.handleSubmit('cat')
        }}>
        </img>
        <img title="my-img"
         src={catSrc}
         width="25%" height="25%"
         onClick= {()=>{
          this.handleSubmit('cat')
        }}>
        </img>
        <img title="my-img"
         src={catSrc}
         width="25%" height="25%"
         onClick= {()=>{
          this.handleSubmit('cat')
        }}>
        </img>
        <img title="my-img"
         src={catSrc}
         width="25%" height="25%"
         onClick= {()=>{
          this.handleSubmit('cat')
        }}>
        </img>
        <img title="my-img"
         src={catSrc}
         width="25%" height="25%"
         onClick= {()=>{
          this.handleSubmit('cat')
        }}>
        </img>
        <img title="my-img"
         src={catSrc}
         width="25%" height="25%"
         onClick= {()=>{
          this.handleSubmit('cat')
        }}>
        </img>
        </div>
        <div>
          
          {this.state.animal}
          {this.state.fact}

        </div>
      </div>
    )
  }
}

export default App
