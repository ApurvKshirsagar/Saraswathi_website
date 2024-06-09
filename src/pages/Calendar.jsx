
import React, { useState } from "react";
import EventCard from "../components/EventCard";
import "../styles/Calendar.css";

const Calendar = () => {
  const [events, setEvents] = useState([
    {
      id: 1,
      headline: "Event 1",
      description: "Description 1",
      time: "10:00 AM",
      date: "05-01-2025",
    },
    {
      id: 2,
      headline: "Event 2",
      description: "Description 2",
      time: "1:00 PM",
      date: "01-02-2025",
    },
    {
      id: 3,
      headline: "Event 3",
      description: "Description 3",
      time: "3:30 PM",
      date: "01-05-2025",
    },
  ]);

  const [searchQuery, setSearchQuery] = useState("");
  const [searchMonth, setSearchMonth] = useState("");
  const [searchDate, setSearchDate] = useState("");
  const [filteredEvents, setFilteredEvents] = useState(events); 

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleMonthInputChange = (e) => {
    setSearchMonth(e.target.value);
  };

  const handleDateInputChange = (e) => {
    setSearchDate(e.target.value);
  };

  const handleSearchClick = () => {
    const filteredEvents = events.filter((event) => {
      const eventDateParts = event.date.split("-");
      const eventMonth = eventDateParts[1];
      const eventDate = eventDateParts[0];
      console.log("month is ",eventMonth);
      console.log("event date is ",eventDate);
      console.log("search month is ",searchMonth);
      console.log("search date is ",searchDate);
      const monthMatch = searchMonth ? eventMonth === searchMonth : true;
      const dateMatch = searchDate ? eventDate === searchDate : true;

      return (
        event.headline.toLowerCase().includes(searchQuery.toLowerCase()) &&
        monthMatch &&
        dateMatch
      );
    });

    setFilteredEvents(filteredEvents);
  };

  return (
    <div className="calendar">
      <h1 className="event-calendar-h1">Event Calendar</h1>
      <h2 className="event-calendar-h2">June 2024</h2>
      <div className="search-bar-container">
        <div className="search-group1">
          <select
            value={searchMonth}
            onChange={handleMonthInputChange}
            className="search-bar-month"
          >
            <option value="">Month</option>
            <option value="01">January</option>
            <option value="02">February</option>
            <option value="03">March</option>
            <option value="04">April</option>
            <option value="05">May</option>
            <option value="06">June</option>
            <option value="07">July</option>
            <option value="08">August</option>
            <option value="09">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
          <select
            value={searchDate}
            onChange={handleDateInputChange}
            className="search-bar-date"
          >
            <option value="">Date</option>
            {[...Array(31)].map((_, i) => (
              <option key={i + 1} value={(i + 1).toString().padStart(2, "0")}>
                {(i + 1).toString().padStart(2, "0")}
              </option>
            ))}
          </select>
          <button onClick={handleSearchClick} className="go-button">
            GO
          </button>
        </div>
        <div className="search-group2">
          <input
            type="text"
            placeholder="Search by event name..."
            value={searchQuery}
            onChange={handleSearchInputChange}
            className="search-bar"
          />
          <button onClick={handleSearchClick} className="event-search-button">
            Search
          </button>
        </div>
      </div>

      <div className="event-cards">
        {filteredEvents.map((event) => (
          <EventCard
            key={event.id}
            headline={event.headline}
            description={event.description}
            time={event.time}
            date={event.date}
          />
        ))}
      </div>
    </div>
  );
};

export default Calendar;
