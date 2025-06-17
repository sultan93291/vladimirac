"use client";

import Container from "@/Components/Shared/Container";
import React, { useEffect, useRef, useState } from "react";
import { MapContainer, TileLayer, GeoJSON, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { Feature, FeatureCollection, Geometry } from "geojson";

// Fix marker icon paths for Next.js
delete (L.Icon.Default.prototype as { _getIconUrl?: () => string })._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

import allCountries from "../../Data/countries.geo.json";

const europeanCountryNames = [
  "Albania",
  "Andorra",
  "Armenia",
  "Austria",
  "Azerbaijan",
  "Belarus",
  "Belgium",
  "Bosnia and Herzegovina",
  "Bulgaria",
  "Croatia",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Estonia",
  "Finland",
  "France",
  "Georgia",
  "Germany",
  "Greece",
  "Hungary",
  "Iceland",
  "Ireland",
  "Italy",
  "Kazakhstan",
  "Kosovo",
  "Latvia",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Malta",
  "Moldova",
  "Monaco",
  "Montenegro",
  "Netherlands",
  "North Macedonia",
  "Norway",
  "Poland",
  "Portugal",
  "Romania",
  "Russia",
  "San Marino",
  "Serbia",
  "Slovakia",
  "Slovenia",
  "Spain",
  "Sweden",
  "Switzerland",
  "Turkey",
  "Ukraine",
  "United Kingdom",
  "Vatican",
];

type CountryFeatureProperties = {
  name: string;
};

const countriesGeoJSON: FeatureCollection<Geometry, CountryFeatureProperties> =
  {
    type: "FeatureCollection",
    features: (allCountries as FeatureCollection).features.filter(
      (feature): feature is Feature<Geometry, CountryFeatureProperties> =>
        europeanCountryNames.includes(feature.properties?.name)
    ),
  };

type SelectedCountry = {
  name: string;
  latlng: [number, number];
  feature: Feature<Geometry, CountryFeatureProperties>;
};

const getFeatureCenter = (feature: Feature): [number, number] => {
  const layer = L.geoJSON(feature);
  const bounds = layer.getBounds();
  const center = bounds.getCenter();
  return [center.lat, center.lng];
};

const PinkIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
  iconSize: [10, 15],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  shadowSize: [41, 41],
  className: "marker-icon-pink",
});

const Page = () => {
  const mapRef = useRef<L.Map | null>(null);
  const [selectedCountry, setSelectedCountry] =
    useState<SelectedCountry | null>(null);

  useEffect(() => {
    if (mapRef.current) {
      const bounds = L.geoJSON(countriesGeoJSON).getBounds();
      mapRef.current.fitBounds(bounds);
    }
  }, []);

  const onEachCountry = (
    feature: Feature<Geometry, CountryFeatureProperties>,
    layer: L.Layer
  ) => {
    layer.on({
      click: () => {
        const name = feature.properties?.name ?? "Unknown";
        const latlng = getFeatureCenter(feature);
        setSelectedCountry({ name, latlng, feature });
      },
    });
  };

  const countryStyle = (
    feature?: Feature<Geometry, CountryFeatureProperties>
  ): L.PathOptions => {
    const isSelected = selectedCountry?.name === feature?.properties?.name;
    return {
      fillColor: isSelected ? "#BF4987" : "#D3D3D3",
      weight: 1.5,
      opacity: 1,
      color: "#666666",
      fillOpacity: isSelected ? 0.8 : 0.5,
      dashArray: isSelected ? "4" : undefined,
      className: isSelected ? "selected-country-glow" : undefined,
    };
  };

  return (
    <section className="py-20" style={{ backgroundColor: "#13213C" }}>
      <Container>
        <h2 className="text-center font-bold text-white font-arial text-[64px]">
          Destinations covered
        </h2>

        <div
          className="mt-12 h-[500px] w-full rounded-lg overflow-hidden border border-gray-300"
          style={{ backgroundColor: "#FFFFFF" }}
        >
          <MapContainer
            ref={ref => {
              if (ref) mapRef.current = ref;
            }}
            center={[54.5, 15.2]}
            zoom={4}
            scrollWheelZoom
            style={{ height: "100%", width: "100%" }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <GeoJSON
              data={countriesGeoJSON}
              style={countryStyle}
              onEachFeature={onEachCountry}
            />

            {countriesGeoJSON.features.map((feature, idx) => {
              const coords = getFeatureCenter(feature);
              return (
                <Marker
                  key={idx}
                  position={coords}
                  icon={PinkIcon}
                  eventHandlers={{
                    click: () => {
                      const name = feature.properties?.name ?? "Unknown";
                      setSelectedCountry({ name, latlng: coords, feature });
                    },
                  }}
                />
              );
            })}

            {selectedCountry && (
              <Popup position={selectedCountry.latlng} closeOnClick={true}>
                <div
                  className="p-4 rounded-md"
                  style={{
                    backgroundColor: "rgba(195, 150, 174, 0.85)",
                    color: "#fff",
                    minWidth: "250px",
                  }}
                >
                  <h3 className="font-bold text-lg mb-2">
                    {selectedCountry.name}
                  </h3>
                  <ul className="flex flex-col gap-3 text-sm">
                    <li>
                      <strong>630M</strong> Annual Sales Transported
                    </li>
                    <li>
                      <strong>950K</strong> Annual Tons Transported
                    </li>
                    <li>
                      <strong>120</strong> Different Clients Per Year
                    </li>
                    <li>
                      <strong>220K</strong> Annual Shipments
                    </li>
                  </ul>
                  <div className="flex justify-end">
                    <button
                      style={{
                        marginTop: "20px",
                        backgroundColor: "#13213C",
                        border: "none",
                        color: "#fff",
                        padding: "12px 16px",
                        borderRadius: "8px",
                        cursor: "pointer",
                      }}
                      onClick={() =>
                        alert(`More info about ${selectedCountry.name}`)
                      }
                    >
                      Get Estimate
                    </button>
                  </div>
                </div>
              </Popup>
            )}
          </MapContainer>
        </div>
      </Container>

      <style>{`
        .selected-country-glow {
          filter: drop-shadow(0 0 8px #BF4987);
        }
        .marker-icon-pink {
          filter: drop-shadow(0 0 2px rgba(191, 73, 135, 0.6));
          opacity: 0.7;
        }
      `}</style>
    </section>
  );
};

export default Page;
