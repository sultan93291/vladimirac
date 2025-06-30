"use client";

import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import useFetchData from "@/Hooks/UseFetchData";
import React, { useState, useEffect } from "react";

const years = Array.from({ length: 10 }, (_, i) => 2025 - i);
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function getFlagEmoji(code: string) {
  if (code.length !== 2) return "";
  const OFFSET = 0x1f1e6 - "A".charCodeAt(0);
  return (
    String.fromCodePoint(code.charCodeAt(0) + OFFSET) +
    String.fromCodePoint(code.charCodeAt(1) + OFFSET)
  );
}

const Holidays = () => {
  const {
    data: countryData,
    error,
    isLoading,
  } = useFetchData<{
    success: boolean;
    message: string;
    data: { id: number; name: string; code: string }[];
  }>("/countries");

  const [country, setCountry] = useState("");
  const [year, setYear] = useState(years[0]);
  const [month, setMonth] = useState(months[0]);
  const [calendarDate, setCalendarDate] = useState<Date | null>(null);
  const [holidayInfo, setHolidayInfo] = useState<
    { name: string; date: Date }[]
  >([]);

  const [fetchUrl, setFetchUrl] = useState<string | null>(null);
  const { data: holidayData, isLoading: loadingHolidays } = useFetchData<{
    success: boolean;
    message: string;
    data: {
      name: string;
      date: {
        iso: string;
      };
    }[];
  }>(fetchUrl);

  useEffect(() => {
    if (countryData?.data?.length) {
      setCountry(countryData.data[0].code.toLowerCase());
    }
  }, [countryData]);


  useEffect(() => {
    if (holidayData?.success && holidayData.data.length) {
      const parsed = holidayData.data.map(h => ({
        name: h.name,
        date: new Date(h.date.iso),
      }));
      setHolidayInfo(parsed);
      setCalendarDate(parsed[0]?.date || null);
    }
  }, [holidayData]);

  const handleSearch = () => {
    setFetchUrl(
      `/holidays?country_code=${country}&year=${year}&month=${
        months.indexOf(month) + 1
      }`
    );
  };

  const tileClassName = ({ date }: { date: Date }) =>
    holidayInfo.some(
      h =>
        h.date.getFullYear() === date.getFullYear() &&
        h.date.getMonth() === date.getMonth() &&
        h.date.getDate() === date.getDate()
    )
      ? "bg-pink-300 text-black font-semibold rounded-full"
      : "";

  const tileContent = ({ date }: { date: Date }) => {
    const match = holidayInfo.find(
      h =>
        h.date.getFullYear() === date.getFullYear() &&
        h.date.getMonth() === date.getMonth() &&
        h.date.getDate() === date.getDate()
    );
    return match ? (
      <span className="text-[10px] text-pink-600 block text-center">🎉</span>
    ) : null;
  };

  if (isLoading) return (
    <div className="flex justify-center items-center p-10">
      <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-16 w-16"></div>
      <style>{`
    .loader {
      border-top-color: #C83C7C;
      animation: spin 1s linear infinite;
    }
    @keyframes spin {
      0% { transform: rotate(0deg);}
      100% { transform: rotate(360deg);}
    }
  `}</style>
    </div>
  );
  if (error) return <p className="text-red-400">Error loading countries</p>;

  return (
    <div className="">
      <div className="flex gap-x-6 flex-wrap items-center p-4 rounded-md text-white mx-auto">
        <label className="flex items-center gap-2">
          Country:
          <select
            value={country}
            onChange={e => setCountry(e.target.value)}
            className="bg-[#1e293b] px-3 py-1 rounded border border-gray-600"
          >
            {countryData?.data.map(({ code, name }) => (
              <option key={code} value={code.toLowerCase()}>
                {getFlagEmoji(code)} {name}
              </option>
            ))}
          </select>
        </label>

        <label className="flex items-center gap-2">
          Year:
          <select
            value={year}
            onChange={e => setYear(Number(e.target.value))}
            className="bg-[#1e293b] px-3 py-1 rounded border border-gray-600"
          >
            {years.map(y => (
              <option key={y} value={y}>
                {y}
              </option>
            ))}
          </select>
        </label>

        <label className="flex items-center gap-2">
          Month:
          <select
            value={month}
            onChange={e => setMonth(e.target.value)}
            className="bg-[#1e293b] px-3 py-1 rounded border border-gray-600"
          >
            {months.map(m => (
              <option key={m} value={m}>
                {m}
              </option>
            ))}
          </select>
        </label>

        <button
          onClick={handleSearch}
          disabled={loadingHolidays}
          className="bg-[#db2777] hover:bg-[#be185d] px-4 py-1 rounded text-white font-semibold transition disabled:opacity-50 cursor-pointer"
        >
          {loadingHolidays ? "Searching..." : "Search"}
        </button>
      </div>

      <div className="mt-4 p-4 bg-white rounded-md w-fit">
        <Calendar
          onChange={date => setCalendarDate(date as Date)}
          value={calendarDate}
          tileClassName={tileClassName}
          tileContent={tileContent}
        />
      </div>

      {holidayInfo.length > 0 && (
        <div className="mt-4 bg-white p-4 rounded-md w-[830px] text-sm">
          <h2 className="font-bold mb-2 text-gray-800">Holidays:</h2>
          <ul className="list-disc pl-5 text-gray-700">
            {holidayInfo.map((h, index) => (
              <li key={`${h.name}${h.date.toISOString()}-${index}`}>
                {h.name} – {h.date.toDateString()}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Holidays;
