import React, { Component } from 'react';
import './Amen.css';


class Amen extends Component {
    render() {
        return (
            <div className="AmenCard " >
                <h1 className="AmenCard_Title">{this.props.name}</h1>
                <img src={this.props.image} alt={this.props.name} className="AmenCard_Img"></img>
                <h4 className="AmenCard_Content">{this.props.content}</h4>
            </div>
        );
    }
}

export default Amen;