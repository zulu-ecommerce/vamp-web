"use client";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";

// Dynamically import react-leaflet components
const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), {
  ssr: false,
});
const Tooltip = dynamic(
  () => import("react-leaflet").then((mod) => mod.Tooltip),
  { ssr: false }
);

const LocationMap = () => {
  const [icon, setIcon] = useState(null);

  useEffect(() => {
    // Dynamically import Leaflet for client-side rendering only
    import("leaflet").then((L) => {
      const redMapPinIcon = new L.Icon({
        iconUrl: "https://cdn-icons-png.flaticon.com/512/252/252025.png",
        iconSize: [32, 32],
        iconAnchor: [16, 32], // Position the anchor at the base of the pin
        popupAnchor: [0, -32],
      });
      setIcon(redMapPinIcon as any); // Set the custom icon
    });
  }, []);

  const centerLocation = [6.4480564958219775, 3.470070967687236];
  const zoomLevel = 24;

  return (
    <MapContainer
      center={centerLocation as [number, number]}
      zoom={zoomLevel}
      style={{ height: "100%", width: "100%", zIndex: 3 }}
      scrollWheelZoom={false}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      {/* Conditionally render the Marker only if the icon is set */}
      {icon && (
        <Marker position={centerLocation as [number, number]} icon={icon}>
          <Tooltip permanent direction="right" offset={[10, 0]}>
            Vamp
          </Tooltip>
          <Popup>
            <div>
              <strong>Vamp</strong>
            </div>
          </Popup>
        </Marker>
      )}
    </MapContainer>
  );
};

export default LocationMap;
