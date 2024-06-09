import React from "react";
import "../styles/EventCard.css"; 

const EventCard = ({ date, headline, description, time }) => {
  const formatDate = (dateStr) => {
    const [dayStr, monthStr, yearStr] = dateStr.split('-');

    const day = parseInt(dayStr);
    const month = parseInt(monthStr);
    const year = parseInt(yearStr);
    const dateObj = new Date(year, month - 1, day);
    
    const options = { day: 'numeric', month: 'long' };
    const formattedDate = dateObj.toLocaleDateString('en-US', options);
    const [formattedMonth, formattedDay] = formattedDate.split(' ');
    
    return { month: formattedMonth, day: formattedDay };
  };
  

  const { day, month } = formatDate(date);

  return (
    <div className="event-card">
      <div className="event-card-date-container">
        <p className="event-date">
          <span className="event-day">{day}</span>
          <span className="event-month">{month}</span>
        </p>
      </div>
      <div className="event-card-content">
        <h3 className="event-headline">{headline}</h3>
        <p className="event-description">{description}</p>
        <span className="event-time">{time}</span>
      </div>
    </div>
  );
};

export default EventCard;
