import React, {useState, useEffect} from 'react';

class ApiRequest extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            title: this.props.title,
            date: this.props.date
        }
    }

    render(){
        return (
            <div>
                <h1>{this.state.title}</h1>
                <h3>{this.state.date}</h3>
            </div>
        );
    }

}

export default ApiRequest;