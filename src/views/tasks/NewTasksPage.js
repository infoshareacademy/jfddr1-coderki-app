import React from 'react';
// import firebase from 'firebase/app';
import db from '../../Firebase/firebase';

class NewTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      place: '',
      category: '',
    };
  }

  updateInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  addTask = (e) => {
    e.preventDefault();
    db.collection('tasks').add({
      title: this.state.title,
      place: this.state.place,
      category: this.state.category,
    });
    this.setState({
      title: '',
      place: '',
      category: '',
    });
  };

  render() {
    return (
      <>
        <h1 style={{ textAlign: 'center' }}>Hello :)</h1>
        <form onSubmit={this.addTask}>
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
          <input
            type="text"
            name="category"
            placeholder="Category"
            onChange={this.updateInput}
            value={this.state.category}
          />
          <button type="submit">CREATE TASK</button>
        </form>
      </>
    );
  }
}
export default NewTask;
