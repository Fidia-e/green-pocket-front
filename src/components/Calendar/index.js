// Import
import React from 'react';

// Local Import
import calendarLogo from '../../assets/images/Calendar.png';

import '../App/style.scss';
import './style.scss';

const Calendar = () => (
  <div className="section-right">
    <h1> Mon Calendrier</h1>
    <div>
      <div className="ui calendar" id="inline_calendar">
        <img src={calendarLogo} alt="calendar" />
      </div>
    </div>
  </div>
);

export default Calendar;
