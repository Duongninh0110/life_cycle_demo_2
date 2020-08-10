import React, {Component}  from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    name: 'ninh',
    age: 1
  }
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }

  static getDerivedStateFromProps() {
    console.log('[App.js] getDerivedStateFromProps');
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  changePerson = () => {
    this.setState({
      name: 'ly',
      age: 2
    })
  }

  render() {
    console.log('[App.js] render');
    return(
        <div>
          <h1>Hi, Nii</h1>
          <Person click={this.changePerson} name={this.state.name} age={this.state.age}/>
        </div>
    );
  }
}

export default App;
