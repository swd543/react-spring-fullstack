import React, { Component } from 'react'
import GenericButton from './GenericButton';

export default class GenericTextEntry extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         value:""
      }
    }
        
    handleChange=(e)=>{
        this.setState({value:e.target.value});
    }

    render() {
        return (
        <div>
            <input type="text" value={this.state.value} onChange={this.handleChange}/>
            <GenericButton url={"http://localhost:8080/delay/"+this.state.value} name="Permutations"/>
        </div>
        )
    }
}
