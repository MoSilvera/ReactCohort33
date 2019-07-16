import React, { Component } from 'react'
//import the components we will need
import EmployeeCard from './EmployeeCard'
import EmployeeManager from '../../modules/EmployeeManager'

class EmployeeList extends Component {
    //define what this component needs to render
    state = {
        employees: [],
    }

    deleteEmployee = id => {
      EmployeeManager.delete(id)
      .then(() => {
        EmployeeManager.getAll()
        .then((newEmployees) => {
          this.setState({
              employees: newEmployees
          })
        })
      })
    }
componentDidMount(){

    EmployeeManager.getAll()
    .then((employees) => {
        this.setState({
            employees: employees
        })
    })
}

render(){
    return(
      <div className="cards">
        {this.state.employees.map(employee =>
          <EmployeeCard
            key={employee.id}
            employee={employee}
            deleteEmployee = {this.deleteEmployee}
             />
        )}
      </div>
    )
  }
}

export default EmployeeList