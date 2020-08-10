import React, {Component} from "react";
import styles from './Person.module.css'

class Person extends Component {
    constructor(props) {
        super(props);
        console.log('[Person.js] constructor')

    }

    static getDerivedStateFromProps() {
        console.log('[Person.js] getDerivedStateFromProps');
    }

    componentDidMount() {
        console.log('[Person.js] componentDidMount');
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('[Person.js] shouldComponentUpdate');
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Person.js] getSnapshotBeforeUpdate');
        return { message: 'hiii'}
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[Person.js] componentDidUpdate');
        console.log('snapshot', snapshot)
    }

    render() {
        console.log('[Person.js] render');
        return (
            <div className={styles.Person} onClick={this.props.click}>
                <p>{this.props.name}</p>
                <p>{this.props.age}</p>
            </div>
        );
    }
}

export default Person;