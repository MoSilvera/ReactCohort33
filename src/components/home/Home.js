import React, { Component } from 'react';

class Home extends Component {
    render() {
      return (
        <div className="card">
          <div className="card-content">
            <h3>Employee: <span style={{color: 'darkslategrey'}}>Maddi</span></h3>
            <p>Address: 123 wtf way</p>
            <p>Phone: 8675309</p>
          </div>
        </div>
      );
    }
  }

  export default Home