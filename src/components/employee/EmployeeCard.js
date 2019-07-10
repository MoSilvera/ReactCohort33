import React, { Component } from 'react';

class EmployeeCard extends Component {
  render() {
    return (
      <div className="card">
          <div className="card-content">
            <h2>Name: <span style={{color: 'darkslategrey'}}>{this.props.employee.name}</span></h2>
            <p>Catchphrase: {this.props.employee.catchphrase}</p>
          </div>
      </div>
    );
  }
}

export default EmployeeCard;