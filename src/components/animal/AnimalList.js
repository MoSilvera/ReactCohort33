import React, { Component } from 'react'
//import the components we will need
import AnimalCard from './AnimalCard'
import AnimalManager from '../../modules/AnimalManager'
import EmployeeManager from '../../modules/EmployeeManager'
import { withRouter } from 'react-router'
import 'bootstrap/dist/css/bootstrap.css';
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
    .then((animals) => {
        newState.animals = animals
    })
    .then (EmployeeManager.getAll()
        .then((employees) =>  {
            newState.employees = employees
        }).then (() => {this.setState(newState)})
        )
}

render(){

    return(
      <React.Fragment>
        <div className="animalButton">
                    <button type="button"
                            className="btn btn-success"
                            onClick={() => {
                                this.props.history.push("/animals/new")}
                            }>
                        Admit Animal
                    </button>
                </div>
      <div className="cards">
        {this.state.animals.map(animal =>
          <AnimalCard
            key={animal.id} animal={animal}
            employees={this.state.employees}
            deleteAnimal ={this.deleteAnimal}
            {...this.props}/>
        )}
      </div>
      </React.Fragment>
    )
  }
}

export default withRouter(AnimalList)