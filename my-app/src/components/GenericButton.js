import React, { Component } from 'react';
import './GenericButton.css'

class GenericButton extends Component{

    constructor(props){
        super(props);
        this.state={
            response:"",
            isLoading:false
        };
    }

    handleClick=()=>{
        console.log("Button clicked!");
        this.setState({isLoading:true})
        try {
            fetch(this.props.url)
            .then(r=>r.text())
            .then(r => this.setState({response:r,isLoading:false}));
        } catch (error) {
            console.log("Dude, you're doing something wrong.",error);
        }
    }

    clearResponse=()=>{
        this.setState({response:""});
    }

    render(){
        if(!this.state.isLoading){
            return (
                <div className='PingBar'>
                    <button className="GenericButton" onClick={this.handleClick}>{this.props.name}</button>
                    <button className="GenericButton" onClick={this.clearResponse}>Clear</button>
                    <p>Backend says : {this.state.response}</p>
                </div>
                );
        } else {
            return(
                <div>
                    LOADING...
                </div>
            )
        }
        
    }
}

export default GenericButton;