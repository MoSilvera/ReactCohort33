import React, { Component } from 'react'
//import the components we will need
import LocationCard from './LocationCard'
import LocationManager from '../../modules/LocationManager'

class LocationList extends Component {
    //define what this component needs to render
    state = {
        locations: [],
    }

    deleteLocation = id => {
      LocationManager.delete(id)
      .then(() => {
        LocationManager.getAll()
        .then((newLocations) => {
          this.setState({
              locations: newLocations
          })
        })
      })
    }

componentDidMount(){

    LocationManager.getAll()
    .then((locations) => {
        this.setState({
            locations: locations
        })
    })
}

render(){
    return(
      <div className="cards">
        {this.state.locations.map(location =>
          <LocationCard key={location.id} location={location} />
        )}
      </div>
    )
  }
}

export default LocationList