// "use client";

// import { useState } from "react";
// import { MapPin } from "lucide-react";
// import { Button } from "@/Components/ui/button";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/Components/ui/select";

// const DestinationsMap = () => {
//   const [selectedDestination, setSelectedDestination] = useState<string>("");

//   const destinations = [
//     { id: "1", name: "United Kingdom", city: "London", x: 15, y: 35 },
//     { id: "2", name: "Norway", city: "Oslo", x: 45, y: 15 },
//     { id: "3", name: "Finland", city: "Helsinki", x: 65, y: 12 },
//     { id: "4", name: "Germany", city: "Berlin", x: 45, y: 45 },
//     {
//       id: "5",
//       name: "Poland",
//       city: "Warsaw",
//       x: 55,
//       y: 40,
//       highlighted: true,
//     },
//     { id: "6", name: "France", city: "Paris", x: 25, y: 55 },
//     { id: "7", name: "Spain", city: "Madrid", x: 15, y: 70 },
//     { id: "8", name: "Italy", city: "Rome", x: 45, y: 65 },
//     { id: "9", name: "Greece", city: "Athens", x: 60, y: 75 },
//     { id: "10", name: "Romania", city: "Bucharest", x: 65, y: 55 },
//   ];

//   const handleDestinationSelect = (destinationId: string) => {
//     setSelectedDestination(destinationId);
//     const destination = destinations.find(d => d.id === destinationId);
//     if (destination) {
//       console.log(`Selected: ${destination.city}, ${destination.name}`);
//     }
//   };

//   return (
//     <div className="w-full max-w-6xl mx-auto">
//       <h1 className="text-3xl font-bold text-pink-400 text-center mb-8">
//         Destinations covered
//       </h1>

//       {/* Destination Selector */}
//       <div className="mb-8 flex flex-col sm:flex-row gap-4 items-center justify-center">
//         <div className="flex items-center gap-2">
//           <MapPin className="h-5 w-5 text-pink-400" />
//           <span className="text-gray-300 font-medium">Select Destination:</span>
//         </div>

//         <Select
//           value={selectedDestination}
//           onValueChange={handleDestinationSelect}
//         >
//           <SelectTrigger className="w-[280px] bg-slate-700 border-slate-600 text-white">
//             <SelectValue placeholder="Choose a destination..." />
//           </SelectTrigger>
//           <SelectContent className="bg-slate-700 border-slate-600">
//             {destinations.map(destination => (
//               <SelectItem
//                 key={destination.id}
//                 value={destination.id}
//                 className="text-white hover:bg-slate-600 focus:bg-slate-600"
//               >
//                 <div className="flex items-center gap-2">
//                   <MapPin className="h-4 w-4 text-pink-400" />
//                   <span>
//                     {destination.city}, {destination.name}
//                   </span>
//                 </div>
//               </SelectItem>
//             ))}
//           </SelectContent>
//         </Select>

//         {selectedDestination && (
//           <Button
//             variant="outline"
//             size="sm"
//             className="border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-white"
//             onClick={() => {
//               const destination = destinations.find(
//                 d => d.id === selectedDestination
//               );
//               if (destination) {
//                 alert(`Navigating to ${destination.city}, ${destination.name}`);
//               }
//             }}
//           >
//             <MapPin className="h-4 w-4 mr-2" />
//             Go to Location
//           </Button>
//         )}
//       </div>

//       <div className="relative bg-slate-800 rounded-lg p-8">
//         <svg
//           viewBox="0 0 100 100"
//           className="w-full h-auto"
//           style={{ minHeight: "400px" }}
//         >
//           {/* Europe Map Outline - Simplified */}
//           <g fill="#9CA3AF" stroke="#6B7280" strokeWidth="0.2">
//             {/* United Kingdom */}
//             <path d="M8,25 L18,22 L20,28 L22,35 L18,38 L12,40 L8,35 Z" />
//             {/* Ireland */}
//             <path d="M2,30 L8,28 L10,35 L6,38 L2,35 Z" />
//             {/* Norway */}
//             <path d="M40,5 L48,8 L50,20 L45,25 L42,20 L40,12 Z" />
//             {/* Sweden */}
//             <path d="M45,8 L52,10 L55,25 L50,28 L45,25 Z" />
//             {/* Finland */}
//             <path d="M55,5 L65,8 L68,20 L62,25 L55,22 Z" />
//             {/* France */}
//             <path d="M20,45 L35,42 L38,55 L35,65 L25,68 L18,60 L20,50 Z" />
//             {/* Spain */}
//             <path d="M8,60 L25,58 L28,70 L25,78 L15,80 L8,75 Z" />
//             {/* Germany */}
//             <path d="M35,35 L50,32 L52,45 L48,50 L35,48 Z" />
//             {/* Poland - Highlighted */}
//             <path
//               d="M50,30 L65,28 L68,42 L62,48 L50,45 Z"
//               fill={
//                 destinations.find(d => d.highlighted) ? "#EC4899" : "#9CA3AF"
//               }
//             />
//             {/* Italy */}
//             <path d="M40,55 L48,52 L52,70 L48,78 L42,75 L38,65 Z" />
//             {/* Greece */}
//             <path d="M55,65 L65,62 L68,75 L62,80 L55,78 Z" />
//             {/* Other European countries - simplified shapes */}
//             <path d="M65,35 L78,32 L82,45 L75,50 L65,48 Z" /> {/* Romania */}
//             <path d="M35,48 L50,45 L52,58 L45,62 L35,60 Z" />{" "}
//             {/* Austria/Czech */}
//             <path d="M20,38 L35,35 L38,48 L32,52 L20,50 Z" />{" "}
//             {/* Belgium/Netherlands */}
//           </g>

