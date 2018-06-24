import React, { Component } from 'react';
import './GenericButton.css'

class GenericButton extends Component{

    constructor(props){
        super(props);
        this.state={
            response:""
        };
    }

    handleClick=()=>{
        console.log("Button clicked!");
        try {
            fetch(this.props.url)
            .then(r=>r.text())
            .then(r => this.setState({response:r}));
        } catch (error) {
            console.log("Dude, you're doing something wrong.",error);
        }
    }

    clearResponse=()=>{
        this.setState({response:""});
    }

    render(){
        return (
        <div className='PingBar'>
            <button className="GenericButton" onClick={this.handleClick}>{this.props.name}</button>
            <button className="GenericButton" onClick={this.clearResponse}>Clear</button>
            <p>Backend says : {this.state.response}</p>
        </div>
        );
    }
}

export default GenericButton;