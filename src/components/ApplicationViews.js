import { Route, Redirect } from 'react-router-dom'
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
import AnimalForm from './animal/AnimalForm'
import Login from './authentication/Login'
import AnimalEditForm from './animal/AnimalEditForm'


class ApplicationViews extends Component {
  state = {
    animals: [],
    employees: []
}


isAuthenticated = () => sessionStorage.getItem("credentials") !== null

addAnimal = animal =>
  AnimalManager.post(animal)
    .then(() => AnimalManager.getAll())
    .then(animals =>
      this.setState({
        animals: animals
      })
    );

deleteAnimal = id => {
  AnimalManager.delete(id)
  .then(() => {
    AnimalManager.getAll()
    .then((newAnimals) => {
      this.setState({
          animals: newAnimals
      })
    })
    .then(() => this.props.history.push("/animals"))
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
updateAnimal = (editedAnimalObject) => {
  return AnimalManager.put(editedAnimalObject)
  .then(() => AnimalManager.getAll())
  .then(animals => {
    this.setState({
      animals: animals
    })
  });
};


  render() {
    return (
      <React.Fragment>
        <Route path="/login" component={Login} />

        <Route
          exact path="/animals/:animalId(\d+)/edit" render={props => {
            return <AnimalEditForm {...props} employees={this.state.employees} updateAnimal={this.updateAnimal}/>
          }}
        />
        <Route exact path="/" render={(props) => {
          if(this.isAuthenticated()){
            return <Home />
          }
          else{
            return <Redirect to="/login" />
          }
        }} />
        <Route exact path="/animals" render={(props) => {
          if (this.isAuthenticated())
          {
            return <AnimalList {...props}/>
          }
          else{
            return <Redirect to="/login" />
          }
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
        <Route exact path="/animals/:animalId(\d+)" render={(props) => {
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
        <Route path="/animals/new" render={(props) => {
        return <AnimalForm {...props}
                       addAnimal={this.addAnimal}
                       employees={this.state.employees} />
}} />
      </React.Fragment>
    )
  }
}

export default withRouter(ApplicationViews)