//           {/* Destination Markers */}
//           {destinations.map(destination => {
//             const isSelected = selectedDestination === destination.id;
//             return (
//               <g key={destination.id}>
//                 <circle
//                   cx={destination.x}
//                   cy={destination.y}
//                   r={isSelected ? "3" : "2"}
//                   fill="#EC4899"
//                   className={`cursor-pointer hover:fill-pink-300 transition-all duration-200 ${
//                     isSelected ? "animate-pulse" : ""
//                   }`}
//                   onClick={() => setSelectedDestination(destination.id)}
//                 />
//                 <circle
//                   cx={destination.x}
//                   cy={destination.y}
//                   r="1"
//                   fill="#1E293B"
//                 />
//                 {isSelected && (
//                   <text
//                     x={destination.x}
//                     y={destination.y - 5}
//                     textAnchor="middle"
//                     className="fill-pink-400 text-xs font-semibold"
//                     style={{ fontSize: "3px" }}
//                   >
//                     {destination.city}
//                   </text>
//                 )}
//               </g>
//             );
//           })}
//         </svg>

//         {/* Selected Destination Info */}
//         {selectedDestination && (
//           <div className="mt-6 p-4 bg-slate-700 rounded-lg">
//             <div className="flex items-center gap-2 text-pink-400">
//               <MapPin className="h-5 w-5" />
//               <h3 className="font-semibold">Selected Destination</h3>
//             </div>
//             <p className="text-gray-300 mt-2">
//               {destinations.find(d => d.id === selectedDestination)?.city},{" "}
//               {destinations.find(d => d.id === selectedDestination)?.name}
//             </p>
//           </div>
//         )}

//         {/* Legend */}
//         <div className="mt-6 text-center">
//           <p className="text-gray-300 text-sm">
//             {destinations.length} destinations across Europe
//           </p>
//           <div className="flex items-center justify-center gap-4 mt-2 text-xs text-gray-400">
//             <div className="flex items-center gap-1">
//               <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
//               <span>Available destinations</span>
//             </div>
//             <div className="flex items-center gap-1">
//               <div className="w-2 h-2 bg-pink-500 rounded-full animate-pulse"></div>
//               <span>Selected destination</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DestinationsMap;




"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Search } from "lucide-react";
import { Button } from "@/Components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/Components/ui/select";

