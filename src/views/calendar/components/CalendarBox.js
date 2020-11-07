import React, { Component } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';

import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

export class CalendarBox extends Component {
  state = {
    events: [
      {
        start: moment().toDate(),
        end: moment().add(1, 'days').toDate(),
        title: 'Some title',
      },
    ],
  };

  render() {
    return (
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
          events={this.state.events}
        />
      </div>
    );
  }
}

// export default CalendarBox;
