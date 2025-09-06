import React, { useState } from "react";
import "./Background.css";
import holidaysData from "./holidays.json";

function Content({ hidden = true }) {
  const startYear = 1960;
  const yearRange = Array.from(
    { length: 2025 - startYear + 1 },
    (_, i) => startYear + i
  );

  const monthNames = [
    "January","February","March","April","May","June",
    "July","August","September","October","November","December"
  ];

  const dayNames = [
    "Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"
  ];

  const [formData, setFormData] = useState({
    year: 2025,
    month: monthNames[0],
    day: dayNames[0],
  });

  const [holidaysInYear, setHolidaysInYear] = useState([]);
  const [checkedDays, setCheckedDays] = useState([]);
  const [checkedOutput, setCheckedOutput] = useState([]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const toggleCheckedDay = (day) => {
    setCheckedDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    );
  };

  // Use JSON holidays and apply selected year
  // ✅ FIX getHolidays to match new JSON structure
    const getHolidays = (year) => {
        const holidaysForYear = holidaysData[year] || [];

        return holidaysForYear.map((h) => ({
            date: h.date, 
            name: h.name,
        }));
    };


  const handleSubmit = (e) => {
    e.preventDefault();
    const { year, month } = formData;
    const monthIndex = monthNames.indexOf(month);

    // ✅ get holidays for selected year
    const holidays = getHolidays(year).filter((h) => {
        const holidayMonth = new Date(h.date).getMonth();
        return holidayMonth >= monthIndex;
    });

    setHolidaysInYear(holidays);
    setCheckedOutput([]);
  };


  const handleCheckDays = () => {
    if (checkedDays.length === 0) {
      setCheckedOutput([["No days selected"]]);
      return;
    }

    const { year, month } = formData;
    const monthIndex = monthNames.indexOf(month);
    const totalDays = new Date(year, monthIndex + 1, 0).getDate();
    const results = [];
    for (let i = 1; i <= totalDays; i++) {
      const d = new Date(year, monthIndex, i);
      const weekday = d.toLocaleString("en-US", { weekday: "long" });
      if (checkedDays.includes(weekday)) {
        results.push(i);
      }
    }

    // 🔹 Build "drop pyramid"
    const pyramid = [];
    let index = 0;
    let rowSize = 1;

    while (index < results.length) {
      let nextRow = results.slice(index, index + rowSize);
      index += rowSize;

      if (nextRow.length < rowSize && pyramid.length > 0) {
        pyramid[pyramid.length - 1] = [
          ...pyramid[pyramid.length - 1],
          ...nextRow,
        ];
        break;
      }

      pyramid.push(nextRow);

      if (rowSize < 3) {
        rowSize++;
      }
    }

    setCheckedOutput(pyramid);
  };
  

  const { chosenDayDates, chosenDayCount } = (() => {
    const monthIndex = monthNames.indexOf(formData.month);
    const totalDays = new Date(formData.year, monthIndex + 1, 0).getDate();
    const targetDayIndex = dayNames.indexOf(formData.day);
    const dates = [];

    for (let i = 1; i <= totalDays; i++) {
      const d = new Date(formData.year, monthIndex, i);
      if (d.getDay() === targetDayIndex) {
        dates.push(`${formData.month} ${i}`);
      }
    }

    return { chosenDayDates: dates, chosenDayCount: dates.length };
  })();
  
  if (hidden) return null;

  return (
    <div className={`content-container ${hidden ? "hidden" : "show"}`}>
      <div className="content-inner">
        <h2>Date Filter Tool</h2>

        {/* Dropdown Form */}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Year</label>
            <select name="year" value={formData.year} onChange={handleChange}>
              {yearRange.map((y) => (
                <option key={y} value={y}>
                  {y}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label>Month</label>
            <select name="month" value={formData.month} onChange={handleChange}>
              {monthNames.map((m) => (
                <option key={m} value={m}>
                  {m}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label>Day</label>
            <select name="day" value={formData.day} onChange={handleChange}>
              {dayNames.map((d) => (
                <option key={d} value={d}>
                  {d}
                </option>
              ))}
            </select>
          </div>

          <button type="submit">Show Holidays</button>
        </form>

        {/* Holidays Output */}
        {holidaysInYear.length > 0 && (
          <div style={{ marginTop: "20px", color: "white" }}>
            <h3>
              <p>
                On the month of "{formData.month}" the number of "{formData.day}"
                in Year "{formData.year}" are "{chosenDayDates.join(", ")}" 
                based on counting the number of {formData.day} are: "{chosenDayCount}"
              </p>

              
              <p>For the year: "{formData.year}" the number of holidays are the following:</p>
              
            </h3>
            <table
              border="1"
              cellPadding="6"
              style={{
                borderCollapse: "collapse",
                color: "white",
                width: "100%",
                textAlign: "left",
              }}
            >
              <thead>
                <tr>
                  <th style={{ width: "120px" }}>Date</th>
                  <th>Holiday Name</th>
                </tr>
              </thead>
              <tbody>
                {[...holidaysInYear]
                    .sort((a, b) => {
                    const dateA = new Date(a.date);
                    const dateB = new Date(b.date);

                    const monthA = dateA.toLocaleDateString("en-US", { month: "long" });
                    const monthB = dateB.toLocaleDateString("en-US", { month: "long" });

                    // sort by month name length
                    if (monthA.length !== monthB.length) {
                        return monthA.length - monthB.length;
                    }

                    // if same length, sort by day
                    return dateA.getDate() - dateB.getDate();
                    })
                    .map((h, idx) => {
                    const date = new Date(h.date);
                    const monthName = date.toLocaleDateString("en-US", { month: "long" });
                    const monthLength = monthName.length;
                    const day = date.getDate();

                    return (
                        <tr key={idx}>
                        <td>
                            {monthName} {day}
                        </td>
                        <td>{h.name}</td>
                        </tr>
                    );
                    })}
                </tbody>


            </table>
          </div>
        )}

        {/* Checkbox Section */}
        <div style={{ marginTop: "40px", color: "white" }}>
          <h3>Select Days of Week</h3>
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            {dayNames.map((d) => (
              <label key={d}>
                <input
                  type="checkbox"
                  checked={checkedDays.includes(d)}
                  onChange={() => toggleCheckedDay(d)}
                />
                {d}
              </label>
            ))}
          </div>
          <button onClick={handleCheckDays} style={{ marginTop: "10px" }}>
            Check Dates
          </button>

          {/* Checker Pyramid */}
          {checkedOutput.length > 0 && (
            <div style={{ marginTop: "20px" }}>
              {checkedOutput.map((row, idx) => (
                <div
                  key={idx}
                  style={{ textAlign: "left", whiteSpace: "pre" }}
                >
                  {row.join("")}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Content;