const BookingCalendar = () => {
  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const [selectedCity, setSelectedCity] = useState<string>("");
  const [selectedMonth, setSelectedMonth] = useState<string>("January");
  const [selectedDates, setSelectedDates] = useState<number[]>([1, 6]);
  const [currentMonth, setCurrentMonth] = useState(0); // 0 = January
  console.log(currentMonth);
  

  const countries = [
    { value: "poland", label: "🇵🇱 Poland" },
    { value: "germany", label: "🇩🇪 Germany" },
    { value: "france", label: "🇫🇷 France" },
    { value: "spain", label: "🇪🇸 Spain" },
    { value: "italy", label: "🇮🇹 Italy" },
  ];

  const cities = {
    poland: ["Warsaw", "Krakow", "Gdansk"],
    germany: ["Berlin", "Munich", "Hamburg"],
    france: ["Paris", "Lyon", "Marseille"],
    spain: ["Madrid", "Barcelona", "Valencia"],
    italy: ["Rome", "Milan", "Naples"],
  };

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

  const daysOfWeek = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

  // Get days in month (simplified - assuming 31 days for demo)
  const getDaysInMonth = () => {
    return Array.from({ length: 31 }, (_, i) => i + 1);
  };

  const handleDateClick = (date: number) => {
    setSelectedDates(prev => {
      if (prev.includes(date)) {
        return prev.filter(d => d !== date);
      } else {
        return [...prev, date];
      }
    });
  };

  const availableDates = [1, 3, 6, 8, 12, 15, 18, 22, 25, 28, 30]; // Mock available dates

  return (
    <div className="w-full max-w-md mx-auto bg-slate-800 rounded-lg p-6">
      {/* Header Controls */}
      <div className="space-y-4 mb-6">
        <div className="grid grid-cols-3 gap-2">
          <Select value={selectedCountry} onValueChange={setSelectedCountry}>
            <SelectTrigger className="bg-slate-700 border-slate-600 text-white text-sm">
              <SelectValue placeholder="Country" />
            </SelectTrigger>
            <SelectContent className="bg-slate-700 border-slate-600">
              {countries.map(country => (
                <SelectItem
                  key={country.value}
                  value={country.value}
                  className="text-white hover:bg-slate-600 focus:bg-slate-600"
                >
                  {country.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select
            value={selectedCity}
            onValueChange={setSelectedCity}
            disabled={!selectedCountry}
          >
            <SelectTrigger className="bg-slate-700 border-slate-600 text-white text-sm">
              <SelectValue placeholder="City" />
            </SelectTrigger>
            <SelectContent className="bg-slate-700 border-slate-600">
              {selectedCountry &&
                cities[selectedCountry as keyof typeof cities]?.map(city => (
                  <SelectItem
                    key={city}
                    value={city.toLowerCase()}
                    className="text-white hover:bg-slate-600 focus:bg-slate-600"
                  >
                    {city}
                  </SelectItem>
                ))}
            </SelectContent>
          </Select>

          <Select value={selectedMonth} onValueChange={setSelectedMonth}>
            <SelectTrigger className="bg-slate-700 border-slate-600 text-white text-sm">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-slate-700 border-slate-600">
              {months.map(month => (
                <SelectItem
                  key={month}
                  value={month}
                  className="text-white hover:bg-slate-600 focus:bg-slate-600"
                >
                  {month}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <Button
          className="w-full bg-pink-500 hover:bg-pink-600 text-white"
          disabled={!selectedCountry || !selectedCity}
        >
          <Search className="h-4 w-4 mr-2" />
          Search
        </Button>
      </div>

      {/* Calendar Header */}
      <div className="flex items-center justify-between mb-4">
        <Button
          variant="ghost"
          size="sm"
          className="text-gray-400 hover:text-white"
          onClick={() => setCurrentMonth(prev => Math.max(0, prev - 1))}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <h3 className="text-white font-semibold">{selectedMonth} 2024</h3>
        <Button
          variant="ghost"
          size="sm"
          className="text-gray-400 hover:text-white"
          onClick={() => setCurrentMonth(prev => Math.min(11, prev + 1))}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      {/* Days of Week */}
      <div className="grid grid-cols-7 gap-1 mb-2">
        {daysOfWeek.map(day => (
          <div
            key={day}
            className="text-center text-xs text-gray-400 font-medium py-2"
          >
            {day}
          </div>
        ))}
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-1">
        {getDaysInMonth().map(date => {
          const isSelected = selectedDates.includes(date);
          const isAvailable = availableDates.includes(date);
          const isToday = date === 1; // Mock today

          return (
            <button
              key={date}
              onClick={() => handleDateClick(date)}
              disabled={!isAvailable}
              className={`
                aspect-square flex items-center justify-center text-sm rounded-md transition-all duration-200
                ${
                  isSelected
                    ? "bg-pink-500 text-white font-semibold"
                    : isAvailable
                    ? "bg-slate-700 text-white hover:bg-slate-600"
                    : "bg-slate-900 text-gray-600 cursor-not-allowed"
                }
                ${isToday && !isSelected ? "ring-2 ring-pink-400" : ""}
              `}
            >
              {date}
              {isSelected && date === 1 && (
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-pink-400 rounded-full flex items-center justify-center">
                  <div className="w-1 h-1 bg-white rounded-full"></div>
                </div>
              )}
            </button>
          );
        })}
      </div>

      {/* Selected Dates Info */}
      {selectedDates.length > 0 && (
        <div className="mt-6 p-3 bg-slate-700 rounded-lg">
          <h4 className="text-pink-400 font-semibold text-sm mb-2">
            Selected Dates
          </h4>
          <div className="flex flex-wrap gap-2">
            {selectedDates
              .sort((a, b) => a - b)
              .map(date => (
                <span
                  key={date}
                  className="px-2 py-1 bg-pink-500 text-white text-xs rounded-full"
                >
                  {selectedMonth} {date}
                </span>
              ))}
          </div>
        </div>
      )}

      {/* Legend */}
      <div className="mt-4 space-y-2 text-xs">
        <div className="flex items-center gap-2 text-gray-400">
          <div className="w-3 h-3 bg-pink-500 rounded"></div>
          <span>Selected dates</span>
        </div>
        <div className="flex items-center gap-2 text-gray-400">
          <div className="w-3 h-3 bg-slate-700 rounded"></div>
          <span>Available dates</span>
        </div>
        <div className="flex items-center gap-2 text-gray-400">
          <div className="w-3 h-3 bg-slate-900 rounded"></div>
          <span>Unavailable dates</span>
        </div>
      </div>
    </div>
  );
};

export default BookingCalendar;
