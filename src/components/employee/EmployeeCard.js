import React, { Component } from 'react';
import {Button, Card, CardTitle} from 'reactstrap'

class EmployeeCard extends Component {
  render() {
    return (
      <Card>
      <div className="card">
          <div className="card-content">
            <h2>Name: <span style={{color: 'darkslategrey'}}>{this.props.employee.name}</span></h2>
            <p>Catchphrase: {this.props.employee.catchphrase}</p>
            <Button onClick={() => {this.props.deleteEmployee(this.props.employee.id)}}>FIRE THEM</Button>

          </div>
      </div>
      </Card>
    );
  }
}

export default EmployeeCard;