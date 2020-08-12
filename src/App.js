import React, {Component}  from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
import BlogPost from './BlogPost/BlogPost';
import CommentList from './CommentList/CommentList';

class App extends Component {
  state = {
    name: 'ninh',
    age: 1
  }
  constructor(props) {
    super(props);
  }

  static getDerivedStateFromProps() {
    return null;
  }

  componentDidMount() {
  }

  changePerson = () => {
    this.setState({
      name: 'ly',
      age: 2
    })
  }

  render() {
    return(
        <div>
          <h1>Hi, Nii</h1>
          <Person click={this.changePerson} name={this.state.name} age={this.state.age}/>
          <CommentList/>
          <BlogPost id={2}/>
        </div>
    );
  }
}

export default App;
