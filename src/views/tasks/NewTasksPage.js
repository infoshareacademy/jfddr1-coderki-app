import React from 'react';
// import firebase from 'firebase/app';
import db from '../../Firebase/firebase';

class Task extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      place: '',
    };
  }

  updateInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  addUser = (e) => {
    e.preventDefault();
    db.collection('tasks').add({
      title: this.state.title,
      place: this.state.place,
    });
    this.setState({
      title: '',
      place: '',
    });
  };

  render() {
    return (
      <>
        <h1 style={{ textAlign: 'center' }}>Hello :)</h1>
        <form onSubmit={this.addUser}>
          <input
            type="text"
            name="title"
            placeholder="Task name"
            onChange={this.updateInput}
            value={this.state.title}
          />
          <input
            type="text"
            name="place"
            placeholder="Place"
            onChange={this.updateInput}
            value={this.state.place}
          />
          <button type="submit">CREATE TASK</button>
        </form>
      </>
    );
  }
}
export default Task;
