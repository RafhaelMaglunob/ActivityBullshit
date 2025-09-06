// generateHolidays.js
import fs from "fs";
import Holidays from "date-holidays";

const hd = new Holidays("PH"); // PH = Philippines

const allYears = {};
for (let year = 1960; year <= 2025; year++) {
  const holidays = hd.getHolidays(year).map((h) => ({
    date: h.date,   // full YYYY-MM-DD
    name: h.name,   // holiday name
    type: h.type,   // optional: "public", "observance", etc.
  }));
  allYears[year] = holidays;
}

fs.writeFileSync("holidays.json", JSON.stringify(allYears, null, 2), "utf8");

console.log("✅ holidays.json generated for 1960–2025!");
