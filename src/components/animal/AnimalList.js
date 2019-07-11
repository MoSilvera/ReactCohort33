import React, { Component } from 'react'
//import the components we will need
import AnimalCard from './AnimalCard'
import AnimalManager from '../../modules/AnimalManager'
import EmployeeManager from '../../modules/EmployeeManager'
class AnimalList extends Component {
    //define what this component needs to render
    state = {
        animals: [],
        employees: []
    }
    deleteAnimal = id => {
        AnimalManager.delete(id)
        .then(() => {
          AnimalManager.getAll()
          .then((newAnimals) => {
            this.setState({
                animals: newAnimals
            })
          })
        })
      }

componentDidMount(){
    const newState = {}
    AnimalManager.getAll()
    .then((animals) => { console.log(animals)
        newState.animals = animals
    })
    .then (EmployeeManager.getAll()
        .then((employees) =>  {
            newState.employees = employees
            console.log(newState)
        }).then (() => {this.setState(newState)})
        )
}

render(){
    console.log("AnimalList: Render");

    return(
      <div className="cards">
        {this.state.animals.map(animal =>
          <AnimalCard 
            key={animal.id} animal={animal} 
            employees={this.state.employees}
            deleteAnimal ={this.deleteAnimal}/>
        )}
      </div>
    )
  }
}

export default AnimalList