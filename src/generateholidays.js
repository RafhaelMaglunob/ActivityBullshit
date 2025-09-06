// generateHolidays.js
import fs from "fs";
import Holidays from "date-holidays";

const hd = new Holidays("PH");

// Exact holidays/observances to keep
const keepHolidays = [
  "New Year's Day",
  "First Philippine Republic Day",
  "Lailatul Isra Wal Mi Raj",
  "Lunar New Year's Day",
  "People Power Anniversary",
  "Ramadan Start",
  "Eidul-Fitar",
  "Eidul-Fitr",
  "Eidul-Fitr Holiday",
  "The Day of Valor",
  "March Equinox",
  "Maundy Thursday",
  "Good Friday",
  "Black Saturday",
  "Easter Sunday",
  "Labor Day",
  "National and Local Election Holiday",
  "Eid al-Adha (Feast of the Sacrifice)",
  "Eid al-Adha Day 2",
  "Independence Day",
  "June Solstice",
  "Amun Jadid",
  "Founding Anniversary of Iglesia ni Cristo",
  "Ninoy Aquino Day",
  "National Heroes Day",
  "Yamashita Surrender Day",
  "Mawlid un-Nabi",
  "Feast of the Nativity of Mary",
  "September Equinox",
  "Special non-working Day",
  "All Saints' Day",
  "All Souls' Day",
  "Sheikh Karim’ul Makhdum Day",
  "Bonifacio Day",
  "Feast of the Immaculate Conception",
  "December Solstice",
  "Christmas Eve",
  "Christmas Day"
];

// Predefined Chinese New Year dates 1960–2025
const chineseNewYears = {
  1960: "1960-02-18", 1961: "1961-02-08", 1962: "1962-01-28", 1963: "1963-02-15",
  1964: "1964-02-05", 1965: "1965-01-26", 1966: "1966-02-14", 1967: "1967-02-03",
  1968: "1968-01-23", 1969: "1969-02-11", 1970: "1970-01-31", 1971: "1971-02-18",
  1972: "1972-02-07", 1973: "1973-01-27", 1974: "1974-02-15", 1975: "1975-02-03",
  1976: "1976-01-23", 1977: "1977-02-11", 1978: "1978-01-31", 1979: "1979-02-19",
  1980: "1980-02-08", 1981: "1981-01-28", 1982: "1982-02-16", 1983: "1983-02-05",
  1984: "1984-02-24", 1985: "1985-02-13", 1986: "1986-02-02", 1987: "1987-02-20",
  1988: "1988-02-09", 1989: "1989-01-29", 1990: "1990-02-17", 1991: "1991-02-06",
  1992: "1992-01-27", 1993: "1993-02-14", 1994: "1994-02-03", 1995: "1995-01-23",
  1996: "1996-02-19", 1997: "1997-02-07", 1998: "1998-01-28", 1999: "1999-02-16",
  2000: "2000-02-05", 2001: "2001-01-24", 2002: "2002-02-12", 2003: "2003-02-01",
  2004: "2004-01-22", 2005: "2005-02-09", 2006: "2006-01-29", 2007: "2007-02-18",
  2008: "2008-02-07", 2009: "2009-01-26", 2010: "2010-02-14", 2011: "2011-02-03",
  2012: "2012-01-23", 2013: "2013-02-10", 2014: "2014-01-31", 2015: "2015-02-19",
  2016: "2016-02-08", 2017: "2017-01-28", 2018: "2018-02-16", 2019: "2019-02-05",
  2020: "2020-01-25", 2021: "2021-02-12", 2022: "2022-02-01", 2023: "2023-01-22",
  2024: "2024-02-10", 2025: "2025-01-29",
};

const allYears = {};

for (let year = 1960; year <= 2025; year++) {
  // Fetch PH holidays
  let holidays = hd.getHolidays(year)
    .filter(h => keepHolidays.includes(h.name))
    .map(h => ({
      date: h.date,
      name: h.name,
      type: h.type
    }));

  // Add Chinese New Year manually if in list
  if (chineseNewYears[year] && keepHolidays.includes("Lunar New Year's Day")) {
    holidays.push({
      date: chineseNewYears[year],
      name: "Lunar New Year's Day",
      type: "observance"
    });
  }

  // Sort by date
  holidays.sort((a, b) => new Date(a.date) - new Date(b.date));

  allYears[year] = holidays;
}

// Save to JSON
fs.writeFileSync("holidays.json", JSON.stringify(allYears, null, 2), "utf8");

console.log("✅ holidays.json generated for 1960–2025 with exact PH holidays!");
