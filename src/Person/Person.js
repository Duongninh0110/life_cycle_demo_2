import React, {Component} from "react";
import styles from './Person.module.css'

class Person extends Component {
    constructor(props) {
        super(props);

    }

    // static getDerivedStateFromProps() {
    //     return null;
    // }

    componentDidMount() {
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        return { message: 'hiii'}
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

    }

    render() {
        return (
            <div className={styles.Person} onClick={this.props.click}>
                <p>{this.props.name}</p>
                <p>{this.props.age}</p>
            </div>
        );
    }
}

export default Person;