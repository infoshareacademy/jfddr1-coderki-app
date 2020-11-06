import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';

// const localizer = momentLocalizer(moment);

const CalendarPage = () => {
  return (
    <>
      <div>To jest Kalendarz</div>
      {/* <div>
        <Calendar
          localizer={localizer}
          //   events={myEventsList}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500 }}
        />
      </div> */}
    </>
  );
};

export default CalendarPage;
