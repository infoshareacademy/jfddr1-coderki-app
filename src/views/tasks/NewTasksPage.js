import React from 'react';
// import firebase from 'firebase/app';
import db from '../../Firebase/firebase';
import styles from './NewTaskPage.module.css';

const NewTasksPage = () => {
  return (
    <div>
      <h1> Create new task </h1>
      <form>
        <input
          name="title"
          // onChange={(e) => setNewTask('title', e.target.value)}
          placeholder="Title"
          type="text"
          // value={title}
        />
        <input
          name="place"
          // onChange={(e) => setNewTask('title', e.target.value)}
          placeholder="Place"
          type="text"
          // value={place}
        />
        <div className={styles.inputContainer}>
          <input
            name="start"
            // onChange={(e) => setNewTask('title', e.target.value)}
            placeholder="Start"
            type="date"
            // value={start}
          />
          <input
            name="end"
            // onChange={(e) => setNewTask('title', e.target.value)}
            placeholder="End"
            type="date"
            // value={end}
          />{' '}
        </div>
        <p>Add members:</p>
        <input
          class="members-radiobutton"
          type="radio"
          name="members"
          value="mommy"
        />{' '}
        Mommy
        <input
          class="members-radiobutton"
          type="radio"
          name="members"
          value="daddy"
        />{' '}
        Daddy
        <input
          class="members-radiobutton"
          type="radio"
          name="members"
          value="child"
        />{' '}
        Kiddo
        <button>Work</button>
        <button
          name="sport"
          type="submit"
          // onClick={() => setSettings('familyRole', 'parent')}
          // value={repeat}
        >
          Sport
        </button>
        <button
          name="relax"
          type="submit"
          // onClick={() => setSettings('familyRole', 'parent')}
          // value={repeat}
        >
          Relax
        </button>
        <p>Task description</p>
        <input
          class="description"
          name="description"
          type="text"
          // onClick={() => setSettings('familyRole', 'parent')}
          // value={repeat}/
        />
        <div className={styles.buttonContainer}>
          <button
            name="reminder"
            type="submit"
            // onClick={() => setSettings('familyRole', 'parent')}
            // value={reminder}
          >
            Reminder
          </button>
          <button
            name="repeat"
            type="submit"
            // onClick={() => setSettings('familyRole', 'parent')}
            // value={repeat}
          >
            Repeat
          </button>
        </div>
        <button type="submit"> Save task</button>
      </form>
    </div>
  );
};

export default NewTasksPage;

// import React from 'react';
// // import firebase from 'firebase/app';
// import db from '../../Firebase/firebase';

// class NewTask extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       title: '',
//       place: '',
//       category: '',
//     };
//   }

//   updateInput = (e) => {
//     this.setState({
//       [e.target.name]: e.target.value,
//     });
//   };

//   addTask = (e) => {
//     e.preventDefault();
//     db.collection('tasks').add({
//       title: this.state.title,
//       place: this.state.place,
//       category: this.state.category,
//     });
//     this.setState({
//       title: '',
//       place: '',
//       category: '',
//     });
//   };

//   render() {
//     return (
//       <>
//         <h1 style={{ textAlign: 'center' }}>Hello :)</h1>
//         <form onSubmit={this.addTask}>
//           <input
//             type="text"
//             name="title"
//             placeholder="Task name"
//             onChange={this.updateInput}
//             value={this.state.title}
//           />
//           <input
//             type="text"
//             name="place"
//             placeholder="Place"
//             onChange={this.updateInput}
//             value={this.state.place}
//           />
//           <input
//             type="text"
//             name="category"
//             placeholder="Category"
//             onChange={this.updateInput}
//             value={this.state.category}
//           />
//           <button type="submit">CREATE TASK</button>
//         </form>
//       </>
//     );
//   }
// }
// export default NewTask;
