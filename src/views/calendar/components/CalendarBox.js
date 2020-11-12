import React, { useContext, useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import { TasksContext } from '../../../TasksContext';
import { Tasks } from './../../../components/Tasks';

// import 'react-big-calendar/lib/css/react-big-calendar.css';
import './calendarBox.css';

const localizer = momentLocalizer(moment);

export function CalendarBox(props) {
  const { tasks } = useContext(TasksContext);
  const [clickedTask, setClickedTask] = useState();
  console.log(tasks);
  return (
    <>
      <div
        style={{
          height: '60vh',
          background: 'rgba(255, 255, 255, 0.5)',
          margin: 10,
          padding: 10,
        }}
      >
        <Calendar
          localizer={localizer}
          defaultDate={new Date()}
          defaultView="month"
          events={tasks}
          startAccessor="start"
          endAccessor="end"
          style={{ height: `100%` }}
          views={{
            month: true,
            // week: true,
            // day: true,
            // work_week: true,
          }}
          onSelectEvent={(event) => setClickedTask(event)}
        />
      </div>
      <div style={{ height: 400 }}>
        {clickedTask && <Tasks tasks={[clickedTask]} />}
      </div>
    </>
  );
}

export default CalendarBox;
