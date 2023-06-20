import React, { useState } from 'react';
import DatePicker from 'react-datepicker';

const Datepicker = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div>
      <div className="input-group date" style={{marginTop: "-15px"}}>
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          className="form-control"
          placeholderText='Select date'
        />
        <div className="input-group-append date-picker-icon-wrapper">
          <span className="input-group-text icon">
            <i className="fa fa-calendar"></i>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Datepicker;