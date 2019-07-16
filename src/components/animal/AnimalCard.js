import React, { Component } from 'react';
import "./Animal.css"
import {Button, Card, CardTitle} from 'reactstrap'
import { Link } from "react-router-dom"

class AnimalCard extends Component {
  render() {
    return (
      <Card className="card">
          <div className="card-content">
            <picture>
              <img src={require('./DogIcon.svg')} alt="My Dog" />
            </picture>
            <h2>Name: <span style={{color: 'darkslategrey'}}>{this.props.animal.name}</span></h2>
            <p>Breed: {this.props.animal.breed}</p>
            <p>Caretaker: {this.props.employees.filter(
                employee => employee.id === this.props.animal.employeeId)
                .map(employee => employee.name )

            }</p>
            <Button onClick={() => {this.props.deleteAnimal(this.props.animal.id)}}>Discharge</Button>
            <Link className="nav-link" to={`/animals/${this.props.animal.id}`}>Details</Link>
          </div>
      </Card>
    );
  }
}

export default AnimalCard;