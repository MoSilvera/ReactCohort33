import React, { Component } from 'react';
import {Button, Card, CardTitle} from 'reactstrap'

class OwnerCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <h3>Owner: <span style={{color: 'darkslategrey'}}>{this.props.owner.name}</span></h3>
          <p>Address:{this.props.owner.address}</p>
          <Button onClick={() => {this.props.deleteOwner(this.props.owner.id)}}>Delete</Button>

        </div>
      </div>
    );
  }
}

export default OwnerCard;