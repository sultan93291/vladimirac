"use client";

const DestinationsMap = () => {
  const destinations = [
    { id: 1, name: "United Kingdom", x: 15, y: 35 },
    { id: 2, name: "Norway", x: 45, y: 15 },
    { id: 3, name: "Finland", x: 65, y: 12 },
    { id: 4, name: "Germany", x: 45, y: 45 },
    { id: 5, name: "Poland", x: 55, y: 40, highlighted: true },
    { id: 6, name: "France", x: 25, y: 55 },
    { id: 7, name: "Spain", x: 15, y: 70 },
    { id: 8, name: "Italy", x: 45, y: 65 },
    { id: 9, name: "Greece", x: 60, y: 75 },
    { id: 10, name: "Romania", x: 65, y: 55 },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto lg:pt-20 pt-10 2xl:px-0 px-5">
      <h1 className="text-3xl font-bold text-pink-400 text-center mb-8">
        Destinations covered
      </h1>

      <div className="relative rounded-lg p-8">
        <svg
          viewBox="0 0 100 100"
          className="w-full h-auto"
          style={{ minHeight: "400px" }}
        >
    
          <g fill="#9CA3AF" stroke="#6B7280" strokeWidth="0.2">
            {/* United Kingdom */}
            <path d="M8,25 L18,22 L20,28 L22,35 L18,38 L12,40 L8,35 Z" />
            {/* Ireland */}
            <path d="M2,30 L8,28 L10,35 L6,38 L2,35 Z" />
            {/* Norway */}
            <path d="M40,5 L48,8 L50,20 L45,25 L42,20 L40,12 Z" />
            {/* Sweden */}
            <path d="M45,8 L52,10 L55,25 L50,28 L45,25 Z" />
            {/* Finland */}
            <path d="M55,5 L65,8 L68,20 L62,25 L55,22 Z" />
            {/* France */}
            <path d="M20,45 L35,42 L38,55 L35,65 L25,68 L18,60 L20,50 Z" />
            {/* Spain */}
            <path d="M8,60 L25,58 L28,70 L25,78 L15,80 L8,75 Z" />
            {/* Germany */}
            <path d="M35,35 L50,32 L52,45 L48,50 L35,48 Z" />
            {/* Poland - Highlighted */}
            <path
              d="M50,30 L65,28 L68,42 L62,48 L50,45 Z"
              fill={
                destinations.find(d => d.highlighted) ? "#EC4899" : "#9CA3AF"
              }
            />
            {/* Italy */}
            <path d="M40,55 L48,52 L52,70 L48,78 L42,75 L38,65 Z" />
            {/* Greece */}
            <path d="M55,65 L65,62 L68,75 L62,80 L55,78 Z" />
      
            <path d="M65,35 L78,32 L82,45 L75,50 L65,48 Z" /> 
            <path d="M35,48 L50,45 L52,58 L45,62 L35,60 Z" />{" "}
            {/* Austria/Czech */}
            <path d="M20,38 L35,35 L38,48 L32,52 L20,50 Z" />{" "}
            {/* Belgium/Netherlands */}
          </g>

          {/* Destination Markers */}
          {destinations.map(destination => (
            <g key={destination.id}>
              <circle
                cx={destination.x}
                cy={destination.y}
                r="2"
                fill="#EC4899"
                className="cursor-pointer hover:fill-pink-300 transition-colors"
              />
              <circle
                cx={destination.x}
                cy={destination.y}
                r="1"
                fill="#1E293B"
              />
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
};

export default DestinationsMap;

