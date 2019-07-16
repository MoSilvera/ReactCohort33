import { Route } from 'react-router-dom'
import React, { Component } from 'react'
import Home from './home/Home'
import AnimalCard from './animal/AnimalCard'
//only include these once they are built - previous practice exercise
import LocationCard from './location/LocationCard'
import EmployeeCard from './employee/EmployeeCard'
import OwnerCard from './owner/OwnerCard'
import OwnerList from './owner/OwnerList'
import AnimalList from './animal/AnimalList'
import EmployeeList from './employee/EmployeeList'
import LocationList from './location/LocationList'
import AnimalManager from '../modules/AnimalManager'
import AnimalDetail from './animal/AnimalDetail'
import EmployeeManager from '../modules/EmployeeManager'
import { withRouter } from 'react-router'


class ApplicationViews extends Component {
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


  render() {
    return (
      <React.Fragment>
        <Route exact path="/" render={(props) => {
          return <Home />
        }} />
        <Route exact path="/animals" render={(props) => {
          return <AnimalList />
        }} />
        <Route exact path="/employees" render={(props) => {
          return <EmployeeList />
        }} />
        <Route exact path="/owners" render={(props) => {
          return <OwnerList />
        }} />
        <Route exact path ="/locations" render={(props) =>{
          return <LocationList />
        }} />
        <Route path="/animals/:animalId(\d+)" render={(props) => {
          console.log("hi")
            let animal = this.state.animals.find(animal =>
              animal.id === parseInt(props.match.params.animalId)
          )
          if (!animal) {
              animal = {id:404, name:"404", breed: "Dog not found"}
          }
           return <AnimalDetail
                    animal={animal}
                    deleteAnimal={this.deleteAnimal}
           />
        }} />
      </React.Fragment>
    )
  }
}

export default withRouter(ApplicationViews)