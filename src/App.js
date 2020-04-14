import React from 'react';
import DisplayEmployee from './components/DisplayEmployee';

import axios from 'axios';

const sampleEmployee = {
  lastname: 'petit garcon content',
  description: 'france',
 
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employee: sampleEmployee
    };
 this.getEmployee = this.getEmployee.bind(this);
  }


  getEmployee() {
    // Send the request
    axios.get('https://api-jumanji.herokuapp.com/api/users')
      // Extract the DATA from the received response
      .then(response => response.data)
      // Use this data to update the state
      .then(data => {
        console.log(data)
        const index = Math.floor((Math.random()*(data.length -1)))
        this.setState({
          employee: data[index]
       ,
        });
    });
  }
  


  render() {
    return (
      <div className="App">
        <DisplayEmployee employee={this.state.employee} />
        <button type="button" onClick={this.getEmployee}>Get employee</button>
        
      </div>
    );
  }
}

export default App;
